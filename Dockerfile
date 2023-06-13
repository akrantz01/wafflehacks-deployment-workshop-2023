FROM python:3.11-slim

ENV PYTHONUNBUFFERED 1
ENV PYTHONFAULTHANDLER 1

RUN pip install --no-cache-dir poetry

WORKDIR /app

COPY poetry.lock pyproject.toml ./
RUN poetry export -f requirements.txt -o requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY migrations migrations
COPY wafflodo wafflodo

CMD ["gunicorn", "-w", "1", "-b", "[::]:8000", "--access-logfile", "-", "--error-logfile", "-", "wafflodo:app"]
