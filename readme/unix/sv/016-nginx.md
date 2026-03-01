# COPIA DE SEGURIDAD Y MIGRACIÓN DE APACHE A NGINX [PARTE #1] | CURSO DE SYSADMIN EN LINUX

reverse proxy con websocket?

migración

# copia de seguridad del servidor

sudo tar --exclude='/proc' -czvf backup.tar.gz

sudo apt install nginx -y
sudo ufw app list
sudo ufw allow 'Nginx HTTPS'
sudo vim nginx proxy params

touch /etc/nginx/sites-available/varandcode

sudo ln -s /etc/nginx/sites-available/varandcode /etc/nginx/sites-enabled/

sudo nginx -t
sudo systemctl stop apache2

# remover link simbolico

sudo rm /etc/nginx/site_enables/default

# quien usa el puerto

sudo lsof -i :8000

# disable apache2

benja@metafoodcraft:~$ sudo systemctl disable apache2
Synchronizing state of apache2.service with SysV service script with /usr/lib/systemd/systemd-sysv-install.
Executing: /usr/lib/systemd/systemd-sysv-install disable apache2
Removed "/etc/systemd/system/multi-user.target.wants/apache2.service".

sudo apachectl stop
sudo /etc/init.d/apache2 stop

## pruebas por error

benja@metafoodcraft:~$ curl -I http://localhost
HTTP/1.1 301 Moved Permanently
Server: nginx/1.24.0 (Ubuntu)
Date: Sun, 12 Jan 2025 02:03:52 GMT
Content-Type: text/html
Content-Length: 178
Connection: keep-alive
Location: https://localhost/

benja@metafoodcraft:~$ curl -I http://varandcode
curl: (6) Could not resolve host: varandcode
benja@metafoodcraft:~$ curl -I http://varandcode.com
HTTP/1.1 200 OK
Server: nginx/1.24.0 (Ubuntu)
Date: Sun, 12 Jan 2025 02:04:07 GMT
Content-Type: text/html
Content-Length: 1752
Last-Modified: Fri, 10 Jan 2025 22:04:08 GMT
Connection: keep-alive
ETag: "67819958-6d8"
Accept-Ranges: bytes

benja@metafoodcraft:~$

# log sistema

sudo journalctl -u nginx

# montar no estatico

sudo tail -f /var/log/nginx/error.log

sudo lsof -i :80

sudo ufw delete allow 'Apache Full'
sudo certbot --nginx

# exponer docker a internet

network_mode host

# otro

benja@metafoodcraft:/etc/nginx/sites-available$ cd /etc/docker/
benja@metafoodcraft:/etc/docker$ sudo vim daemon.json
benja@metafoodcraft:/etc/docker$ cat daemon.json
{
"ip": "127.0.0.1"
"iptables": false

}
benja@metafoodcraft:/etc/docker$

# docusaurios

# mover fnm aun directorio global

sudo mv /root/.local/share/fnm /usr/local/fnm

# en /etc/bash.bashrc

export PATH="/usr/local/fnm:$PATH"
eval "$(fnm env)"

# recargar conf

source /etc/bash.bashrc

## instalar cosas para todos los usuarios

Instalar herramientas en ubicaciones globales
Usar directorios globales: Los directorios comunes para instalaciones globales son:
/usr/local/bin: Para binarios y ejecutables.
/usr/local/share: Para datos o configuraciones compartidas.
/usr/local/lib: Para bibliotecas compartidas.
Asegúrate de mover cualquier herramienta a estos directorios para que sean accesibles por todos los usuarios.

# which

which ls

busca el ejecutable

which fnm

# copiar por ssh

# scp

scp -r /ruta/local/carpeta usuario@ip_del_servidor:/ruta/remota/

-r: Copia recursivamente, incluyendo todos los archivos y subcarpetas.
/ruta/local/carpeta: La ruta de la carpeta en tu máquina local.
usuario: El nombre de usuario que usas para acceder al VPS.
ip_del_servidor: La dirección IP o dominio de tu VPS.
/ruta/remota/: La ubicación en el VPS donde quieres copiar la carpeta.

Si tienes una carpeta llamada miProyecto en tu máquina local y quieres enviarla al directorio /var/www/ en tu VPS:

bash
Copiar código
scp -r ./miProyecto usuario@192.168.1.100:/var/www/

# rsync

rsync -avz /ruta/local/carpeta usuario@ip_del_servidor:/ruta/remota/

-a: Modo "archivado", mantiene permisos, enlaces, etc.
-v: Modo detallado, muestra información durante la transferencia.
-z: Comprime los datos durante la transferencia.
/ruta/local/carpeta: La carpeta que deseas enviar.
usuario@ip_del_servidor:/ruta/remota/: Destino en el VPS.

Ejemplo:
Si tienes una carpeta llamada miProyecto y quieres enviarla a /var/www/:

bash
Copiar código
rsync -avz ./miProyecto usuario@192.168.1.100:/var/www/

## caos real

scp -r -P 22222 ./serveron/dist/ benja@varandcode.com:/var/www/
