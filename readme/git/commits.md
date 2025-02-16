# Persistencia de cambios en el repositorio

```bash
git commit 
```

- cada commit representa un conjunto de cambios

```bash
git commit -m
```

- m (message): un buen mensaje descriptivo

## Para files que ya tienen seguimiento


```bash
git commit -am " "
```

## Editando un commit

```bash
git commit --amend
```

>[!IMPORTANT]
> También se puede modificar archivos

```bash
git add
git commit -ammend
```

## Visualizar contenido de un commit

```bash
git show *hash 
```

otra alternativa es:

```bash 
git log -n 1
```

>[!IMPORTANT]
> HEAD representa el commit donde nos encontramos

Por ejemplo si queremos mostrar el penultimo commit 

```bash
git show head~1
```

## Deshaciendo un commit 

```bash
git reset --soft HEAD~1
```

>[!WARNING]
> Verifica el commit donde te encuentras

## Deshacer un commit sin editar el historial de combios

```bash
git revert head
```

# Commits relativos

- Moverse un commits atras con ^
- Moverse una cantidad de commits hacia atras ~<num>

```bash
git checkout main^
```

>[!IMPORTANT]
> head referencia relativa

>[!IMPORTANT]
> ~ ES LA CANTIDAD DE PADRES QUE QUIERES VOLVER ATRÁS

## Mover una rama a un commit

```bash
git branch -f main head~3
```

>[!NOTE]
> Mueve (force) la rama main 3 padres por detras de head

# revirtiendo cambios

```bash
git reset # reescribe historia
git revert # reescribe la historia dejando registro
```

# git cherry-pick

>[!NOTE]
> Quiero copiar una serie de commit sobre mi ubi actual checkout

```bash
git cherry-pick <commit> <commit> <commit>
```

>[!WARNING]
>  cherry-pick trae un commit de cualquier parte del arbol sobre head (siempre que ese otro commit no sea un ancestro de head)

# rebase interactivo

```bash
git commit -i --amend
```


# Git Tag

```bash
git tag v1 c1
head ~1^2~1
```

# git describe

git describe proporciona una referencia legible basada en el tag más cercano. Si tu commit tiene un tag, git describe devolverá ese tag. Si no, mostrará el tag más cercano seguido del número de commits desde ese tag y el hash corto del commit actual.

```bash
git describe <ref>
```

>[!WARNING]
> Para usar git describe, es recomendable tener al menos un tag en el repositorio, ya que este comando se basa en ellos para generar una descripción del estado actual del repositorio.

>[!IMPORTANT]
> El formato de salida <tag>_<n°Commit>_g<hash>


# Git pull

El comando git pull se usa para actualizar la rama local con los últimos cambios de un repositorio remoto.

>[!IMPORTANT]
> Es un atajo para hacer `git fetch` seguido de un merge.

- Funcionamiento

```bash
git pull origin main
```

Git realiza dos pasos:

- git fetch origin main → Descarga los cambios más recientes de la rama main en el remoto origin.
git merge origin/main → Fusiona esos cambios en tu rama actual.
- Si hay cambios que no entran en conflicto con tu código, el merge se hace automáticamente. Si hay conflictos, Git te pedirá que los resuelvas antes de completar la fusión.

## ejemplos de uso

1. Traer cambios y fusionarlos automaticamente (default)

```bash
git pull origin main 
```

esto intentará hacer un merge automático si no hay conflictos

2. Evitar el merge automatico y traer solo los cambios (equivalente a `git fetch`)

```bash
git pull --no-commit
```

esto deja los cambios descargados sin hacer el merge inmediato 

3. Hacer un rebase en lugar de un merge

```bash
git pull --rebase origin main
```

esto hace que apliques tus cambios sobre los ultimos cambios remotos, evitando la creación de un commit merge 

4. solo descargar los cambios sin aplicarlos (equivalente al `git fetch`)

```bash
git pull --ff-only
```


>[!IMPORTANT]
> si quieres revisar los cambios antes de fusionarlos, lo mejor es hacer

```bash
git fetch
git diff origin/main
git merge origin/main
```

| COMANDO  | ¿QUE HACE? |
|:------------- |:---------------:| 
| `git fetch`       | Descarga cambios remotos sin aplicarlos           |
| `git pull`         | Descarga cambia y los fusiona automaticamente en la rama actual          | 




# trackear remoto

En Git, trackear un remoto significa que una rama local está vinculada a una rama remota en un repositorio remoto. Esto permite que los comandos como ``git pull`` y ``git push`` sepan automáticamente de dónde obtener o a dónde enviar los cambios.

1. Una forma

```bash
git chckout -b *foo

git branch -u o/main foo

```

>[!IMPORTANT]
>Si estas parado ahí deberias usar

```bash
git branch -u o/main
```

2. 2da forma

Si quieres crear manualmente una rama local que siga (trackee) una rama remota, usa:

```bash 
git checkout --track origin/otra-rama
```

o su equivalente moderno

```bash 
git switch --track origin/otra-rama
```

>[!TIPS]
> Esto crea una rama local llamada otra-rama y la vincula a origin/otra-rama.


## Ver qué ramas están trackeando un remoto

Puedes ver qué ramas locales están siguiendo (trackeando) ramas remotas con:

```bash
git branch -vv
```

## configurar manualmente el tracking de una rama

Si ya tienes una rama local pero no está conectada a una rama remota, puedes configurarla con:

```bash
git branch --set-upstream-to=origin/otra-rama
```

o en su versión corta:

```bash
git branch -u origin/otra-rama
```

Ahora, al hacer git pull o git push en otra-rama, Git sabrá de dónde traer o a dónde enviar los cambios.


## eliminar el tracking de una rama

```bash
git branch --unset-upstream
```

>[!NOTE]
>Trackear un remoto significa que una rama local está vinculada a una rama remota, lo que facilita la sincronización de cambios sin necesidad de especificar el remoto cada vez que hagas git pull o git push


# Combinando commits usando squash

- Es buena práctica hacer commitpequeños
- si algo no funciona es más sencillo darle pa atrás
- los equilibrios son importantes aveces muchos commit pequeños pueden hacer crecer enormemente el historico de cambios

>[!NOTE]
> SQUASHING

## Pasos

1. `git switch -c squash`
2. `git log`
3. combinar commits ` git rebase -i head~3`

```txt
pick commit 1
squash commit 2
squash commit 3
```

4. ahora necesitamos un mensaje commit

5. `git switch master`

6. `git merge squash`