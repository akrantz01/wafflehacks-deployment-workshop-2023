from flask import Flask, request, abort

from .database import initialize_database, db, Todo

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.sqlite"

initialize_database(app)


@app.get("/todos")
def list_todos():
    """
    Get a list of all the todos
    """
    return [
        dict(id=todo.id, content=todo.id, complete=todo.complete)
        for todo in Todo.query.all()
    ]


@app.post("/todos")
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
