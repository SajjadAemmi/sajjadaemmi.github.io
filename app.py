import os
from datetime import datetime
from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import UserMixin, LoginManager, login_required, current_user, login_user, logout_user
import config


app = Flask(__name__)
app.secret_key = 'super secret string' 
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///database.db"
app.config['UPLOAD_FOLDER'] = config.upload_folder

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username


@login_manager.user_loader
def load_user(email):
    user = User()
    user.id = email
    return user


@app.route("/")
def root():
    return render_template('index.html')


@app.route("/hello")
def hello():
    return "Hello, World!"


@app.route('/test')
def test(name=None):
    return render_template('test.html', name=name)


@app.context_processor
def inject_now():
    return {'now': datetime.utcnow()}


@app.errorhandler(404)
def page_not_found(error):
    return render_template('page_not_found.html'), 404


@app.route("/me")
def me_api():
    user = get_current_user()
    return {
        "username": user.username,
        "theme": user.theme,
        "image": url_for("user_image", filename=user.image),
    }


@app.route('/blog')
def blog():
    posts = db.session.execute(f"SELECT * FROM posts").mappings().all()
    return render_template('blog.html', posts=posts)


@app.route('/blog/<post_id>')
def blog_post(post_id):
    post = db.session.execute(f"SELECT * FROM posts WHERE id={post_id}").fetchone()
    return render_template('blog_post.html', post=post)


@app.route('/admin/login', methods=['POST', 'GET'])
def login():
    if request.method == 'GET':
        return render_template('admin/login.html')
     
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        result = db.session.execute(f"SELECT * FROM users WHERE email='{email}'").fetchone()
        if result is not None and bcrypt.check_password_hash(result["password"], password):
            user = User()
            user.id = email
            login_user(user)
            return redirect("/admin/dashboard")
        else:
            return redirect("/admin/login")


@app.route("/admin/logout")
@login_required
def logout():
    logout_user()
    return redirect('/admin/login')


@app.route('/admin/dashboard')
@login_required
def admin_dashboard():
    return render_template('admin/dashboard.html')


@app.route('/admin/blog')
@login_required
def admin_blog():
    posts = db.session.execute(f"SELECT * FROM posts").mappings().all()
    return render_template('admin/blog.html', posts=posts)


@app.route('/admin/blog/add', methods=['POST', 'GET'])
@login_required
def admin_blog_add():
    if request.method == 'GET':
        return render_template('admin/add_post.html')
    
    if request.method == 'POST':
        if 'image' not in request.files or not request.files['image']:
            image_path = ""
        else:
            image_file = request.files['image']
            image_path = os.path.join(app.config['UPLOAD_FOLDER'], "images/posts/", image_file.filename)
            image_file.save(image_path)
        
        title = request.form['title']
        body = request.form['body']
        db.session.execute(f"INSERT INTO posts(title, body, image) VALUES('{title}', '{body}', '{image_path}')")
        db.session.commit()
        return redirect("/admin/blog")


@app.route('/admin/projects')
@login_required
def admin_projects():
    return render_template('admin/projects.html')


if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True, use_reloader=True, threaded=True)
