FROM python:3.11

EXPOSE 7777

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY ./app /app

COPY secret.json secret.jsono

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "7777"]
