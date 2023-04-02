FROM python:3.11

EXPOSE 80
EXPOSE 443

COPY ./requirements.txt /requirements.txt

RUN pip install -r /requirements.txt

COPY ./app /app

COPY ./secret.json /secret.json
COPY ./certificate.crt /certificate.crt
COPY ./private.key /private.key

CMD uvicorn app.main:app --host 0.0.0.0 --port 443 --ssl-keyfile private.key --ssl-certfile certificate.crt
