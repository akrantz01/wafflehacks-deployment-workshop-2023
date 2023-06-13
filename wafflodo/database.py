from typing import List

from flask import Flask
from flask_login import UserMixin
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import Mapped, relationship

db = SQLAlchemy()
migrate = Migrate()


class User(db.Model, UserMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)

    todos: Mapped[List["Todo"]] = relationship(back_populates="user")

    def __repr__(self):
        return f"<User id={self.id} username={self.username!r}>"


class Todo(db.Model):
    __tablename__ = "todos"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String, nullable=False)
    complete = db.Column(db.Boolean, nullable=False, default=False)

    user_id: Mapped[int] = db.mapped_column(db.ForeignKey("users.id"))
    user: Mapped["User"] = relationship(back_populates="todos")

    def __repr__(self):
        return f"<Todo id={self.id} content={self.content!r} complete={self.complete}>"


def initialize_database(app: Flask):
    """
    Initialize the database
    :param app: the Flask app
    """
    db.init_app(app)
    migrate.init_app(app, db)
