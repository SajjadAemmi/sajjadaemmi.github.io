# save this as app.py
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def root():
    return render_template('index.html')


@app.route("/hello")
def hello():
    return "Hello, World!"


@app.route('/test')
def test(name=None):
    return render_template('test.html', name=name)


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


@app.route('/login', methods=['POST', 'GET'])
def login():
    error = None
    if request.method == 'POST':
        if valid_login(request.form['username'],
                       request.form['password']):
            return log_the_user_in(request.form['username'])
        else:
            error = 'Invalid username/password'
    # the code below is executed if the request method
    # was GET or the credentials were invalid
    return render_template('login.html', error=error)