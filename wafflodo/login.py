from typing import Optional

from flask import Flask, abort
from flask_login import LoginManager

from .database import User, db

login_manager = LoginManager()


@login_manager.user_loader
def load_user(user_id: str) -> Optional[User]:
    return db.session.get(User, user_id)


@login_manager.unauthorized_handler
def unauthorized():
    abort(401)


def initialize_login(app: Flask):
    """
    Initialize the login system
    :param app: the Flask app
    """
    login_manager.init_app(app)
