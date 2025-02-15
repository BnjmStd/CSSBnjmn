

# DOCKER

![Text](images/dockercheat.jpg)

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

![Escalar](images/escalar.png)

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
