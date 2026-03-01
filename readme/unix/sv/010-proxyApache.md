# CREAR UN PROXY EN APACHE PARA WEBMIN | CURSO DE SYSADMIN EN LINUX

el certificado ssl normalmente tiene un costo

webadmin en apache???

un proxy puede estar en el sv o aparte, es quien recibe una request y la resuelve de otra manera

sudo nvim /etc/apache2/sites-available/webmin.benjaminExample.conf

sudo vim /etc/webmin/miniserv.conf
desactivar ssl
ssl = 0

# especificar

sudo vim /etc/webmin/config
referers=webmin.xx.xx.xx.com

sudo a2enmod proxy_http
sudo a2enmod .conf

# verificar errrores en los archivos de configuración

apache2ctl configtest
