FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf
COPY ssl_certificate.crt /etc/nginx/certificate.crt
COPY private.key /etc/nginx/private.key

EXPOSE 443
EXPOSE 80

CMD ["nginx", "-g", "deamon off;"]
