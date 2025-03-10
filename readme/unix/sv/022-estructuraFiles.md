# INTRODUCCIÓN AL SISTEMA DE USUARIOS Y ARCHIVOS EN LINUX | CURSO DE DEVOPS EN LINUX

# cat /etc/passwd

permite ver los usuarios registrados

nombre:*contraseña:id:idgrupo:comentario:nombredirectorio:interprete

los más similares el root, debian, el resto de usuarios son inactivos o bloqueados

# sudo cat /etc/shadow


nombre:contraseña:fechacambiocontraseña:diasdecambiodecontraseña:maximodedias:numerodediassedaelavisoaluserquecambi:diasinactivoparabloquearcuenta:expire


si no se detalla pwd

!significabloqueotempoalmente
*cuentadesabilitada,muchasvecesusadosporprocesos
!* combinaciónquenoestadestinadaparaaccesointeractivoportemasdelsistema


las fechas corren 1970 9 de enero


# /etc/group

todo grupo con id menos a 1000 es usado por el sistema

nombredelgrupo:contraseña(desuso):idgroup:listadeusuariosopertenecientesalgrupo


# whoami

quien soy

# id

La salida del comando id muestra información sobre el usuario actual, sus grupos, y los identificadores numéricos asociados. Vamos a desglosar cada parte:

Desglose de la salida
uid=1000(benja):

uid: Es el "User ID" (identificador de usuario), que es un número único asignado al usuario en el sistema.
1000: Es el número del UID para el usuario benja.
benja: Es el nombre del usuario correspondiente al UID 1000.
gid=1000(benja):

gid: Es el "Group ID" (identificador de grupo) principal del usuario.
1000: Es el número del GID principal para el usuario benja.
benja: Es el nombre del grupo principal al que pertenece el usuario benja.
groups=1000(benja),27(sudo),999(docker):

groups: Lista todos los grupos a los que pertenece el usuario.
1000(benja): El usuario pertenece a su grupo principal, que también se llama benja con GID 1000.
27(sudo): El usuario es miembro del grupo sudo, que tiene el GID 27. Esto significa que benja tiene privilegios administrativos y puede ejecutar comandos como superusuario (usando sudo).
999(docker): El usuario es miembro del grupo docker, que tiene el GID 999. Esto le permite gestionar contenedores Docker sin necesidad de permisos adicionales.
Interpretación
El usuario benja:

Tiene el UID 1000 y su grupo principal también es benja con GID 1000.
Pertenece al grupo sudo, lo que le otorga permisos administrativos en el sistema.
Pertenece al grupo docker, lo que le permite trabajar con Docker sin usar sudo.

# who

benja    pts/0        2025-01-16 13:18 (190.110.103.252)

# w

benja@metafoodcraft:~$ w
 14:10:42 up 4 days, 30 min,  1 user,  load average: 0.00, 0.00, 0.00
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU  WHAT
benja             190.110.103.252  13:18   19:09   0.00s  0.01s sshd: benja [priv]