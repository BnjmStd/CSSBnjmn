# Definición usuario y app

Existen dos niveles de configuración de identidad

## Global

Aplica la conf a todos los repositorios y a la maquina

## Local

Aplicar solo a un repositorio específico.

## CONF GLOBAL

```bash

    git config --global user.name "patata"

```

```bash

    git config --global user.email "email"

```

```bash

git config --global --list 


```

## Obtener valores

```bash 

git config --get user.name
git config --get user.name

```

>[!NOTE]
> Puedes añadir cualquier cosa o dato al user.*thing


## Eliminar valores

```bash

git config --local --unset user.name
git config --global --unset user.email

```