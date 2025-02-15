# Git

## Fork

- Genero un fork

- Clono repositorio

- Genero Cambios

- Subo los cambios a una rama

```bash

git checkout -b branch_new

```

luego subir al remoto:

```bash

git push -u origin branch_new

```

> [!IMPORTANT]
> El comando git push -u

se usa para subir tus cambios a un repositorio remoto, y la opción -u es un atajo para --set-upstream, lo que significa que establece una rama remota de seguimiento para la rama local que estás empujando.

~ Cuando ejecutas git push -u, Git guarda la referencia a la rama remota y la asocia con tu rama local. Esto te permite usar comandos como git push y git pull sin necesidad de especificar el nombre del repositorio remoto o la rama cada vez. ~

### FUSIONES FORK

Cuando aceptas un Pull Request en GitHub, tienes tres opciones principales para fusionar los cambios: Merge, Squash, y Rebase. Aquí te explico cada una de ellas:

#### Escenario:

- Tienes una rama main en tu repositorio.

- Alguien hace un fork de tu repositorio y trabaja en una rama llamada new en su fork.

- Luego, esa persona te envía un Pull Request para que sus cambios de la rama new se fusionen con tu rama main.

- Ahora, veamos lo que hace cada opción al momento de fusionar el Pull Request:

<details>

<summary>Merge</summary>

- ¿Qué hace? Si usas Merge, Git tomará todos los commits de la rama new (de la persona que hizo el fork) y los fusionará con la rama main sin cambiar el historial. El historial en la rama main quedará como un "árbol" de commits, donde verás un commit de fusión que marca el punto donde se combinan las ramas. Todos los commits que hicieron en la rama new seguirán presentes en el historial.

- Resultado: La rama main tendrá un nuevo commit de fusión. Los commits previos de la rama new se mantienen intactos en la historia.

```bash

main
 |
 |--- Commit 1 (de main)
 |--- Commit 2 (de main)
 |--- Merge commit (Fusionando main con new)
 |--- Commit 1 (de new)
 |--- Commit 2 (de new)
 |--- Commit 3 (de new)


```

</details>

<details>

<summary>Squash (Aplastar)</summary>


- Qué hace? Si eliges Squash, Git tomará todos los commits de la rama new y los aplastará en un solo commit. Luego ese único commit se fusionará con la rama main. Es como si todos los cambios hechos en new fueran un solo bloque, y solo aparecerá un único commit cuando los merges a main.

- Resultado: Solo habrá un commit en la rama main representando todos los cambios de new. El historial de new se pierde, y todo se verá como un único commit.

```bash 

main
 |
 |--- Commit 1 (de main)
 |--- Commit 2 (de main)
 |--- Squashed commit (Todos los cambios de new en un solo commit)


```

>[!IMPORTANT]
> Esto simplifica mucho el historial, pero pierde el detalle de los commits originales de la rama new.

</details>

<details>

<summary>Rebase (Rebase)</summary>


- ¿Qué hace? Si usas Rebase, Git toma todos los commits de la rama new y los "re-aplica" sobre la última versión de main. Es decir, Git toma los commits de new, los elimina temporalmente, y los agrega uno a uno por encima de la última versión de la rama main.

- La diferencia principal con el merge es que el historial será lineal: no habrá un commit de fusión, sino que los commits de new se verán como si hubieran sido hechos directamente en main.

- Resultado: La historia de main se verá como si siempre hubieras trabajado en ella sin interrupciones. Los commits de new aparecerán como si hubieran sido hechos después de los últimos commits de main, sin crear un commit de fusión.

```bash

main
 |
 |--- Commit 1 (de main)
 |--- Commit 2 (de main)
 |--- Commit 3 (de new, rebaseado sobre el commit 2 de main)
 |--- Commit 4 (de new, rebaseado sobre el commit 3 de main)

```

>[!IMPORTANT]
> Con el Rebase, los commits de new se re-aplican sobre el historial de main. Esto crea un historial lineal y limpio sin un merge commit.

</details>


>[!NOTE]

- Merge: Funde todos los commits de la rama new en main, creando un commit de fusión.
- Squash: Aplasta todos los commits de new en un solo commit, y luego fusiona ese único commit con main.
- Rebase: Re-aplica todos los commits de new sobre la base más reciente de main, creando un historial lineal sin un commit de fusión.

### ¿Qué opc usar?

- Merge: Usado cuando prefieres conservar el historial completo de todos los commits de la rama new y la relación exacta entre los cambios en new y main.
- Squash: Usado cuando prefieres un historial más limpio y menos detallado, con todos los cambios de new combinados en un solo commit.
- Rebase: Usado cuando prefieres un historial limpio y lineal, con todos los commits de new apareciendo como si se hubieran hecho directamente sobre main.


## Dos cuentas de git uwu

tipos de ssh-keygen

- rsa: Clave RSA, usada comúnmente para autenticación SSH.
- dsa: Clave DSA (obsoleta y no recomendada por razones de seguridad).
- ecdsa: Clave ECDSA (basada en curvas elípticas, más eficiente que RSA).
- ed25519: Clave basada en Ed25519, considerada segura y eficiente.


```bash

# Escribe el comando ls ~/.ssh
ls ~/.ssh

#deberías poder ver las llaves que haz creado hasta ahora:
~/.ssh/
├── trabajo # Clave privada para trabajo
├── trabajo.pub  # Clave pública  para trabajo
├── benja      # Clave privada para uso personal
├── benja.pub  # Clave pública para uso personal

```

> [!TIP]
> si no tienes claves generadas , puedes crearlas con el siguiente comando

`ssh-keygen -t ed25519 -C "tu_correo@example.com" -f ~/.ssh/nueva_clave`

> [!TIP]
> SI TU sistema no soporta O en su lugar con rsa si tu sistema no soporta Ed25519

`ssh-keygen -t rsa -b 4096 -C "correo@example.com" -f ~/.ssh/nombre_clave`

### Inicializa el agente SSH

`eval "$(ssh-agent -s)"`

### Agrega tu SSh private key al ssh-agent

`ssh-add ~/.ssh/nombre_clave`

### Ahora revela tu clabe pública( ¡No la compartas con nadie!):

```bash
 #cambia  nombre_clave por el que tú le pusiste.
 #Recuerda que es la llave publica ".pub"

 cat ~/.ssh/nombre_clave.pub
```

### Agrega tu clave a Github, yendo a settings>SSH and GPG Keys:

jeje

### Paso 3: Configura el Archivo ~/.ssh/config

```bash

# vamos a movernos hacia la ruta  ~/.ssh
cd  ~/.ssh

#vamos a crearlo haciendo uso del comando touch
touch config

```

### Ahora podemos proceder a abrir el archivo. para ello podemos usar el comando nano para usar el editor de código integrado o podemos usar el comando code:

```bash
#Abrir el archivo usando nano
nano ~/.ssh/config #Si estás en otra ruta

nano config # si acabas de crear el archivo (Estás dentro del directorio .ssh)

```

Agrega configuraciones para tus claves existentes. Por ejemplo:

```bash

# Configuración para benjita (Personal)
Host github-benjita
    HostName github.com
    User git
    IdentityFile ~/.ssh/fermin-cloud

# Configuración para formula (Trabajo)
Host github-trabajo
    HostName github.com
    User git
    IdentityFile ~/.ssh/trabajo

```

Explicación de las líneas:

- Host: Es un alias que usaremos para identificar cada clave.
- HostName: Siempre será github.com (o el dominio de tu servidor git).
- User: Siempre será git.
- IdentityFile: Ruta a la clave privada correspondiente.

> [!TIP]
> En el caso de nano: Guarda los cambios (Ctrl + O, luego Enter) y cierra el archivo (Ctrl + X).

### Configura las URLs de los Repositorios

Cada repositorio debe apuntar al alias correspondiente. Cambia la URL remota con el siguiente comando:

Ejemplo con un repositorio real:

```bash

#este es el SSH con el que clonas normalmente:
git@github.com:Fermin-Cloud/Fermin.git

```

Lo que debemos hacer para clonarlo usando, por ejemplo, la llave personal, es cambiar esta parte @github.com por el @github-sofidev, quedando de la siguiente manera:

```bash

# Hemos reemplazado github.com por github-fermin
git@github-fermin:Fermin-Cloud/Fermin.git


```

Ejemplo para un repositorio de trabajo:

```bash

git remote set-url origin git@github-trabajo:usuario_trabajo/carrusel-infinito.git

```

> [!IMPORTANT]
> SI NO TE PERMITE AGREGARLO ELIMINALO

```bash
git remote remove origin

# Esto remueve el origen remoto actual

```

Para luego volverlo agregar con

```bash

# agregamos el origen remoto pero con el alias actualizado:

git remote add origin git@github-trabajo:usuario_trabajo/carrusel-infinito.git
```

### verifica el origen remoto

`git remote -v`

### probar credenciales de acceso

`ssh -T git@github.com`

### cambiar caché

`ssh-add -D`

### verificación de si sirve

verificar archivo git config

```bash

ls -a ~ | grep .gitconfig
# Esto debe devolverte el archivo gitconfig:

.gitconfig

```

Ya que verificamos que el archivo .gitcong está creado, procederemos a editarlo.

> [!NOTE]
> Si estás usando nano, al terminar de editar, debes presionar CTRL + o para guardar, presionas ENTER para confirmar, y CTRL + X para salir.

```bash

# Puedes usar el editorintegrado en la consola (nano) o abrirlo con VisualStudio:

#Con nano
nano ~/.gitconfig

#Con Vscode
code  ~/.gitconfig


```

### verificar conf correcta

```bash

[user]
    name = tu-nombre-de-udario #(Ejmplo: Patatadev)
    email = tu-email@ejemplo.com #(Tu email de GitHub. Ejemplo: patata@gmail.com)

```

> [!IMPORTANT]
> Lo que vamos a hacera continuación son dos pasos: Primero agregaremos una condicional diciéndo que cualquier repositorio ubicado dentro de ~/ruta/proyectos-trabajo/ usará una configuración diferente.

```bash

[includeIf "gitdir:~/ruta/proyectos-trabajo/"] #La ruta hacia el directorio del trabajo
    path = ~/.gitconfig-trabajo

```

Bueno, le estamos indicando que debe tomar la configuración del archivo en el path ~/.gitconfig-trabajo pero este no existe, así que vamos a crearlo 🦝.

```bash

# Haciendo uso del comando touch, crearemos la variante ".gitconfig-trabajo"
touch ~/.gitconfig-trabajo

# Ahora  procedemos a editar el archivo:
nano ~/.gitconfig-trabajo


```

debemos de tener listos los datos de nuestra cuenta de trabajo y vamos agregar las siguientes líneas:

```bash

[user]
    name = Tu Nombre Profesional
    email = tu.email@profesional.com


```

Guarda los cambios y listo 🦝. Ahora, cada vez que crees o clones un proyecto en el directorio trabajo, git será redirigido y usará los datos de gitconfig de tu trabajo.
