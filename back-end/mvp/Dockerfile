FROM python:3.10

RUN curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -

RUN poetry install

RUN poetry add

RUN uvicorn app.main:app
