# INSTALAR DOCKER E INTERFAZ WEB DE DOCKER (PORTAINER) [PARTE #1] | CURSO DE SYSADMIN EN LINUX

DOCKER => virtualiza entornos, herramientas o sistemas completos
parecido a maquina virtual, todos los entornos que simulamos son CLI

crear entornos encapsulados, y llevar app a producción
compartiendo software con otras aplicaciones

# install docker


sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common


benja@metafoodcraft:~$ sudo usermod -aG docker $USER


# portainer

docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest

parece que tengo todos los puertos abiertos

<VirtualHost *:80>
ServerAdmin bastudillo.alarcon@gmail.com
ServerName portainer.varandcode.com
ServerAlias www.portainer.varandcode.com
ProxyPass / http://localhost:9000/
ProxyPassReverse / http://localhost:9000/
RewriteEngine on
RewriteCond %{SERVER_NAME} =portainer.varandcode.com [OR]
RewriteCond %{SERVER_NAME} =www.portainer.varandcode.com
RewriteRule ^ https://%{SERVER_NAME}%{REQUEST_URI} [END, NE, R=permanent]
</VirtualHost>


# solucionar el problema del firewall puertos!

sudo ufw status


## problema con docker

Tu firewall no se reescribió, pero el comportamiento que observas puede deberse a cómo Docker gestiona las reglas de red en el sistema. Docker tiene su propio mecanismo para exponer puertos y puede modificar dinámicamente las reglas de iptables, lo que puede parecer que "ignora" configuraciones de ufw. A continuación, te explico lo que está ocurriendo y cómo solucionarlo.

Por qué puedes acceder al puerto 9000 desde la IP
Docker crea reglas de red automáticamente para los contenedores que exponen puertos. Esto incluye modificar iptables para permitir el acceso a esos puertos desde cualquier lugar, independientemente de las reglas de ufw.

En tu caso:

El contenedor de Portainer está configurado para escuchar en el puerto 9000 y Docker lo expone directamente a todas las interfaces (0.0.0.0).
Esto se refleja en la salida del comando ss -tuln:
ruby
Copiar código
tcp LISTEN 0 4096 0.0.0.0:9000 0.0.0.0:*
Lo que indica que el puerto 9000 está escuchando en todas las interfaces.
Cómo bloquear el acceso directo al puerto 9000
Si deseas que el puerto 9000 sea accesible solo a través del subdominio y no directamente desde la IP, puedes ajustar la configuración siguiendo estos pasos:

1. Limitar la exposición del puerto con Docker
Modifica cómo Docker expone el puerto 9000. Por ejemplo, en lugar de exponerlo en 0.0.0.0:9000, haz que solo esté disponible en localhost.

Si estás ejecutando Portainer con un comando docker run, cambia:

bash
Copiar código
docker run -d -p 9000:9000 portainer/portainer
Por:

bash
Copiar código
docker run -d -p 127.0.0.1:9000:9000 portainer/portainer
Si estás usando docker-compose, ajusta el archivo docker-compose.yml:

yaml
Copiar código
ports:
  - "127.0.0.1:9000:9000"
Esto hará que el puerto 9000 solo sea accesible desde localhost y no desde otras interfaces.

2. Configurar UFW para bloquear el puerto 9000
Aunque Docker sobrescribe algunas reglas de iptables, puedes configurar ufw para bloquear el acceso directo al puerto 9000. Por ejemplo:

Bloquea el puerto para todas las conexiones externas:

bash
Copiar código
sudo ufw deny 9000
Permite el acceso desde localhost si es necesario (opcional, pero generalmente no necesario):

bash
Copiar código
sudo ufw allow from 127.0.0.1 to any port 9000
Reinicia ufw para aplicar los cambios:

bash
Copiar código
sudo ufw reload
3. Verifica las reglas de Docker y UFW
Puedes inspeccionar las reglas actuales de iptables para asegurarte de que las reglas de Docker no estén sobrescribiendo las de ufw:

bash
Copiar código
sudo iptables -L -n -v
Si ves reglas creadas por Docker que permiten el acceso al puerto 9000, eso explica por qué ufw parece ser ignorado.

4. Usar DOCKER_OPTS para evitar conflictos con UFW
Puedes configurar Docker para no gestionar las reglas de iptables automáticamente:

Crea o edita el archivo /etc/docker/daemon.json:

json
Copiar código
{
  "iptables": false
}
Reinicia el servicio Docker:

bash
Copiar código
sudo systemctl restart docker
Nota: Si deshabilitas la gestión de iptables por Docker, necesitarás configurar manualmente las reglas de red para tus contenedores.

Resumen
Docker expone el puerto 9000 por defecto en todas las interfaces, lo que permite el acceso directo desde la IP.
Puedes limitar esto configurando Docker para que solo exponga el puerto en localhost.
Usa ufw para bloquear el acceso al puerto 9000 desde el exterior si Docker lo expone.
Si prefieres un control más estricto, desactiva la gestión automática de iptables en Docker.


{
    "iptables": false

}

en el file:  sudo vim /etc/docker/daemon.json


# limitar docker a conexiones locales (127)

el proxy inverso es quien redirige a docker

docker modifica las reglas de firewall reglas finales, docker tira facts

docker modifica el firewall, servia los servicios por ahi


iptables > ufw 
sudo iptables -L -n -v
limitar el alcance que tiene docker al exterior 

siempre usar chain de docker user

 sudo vim /etc/docker/daemon.json

{
        "ip": "127.0.0.1"

}

sudo systemctl status docker
sudo systemctl reload docker
sudo systemctl 
                                                                                                         ~                 

