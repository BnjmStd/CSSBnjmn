# CREACIÓN, MODIFICACIÓN Y ELIMINACIÓN DE USUARIO | CURSO DE ADMINISTRACIÓN DE SERVIDORES EN LINUX

sudo useradd javier no recomendada

sudo useradd -m -s -c "es un admin" /bin/bash javier

passwd javier
usermod

sudo usermod cambia las configuraciones de un usuario

# Usuarios con permisos de sudo

sudo adduser benja
sudo usermod -aG sudo benja

# Permitir acceso a programas específicos (como Docker)

Verificar el grupo asociado al programa
Programas como Docker requieren que el usuario pertenezca a un grupo específico, generalmente llamado docker. Puedes verificar esto con:

ls -l /usr/bin/docker
Por ejemplo:

-rwxr-xr-x 1 root docker 10M ... /usr/bin/docker
Aquí el grupo docker tiene permisos

sudo usermod -aG docker constanza
sudo usermod -aG docker francisca

# forzar cambio

newgrp docker

# restringir permiso de sudo

benja@metafoodcraft(20:44):~ $ groups constanza
constanza : constanza users docker

solo si aparece

sudo deluser constanza sudo
sudo deluser francisca sudo

# commands groups

benja@metafoodcraft(20:44):~ $ groups benja
benja : benja sudo docker
benja@metafoodcraft(20:45):~ $ groups francisca
francisca : francisca users docker
benja@metafoodcraft(20:45):~ $ groups constanza
constanza : constanza users docker
benja@metafoodcraft(20:45):~ $

# Configuración adicional (opcional)

Si quieres que los usuarios tengan acceso solo a programas específicos, puedes usar sudo limitado con un archivo de configuración en sudoers.

Editar el archivo sudoers

sudo visudo
Añadir reglas específicas
Al final del archivo, puedes permitir que constanza y francisca ejecuten solo Docker:

constanza ALL=(ALL) NOPASSWD: /usr/bin/docker
francisca ALL=(ALL) NOPASSWD: /usr/bin/docker
Con esto, podrán usar sudo docker ... sin necesitar permisos adicionales para otros comandos.

# crear carpeta compartida

sudo mkdir /home/metafoodcraft

# crear grupo

sudo groupadd metafood

sudo usermod -aG metafood constanza
sudo usermod -aG metafood francisca
sudo usermod -aG metafood benja

sudo chown -R :metafood /home/metafoodcraft
sudo chmod g+rwX metafoodcraft

# conf Ajustar permisos

Dale permisos para que los miembros del grupo puedan leer, escribir y ejecutar dentro del directorio:

sudo chmod -R 770 /home/metafoodcraft
Esto significa:

7: Permiso total para el propietario (lectura, escritura, ejecución).
7: Permiso total para los miembros del grupo.
0: Sin acceso para otros usuarios.

# que se hereden a las subcarpetas

sudo chmod g+s /home/metafoodcraft

# verificar

ls -ld /home/metafoodcraft

# cambiar contraseña

passwd

# crear enlaces simbolicos

# cambiar directorio de group

sudo chgrp nuevo_grupo metafoodcraft

# sudo chmod -R 755 /usr/local/fnm

sudo chmod -R 755 /usr/local/fnm

export PATH=/usr/local/fnm:$PATH
eval "$(fnm env)"

sudo chmod +x /etc/profile.d/fnm.sh
