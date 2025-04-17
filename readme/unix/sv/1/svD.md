# cambiar password

passwd

# add user

sudo adduser nombre_usuario

# privilegios de root

sudo usermod -aG sudo nombre_usuario

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

| Acción                         | Comando (después de Ctrl + b) | Descripción                                            |
|-------------------------------|-------------------------------|--------------------------------------------------------|
| Nueva ventana                 | `c`                           | Crea una nueva "pestaña" dentro de tmux               |
| Cambiar de ventana            | `n` (next) o `p` (prev)       | Navega entre ventanas                                  |
| Mover entre paneles           | Flechas (←↑↓→)                | Te movés entre paneles si dividiste la pantalla       |
| Dividir horizontalmente       | `%`                           | Divide la pantalla en dos verticales                  |
| Dividir verticalmente         | `"`                           | Divide en dos paneles horizontales                    |
| Cerrar un panel               | `x`                           | Cierra el panel activo                                 |
| Modo copia (para scroll)      | `[`                           | Podés moverte con las flechas y copiar texto          |
| Detach (salir sin cerrar)     | `d`                           | Salís de tmux, pero todo sigue corriendo              |
| Volver a entrar (reattach)    | `tmux attach`                 | Volvés a la sesión activa                              |


# nginx

sudo apt update && sudo apt install nginx -y


# servicio de nginx

sudo systemctl status nginx


#  para permitir los puertos HTTP y HTTPS:

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

#  Si ya habías hecho un sudo ufw allow 2022/tcp, haz:

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

