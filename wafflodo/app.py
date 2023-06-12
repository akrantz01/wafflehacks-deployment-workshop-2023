from flask import Flask, request, abort
from flask_login import current_user, login_required, login_user, logout_user
from passlib.hash import argon2

from .database import initialize_database, db, Todo, User
from .login import initialize_login

app = Flask(__name__)
app.config["SECRET_KEY"] = "some-secure-secret"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.sqlite"

initialize_database(app)
initialize_login(app)


@app.get("/todos")
@login_required
def list_todos():
    """
    Get a list of all the todos
    """
    return [
        dict(id=todo.id, content=todo.id, complete=todo.complete)
        for todo in Todo.query.all()
    ]


@app.post("/todos")
@login_required
def create_todo():
    """
    Create a new todo
    """
    content = request.json.get("content")
    if content is None:
        abort(400)

    todo = Todo(content=content)
    db.session.add(todo)
    db.session.commit()

    return dict(id=todo.id, content=todo.content, complete=todo.complete)


@app.put("/todos/<int:id>/toggle")
@login_required
def toggle_todo(id: int):
    """
    Toggle the completion status of a todo
    :param id: the todo's ID
    """
    todo = db.get_or_404(Todo, id)

    todo.complete = not todo.complete
    db.session.commit()

    return dict(complete=todo.complete)


@app.delete("/todos/<int:id>")
@login_required
def delete_todo(id: int):
    """
    Delete a todo
    :param id: the todo's ID
    """
    todo = db.session.get(Todo, id)
    if todo is not None:
        db.session.delete(todo)
        db.session.commit()

    return "", 204


@app.post("/register")
def register():
    """
    Register a new user
    """
    username = request.json.get("username")
    password = request.json.get("password")
    if username is None or password is None:
        abort(400)

    hashed = argon2.hash(password)

    user = User(username=username, password=hashed)
    db.session.add(user)
    db.session.commit()

    return dict(success=True)


@app.post("/login")
def login():
    """
    Start a new session
    """
    username = request.json.get("username")
    password = request.json.get("password")
    if username is None or password is None:
        abort(400)

    user = User.query.where(User.username == username).first()
    if user is None:
        abort(401)

    if not argon2.verify(password, user.password):
        abort(401)

    login_user(user)

    return dict(success=True)


@app.get("/me")
@login_required
def me():
    """
    Get details about the current user
    """
    return dict(id=current_user.id, username=current_user.username)


@app.get("/logout")
@login_required
def logout():
    """
    Logout the current user
    """
    logout_user()
    return dict(success=True)
