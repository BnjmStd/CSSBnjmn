# markdown

[!NOTE]
horizontal
[!TIP]
[!IMPORTANT]
[!CAUTION]

> [!WARNING]
> Ten en cuenta que la imagen de Docker generada puede ocupar más espacio en disco de lo esperado.

[!ADMINISTRATION]
[!AVAILABILITY]
[!PREREQUISITES]
[!ERROR]
[!ADMINISTRATION]
[!INFO]
[!SUCCESS]

# Git

## Dos cuentas de git uwu

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

> [!INFO]
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
    IdentityFile ~/.ssh/sofidev

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
git@github.com:SofiDevO/carrusel-infinito.git

```

Lo que debemos hacer para clonarlo usando, por ejemplo, la llave personal, es cambiar esta parte @github.com por el @github-sofidev, quedando de la siguiente manera:

```bash

# Hemos reemplazado github.com por github-sofidev
git@github-sofidev:SofiDevO/carrusel-infinito.git


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

# DOCKER

![Text](assets/dockercheat.jpg)

```bash
docker images
docker pull
docker image rm
docker create * image
docker start *id
docker ps -a
docker stop *id
docker rm
docker create --name *image
```

## Port Mapping

```bash

docker create -p $PORT:27017 --name

```

`docker run`

~ busca y descarga
~ crea un contenedor
~ inicia un contenedor

`-d `

"detached mode" (modo separado o en segundo plano)

`docker exec -it *container *command`

## tipos de driver de red docker

- bridge: Crea una red privada interna no se puede acceder desde el exterior

- host: los contenedores ocupan la red del host

- overlay: comunicación entre contenedores host

- none: ninguna red, no comunicación

## ejemplo docker compose

```docker

services:
  bdService:
    image: postgres:17
    container_name: bd_service
    environment:
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: ${POSTGRES_DB}
    ports:
      - "${POSTGRES_PORT}:5432"
    volumes:
      - db_data:/var/lib/postgresql/data

  genomas:
    build:
      context: .
      dockerfile: dockerfile.bdService
    container_name: genomasApp
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@bdService:5432/${POSTGRES_DB}
    volumes:
      - ./:/app
    depends_on:
      - bdService
volumes:
  db_data:

```

-

dockerfile

```

FROM node:latest

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]


```

`docker compose -f docker-compose.bdPractice up --build -d`

`docker compose -f docker-compose.bdPractice down`

# AWS

Aprendiendo AWS: La plataforma más transversal, integral y completa del mundo!

competidores: (Azure, google cloud)

Cloud: Es el ordenador de otra persona, es el servidor que no lo tienes tu, que no está ni en tu empresa ni de un trabajador. Se lo alquilas! Esta computación en la nube se alquila por uso, no necesitamos mantenimiento, lugar,
latencia, tener sv, solo se alquila, más cómodo. y de esos

sv de datos, redes, almacenamiento, bd, servicios de todo tipo

AWS: una colección de servicios en el cloud
es mejor y más comodo para escalar tanto horizontal como vertical!

¿Porqué aprender AWS?

1. liderazgo y popularidad.
2. Amplia gama de servicios: tiene un monton de servicios
3. Escalabilidad y flexibilidad: cualquier idea que tengas podrás escalarla

¿Qué aprenderemos?

1. Introducción
2. UI de inicio
3. Cómo no QUEMAS DINERO
4. EC2
5. Bases de datos
6. S3 y AWS cli
7. AWS lambda (funcionees sv less)
8. Por dónde continuar

Pre Requisitos!

1. Crear una cuenta
2. Instalar el CLI de AWS ( COMMAND LINE INTERFACE ) (SUDO APT INSTALL awscli)
3. Activar el MFA (Autenticación Multifactor)
4. (OPC) Create a billing alarm to monitor your estimated AWS charges

## Escalamiento

aveces puedes tener un "spike" al saturar la pagina (Exceso de solicitudes.)

Escalar vertical es aumentar hacia "arriba" el servidor, al igual que la base de datos.

"subirlo hacia arriba", tambien puede ser bajar.

escalar horizontalmente, es tener más maquinas para distribuir la máquina

![Escalar](assets/escalar.png)

escalar vertical: 1. downtime 2. más sencillo 3. mejor coste 4. vertical tiene límite

escalar vertical: 1. 0 downtime
2.más complicado
3.más caro 4. disponibilidad, al caerse un servidor.

## EC2 Elastic cloud computing

### no deja de ser a los servidores de toda la vida

<p>

lo que tenemos es la capacidad, una instancia de una maquina

puedes levantar tantas maquinas como necesites puedes tener imagenes de mac, linux, y otros servicios

</p>

tipo de instancia = recursos de la maquina

t2.nena más baja en recursos

t2.micro apto para la capa gratuita

recursos de red = muchas peticiones muchos datos, el rendimiento de la red puede afectar mucho la pagina

par de claves = conn to ssh desde nuestro ordenador

redes = normalmente en el cloud, todas los sv que se necesiten entre si deben estar en la misma redes para que no haya latencia

grupo de seguridad, reglas de firewall para entrada y salida de la instancia

un sv web, necesita un grupo de seguridad para como se tiene que comportar la instancia en el PORT 80

RDS relational database services

# amazon s3

## bucket y objetos

# global?, el nombre del bucket debe ser unico en todo el mundo,

cloudfront, es una capa firewall

# lambda

### servicio de computación sin sv permite ejecutar codigo, sin sv

## si llegan 1000 lambdas se ejecutan 1000

poca latencia
solo pagas por el tiempo de computación
tambien capa gratuita
son absurdamente barata

### desencadenadores

cuando ocurra algo, cuando se reciba una accion de trigger
