# REDIRIGIR TRÁFICO DE LA IP NUMÉRICA AL DOMINIO ("BLOQUEAR" ACCESO HTTP A LA IP) | CURSO DE SYSADMIN

archivo conf apache

sudo nvim /etc/apache2/apache2.conf

<VirtualHost \*:443>
ServerName varandcode.com
Redirect https://varandcode.com

<VirtualHost>

<VirtualHost \*:80>

    ServerName varandcode.com
    Redirect / http://varandcode.com

</VirtualHost>

ver errores sudo apachectl configtest

sudo systemctl restart apache2.service

# ver erróres

sudo tail -f /var/log/apache2/error.log

# desactivar conf por defecto

sudo a2dissite 000-default.conf

# activar

sudo a2ensite 000-default.conf

# cosas

benja@metafoodcraft(20:58):~ $ sudo a2enmod rewrite
Enabling module rewrite.
To activate the new configuration, you need to run:
systemctl restart apache2
benja@metafoodcraft(20:59):~ $ systemctl restart apache2

# benja@metafoodcraft(21:03):~ $ nslookup varandcode

;; Got SERVFAIL reply from 127.0.0.53
Server: 127.0.0.53
Address: 127.0.0.53#53

\*\* server can't find varandcode: SERVFAIL

benja@metafoodcraft(21:03):~ $

# REDIRIGIR

<VirtualHost 45.236.128.220:80>
ServerName 45.236.128.220
Redirect permanent / http://varandcode.com/
</VirtualHost>

# eliminar regla

sudo ufw deny 10000

sudo ufw reload

# reglas

reglas de entrada, salida

salida, quiero que mi sv haga una petición a google

interna, prohibe cualquier conexción entre puertos
