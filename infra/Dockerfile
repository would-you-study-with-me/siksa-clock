FROM ubuntu:22.04

RUN apt-get update && apt-get upgrade
RUN apt-get install -y nginx
RUN systemctl status nginx
RUN systemctl stop nginx
RUN systemctl enable

COPY certificate.crt /etc/nginx/nginx.conf/default.conf
COPY private.key /etc/nginx/nginx.conf/default.conf
COPY nginx.conf /etc/nginx/sites-available/default

EXPOSE 7777
EXPOSE 80
EXPOSE 443

RUN systemctl restart nginx