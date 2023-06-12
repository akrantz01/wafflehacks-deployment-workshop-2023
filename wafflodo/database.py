from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Todo(db.Model):
    __tablename__ = "todos"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String, nullable=False)
    complete = db.Column(db.Boolean, nullable=False, default=False)

    def __repr__(self):
        return f"<Todo id={self.id} content={self.content!r} complete={self.complete}>"


def initialize_database(app: Flask):
    """
    Initialize the database
    :param app: the Flask app
    """
    db.init_app(app)

    with app.app_context():
        db.create_all()
