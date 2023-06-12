from flask import Flask

from .database import initialize_database

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.sqlite"

initialize_database(app)
