import os


database_host = "sajjadaemmi-db"
database_user = "root"
database_password = ""
database_name = ""

db_path = os.path.join(os.path.dirname(__file__), 'database.db')
database_url = 'sqlite:///' + db_path
upload_folder = "./static/"
