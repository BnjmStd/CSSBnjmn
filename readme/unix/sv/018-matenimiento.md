# MANTENIMIENTO BÁSICO PARA SERVIDORES (Y CÓMO AUTOMATIZARLO) | CURSO DE SYSADMIN

sudo apt update
sudo apt upgrade -y
sudo apt dist-upgrade -y
sudo apt autoclean
sudo apt autoremove -y


var = carpetas log
mayoria de servicios

ls /var/log

sudo cat /var/log/auth.log // usuarios

sudo reboot


htop 

```

 #!/bin/bash

 #update sistem

 sudo apt update
 sudo apt upgrade -y
 sudo apt dist-upgrade -y
 
 # limpiar temp file

 sudo apt autoclean
 sudo apt autoremove

 sudo apt reboot

```


# darles permisos de ejecución

chmod +x maintenance.sh

# add deamon

crontab -e

0 3 * * *  /home/benja/maintenance.sh

cada dia a las 3 de la mañana





