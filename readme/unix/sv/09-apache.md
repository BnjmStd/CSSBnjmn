# CONFIGURAR APACHE Y CÓMO SALVAR UN SERVIDOR SIN TENER ACCESO 😱 | CURSO DE SYSADMIN EN LINUX

install apache

sudo apt install apache2

# puertos

sudo ufw app list:

    Apache: solo el trafico por p:80 trafico web no inscriptado
    Apache Full: p-80 p:443, para trafico inscriptado
    Apache Secure: p:443
    Apache Secure
    OpenSSH

el navegador por defecto abre el p:80 y el navegador lo redirige

sudo ufw allow 'Apache Full'
sudo ufw status
sudo systemctl enable uwf

sudo systemctl start ufw
sudo ufw status
sudo ufw enable

antes \*\* sudo ufw allow 22222

###

sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT

### PROXY INVERSO

Ejemplo de Proxy inverso (cliente a servidor, con intermediario)
Una gran tienda en línea como Amazon tiene miles de usuarios haciendo solicitudes al mismo tiempo. Si todos accedieran directamente al servidor principal, podría saturarse.

Caso real:

Amazon configura un proxy inverso con Nginx.
Los usuarios se conectan al proxy inverso, no directamente al servidor principal.
El proxy inverso:
Distribuye las solicitudes a varios servidores (balanceo de carga).
Almacena en caché contenido común (como imágenes de productos).
Oculta el servidor real, mejorando la seguridad.
Resultado:

Los usuarios acceden rápidamente al sitio sin saber que hay múltiples servidores trabajando detrás del proxy inverso.

## PROXY

Ejemplo de Proxy (cliente a servidor)
Imagina que estás en una empresa y quieren controlar qué sitios web puedes visitar. Configuran un proxy en la red.

Caso real:

Tú quieres acceder a www.youtube.com, pero tu solicitud pasa primero por el proxy de la empresa.
El proxy revisa las políticas: "YouTube está bloqueado".
Resultado: Te muestra un mensaje de restricción en lugar del sitio web.
Uso adicional:
Al usar un proxy público (como un proxy para cambiar IP), puedes acceder a contenido bloqueado en tu país. Ejemplo: Ver un video en Netflix que solo está disponible en Estados Unidos.

sudo ufw allow 80
sudo ufw allow 443

sudo systemctl status apache2
hostname -I

enable systemctl

aplicaciones independientes en un mismo servidor

administrar

## puertos en uso

benja@metafoodcraft:~$ sudo ss -tuln
Netid State Recv-Q Send-Q Local Address:Port Peer Address:Port Process
udp UNCONN 0 0 0.0.0.0:10000 0.0.0.0:_
udp UNCONN 0 0 127.0.0.54:53 0.0.0.0:_
udp UNCONN 0 0 127.0.0.53%lo:53 0.0.0.0:_
udp UNCONN 0 0 45.236.128.220%ens3:68 0.0.0.0:_
tcp LISTEN 0 4096 127.0.0.53%lo:53 0.0.0.0:_
tcp LISTEN 0 4096 0.0.0.0:10000 0.0.0.0:_
tcp LISTEN 0 4096 127.0.0.54:53 0.0.0.0:_
tcp LISTEN 0 4096 [::]:10000 [::]:_
tcp LISTEN 0 4096 _:22222 _:_
tcp LISTEN 0 511 _:80 _:_
benja@metafoodcraft:~$

## entorno

sudo mkdir /var/www/benjaminExample
sudo chown -R $USER:$USER /var/www/benjaminExample
sudo chown -R 755 /var/www/benjamin

## sudo vim /etc/apache2/sites-available/\*archivo

virtual host

man a2ensite

<VirtualHost \*:80>
ServerAdmin webmaster@mi_sitio.com
ServerName mi_sitio.com
DocumentRoot /ruta/a/tu/carpeta ErrorLog ${APACHE_LOG_DIR}/error.log
CustomLog ${APACHE_LOG_DIR}/access.log combined
<Directory /ruta/a/tu/carpeta> AllowOverride All
Require all granted </Directory>
</VirtualHost>

var/www/benjaminExample

sudo a2ensite mi_sitio.conf

sudo a2dissite 000-default.conf
