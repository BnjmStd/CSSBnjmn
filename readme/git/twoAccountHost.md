# Dos cuentas de git uwu

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

### Verifica si la clave fue agregada

```bash
ssh-add -l
```

### probar conexion

```bash
ssh -T git@github.com
```

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
