from flask import Flask, render_template, request
from flask_mysqldb import MySQL


app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'sajjadaemmi'
 
mysql = MySQL(app)

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


@app.route('/form')
def form():
    return render_template('form.html')


@app.route('/login', methods = ['POST', 'GET'])
def login():
    if request.method == 'GET':
        return render_template('login.html')
     
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        cursor = mysql.connection.cursor()
        cursor.execute(f"SELECT * FROM users WHERE email='{email}' AND password='{password}'")
        result = cursor.fetchall()
        cursor.close()
        if len(result) == 1:
            return f"Done!!"
        else:
            return f"Besco!!"


if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True, use_reloader=True, threaded=True)
