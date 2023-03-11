FROM nginx:1.23.3

EXPOSE 80
EXPOSE 443

# default nginx option setting
COPY default.conf /etc/nginx/sites-available/default

# SSL
COPY certificate.crt /etc/ssl/certificate.crt
COPY private.key /etc/ssl/private.key
