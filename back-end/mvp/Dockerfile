FROM python:3.11

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY ./app /app

COPY secret.json secret.json

EXPOSE 80

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]
