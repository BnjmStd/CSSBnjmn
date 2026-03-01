# cambiar password

passwd

# add user

sudo adduser nombre_usuario

# privilegios de root

sudo usermod -aG sudo nombre_usuario

# poner usuario a grupo docker

sudo usermod -aG docker $USER

# groups

# silenciar mensajes

touch ~/.hushlogin
echo "" > ~/.hushlogin

# persistencia linger

sudo loginctl enable-linger tu_usuario

# comprueba

sudo whoami

# verificar la existencia del grupo sudo

getent group sudo

## iniciar tmux

tmux

## corres un largo

sudo apt update && sudo apt upgrade

## si se corta la conexión sale

tmux attach

## ver todas las sesiones

tmux ls

## volver a una especifica

tmux attach -t nombre_sesion

## comandos

| Acción                     | Comando (después de Ctrl + b) | Descripción                                     |
| -------------------------- | ----------------------------- | ----------------------------------------------- |
| Nueva ventana              | `c`                           | Crea una nueva "pestaña" dentro de tmux         |
| Cambiar de ventana         | `n` (next) o `p` (prev)       | Navega entre ventanas                           |
| Mover entre paneles        | Flechas (←↑↓→)                | Te movés entre paneles si dividiste la pantalla |
| Dividir horizontalmente    | `%`                           | Divide la pantalla en dos verticales            |
| Dividir verticalmente      | `"`                           | Divide en dos paneles horizontales              |
| Cerrar un panel            | `x`                           | Cierra el panel activo                          |
| Modo copia (para scroll)   | `[`                           | Podés moverte con las flechas y copiar texto    |
| Detach (salir sin cerrar)  | `d`                           | Salís de tmux, pero todo sigue corriendo        |
| Volver a entrar (reattach) | `tmux attach`                 | Volvés a la sesión activa                       |

# nginx

sudo apt update && sudo apt install nginx -y

# servicio de nginx

sudo systemctl status nginx

# para permitir los puertos HTTP y HTTPS:

sudo ufw allow 'Nginx Full'

#

sudo ufw allow 80
sudo ufw allow 443

# activar port ssh

sudo ufw allow 22222/tcp

# verificar reglas antes de activar

sudo ufw show added

# activar ufw

sudo ufw enable

# tu ip publica actual

curl ifconfig.me

# permitir ip y el puerto ssh que uses

sudo ufw allow from 200.100.50.25 to any port 2022 proto tcp

**Permitir acceso solo desde esa IP al puerto XXXX**

# bloquear otras ip al mismo puerto

sudo ufw deny 2022/tcp

# Si ya habías hecho un sudo ufw allow 2022/tcp, haz:

sudo ufw delete allow 2022/tcp

y luego sudo ufw deny 2022/tcp

# ver todos los usuarios

cat /etc/passwd

nombre_usuario:x:UID:GID:comentario:/home/usuario:/bin/bash

# ver solo nombres de usuario

cut -d: -f1 /etc/passwd

# ver usuarios con shell valid

grep -E '/bin/bash|/bin/zsh|/bin/sh' /etc/passwd

# ver usuarios actualmente conectados

who

# ver si un usuario existe

getent passwd nombre_usuario

# ver usuarios sudo

getent group sudo

# crear un grupo

sudo groupadd dev

# ver todo los grupos del sistema

cat /etc/group
nombre_grupo:x:GID:usuarios_miembros

# grupo usuario actual

groups

# ver que usuarios estan en un grupo

getent group nombre_grupo
developers:x:1001:user1,user2,user3

grep "^nombre_grupo:" /etc/group
sudo:x:27:usuario1,usuario2

# crea todo junto

sudo useradd -m -s /bin/bash -G dev alice

# permisos de ejecución

chmod +x crear_usuario.sh

# ver todos los host conocidos (ssh)

cat ~/.ssh/known_hosts

cat ~/.ssh/known_hosts | grep varandcode.com

ssh-keygen -F '[varandcode.com]:22222' -f ~/.ssh/known_hosts

## eliminar entrada antigua

ssh-keygen -f '/home/fermin/.ssh/known_hosts' -R '[varandcode.com]:22222'

## client scp

chmod +x copiar_vps.sh
scp -P 22222 -r bdgenomas benja@45.236.128.220:/home/benja
scp -P 22222 -r /var/www/service.varandcode benja@45.236.128.220:/var/www/
scp -P 22222 -r /var/www/varandcode benja@45.236.128.220:/var/www/

# evitar que el shell en el VPS de destino (45.236.128.220) genere esta salida para sesiones no interactivas

# instalando podmans

sudo apt install podman
podman --version
pip install podman-compose

podman-compose up -d
vim /home/benjamin/.config/cni/net.d/bdgenomas_genomas_network.conflist
podman build -t aws-translate -f dockerfile .

podman run -d --restart unless-stopped -p 8000:8000 --env-file .env aws-translate

# bashrc

# history config

HISTTIMEFORMAT="%F %T"
HISTCONTROL=ignoredups
HISTSIZE=2000
HISTFILESIZE=2000

# aliases

```bash
alias ..='cd ..;pwd'
alias ll='tree --dirsfirst -F'
alias ebashrc="nvim /home/benja/.bashrc"
alias sbashrc="source /home/benja/.bashrc"

function findLargestFiles() {
    sudo du -h -x -s -- * 2> /dev/null | sort -r -h | head -20 ;
}

function prompt() {

    PS1='\[\e[38;5;51;1;2;3m\]\u\[\e[0m\]@\h(\A):\W \[\e[1;2;3m\]\\$\[\e[0m\] '

}

function hg(){
    history | grep "$1" | tail -20
}

prompt
```

# info system

El comando `touch ~/.hushlogin` crea un archivo vacío llamado .hushlogin en tu directorio de inicio. Esto evita que el sistema muestre mensajes de bienvenida o información al iniciar sesión. El archivo .hushlogin se usa para indicar que el usuario no desea ver la información adicional al iniciar sesión

# socat

sudo apt install socat
sudo socat TCP-LISTEN:4000,fork TCP:localhost:5432

# port

sudo lsof -i :4000
sudo ss -tuln | grep 4000
sudo netstat -tuln | grep 4000

sudo kill <PID>
sudo kill -9 <PID> # fprte

# nginx

/etc/nginx/sites-available
sudo ln -s /etc/nginx/sites-available/tu_api /etc/nginx/sites-enabled/

sudo nginx -t

sudo systemctl reload nginx

# cerbot

sudo apt update
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d translate.api.bnjm.site

# persistencia

sudo loginctl enable-linger benjamin

loginctl show-user benjamin | grep Linger

# npm pm2

npm install -g pm2
pm2 start npm --name devserver -- run dev
pm2 list
pm2 logs devserver
pm2 restart devserver
pm2 stop devserver
pm2 save
pm2 startup
sudo ln -s /etc/nginx/sites-available/genomas /etc/nginx/sites-enabled/
sudo nginx -t

# monitoreo red por trafico

sudo apt install iftop
sudo iftop

docker logs
docker logs -f
docker stats

GRAFANA + PROMETHEUS
