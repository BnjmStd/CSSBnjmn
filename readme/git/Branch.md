# Branches

>[!NOTE]
> Branch es una copia independiente

### Creando una rama

```bash
git branch *name # crear la rama

git switch *name # cambiar rama
```

### Eliminar ramas

```bash
git branch -d name
```

### Unión de ramas

1. Estar en la rama destino

```bash
git merge *branch 
```

>[!TIPS]
> Fast forward, es la unión más sencilla

2. Rama original sufre cambios

```bash
git switch -c newfile

# sin conflictos

git merge
```

3. merge conflict

```bash
git merge --abort
git merge --continue
```

4. merging 

```bash
git add 
git commit

# ok!
```

## renombrar ramas

```bash
git branch -m <name>
```

**si quieres renombrar una rama distinta a la actual**

```bash
git branch -m old-name new-name
```

>[!WARNING]
>  Importante si ya has subido la rama a remoto

**Si la rama que renombraste ya estaba en GitHub/GitLab u otro remoto, el cambio no se reflejará automáticamente en el servidor. Debes hacer lo siguiente:**

1. ELIMINAR EL NOMBRE VIEJO EN EL REMOTO

```bash
git push origin --delete old-name
```

2. SUBIR LA RAMA CON EL NUEVO NOMBRE
```bash
git push origin new-name
```

3. Actualizar el seguimiento de la rama

```bash
git branch --unset-upstream
git branch --set-upstream-to=origin/new-name
```

## Listar  ramas 

```bash
git branch
```

### SOLO REMOTAS

```bash
git branch -r
```


### git switch

```bash
    git switch 
    git switch -c *ramanew
```

>[!IMPORTANT]
> El comando git switch --detach se usa para mover el HEAD de Git a un commit específico sin asociarlo a ninguna rama en particular. En otras palabras, te coloca en un "estado de separación" (detached HEAD). Cuando usas git switch --detach, Git no actualizará la rama actual, y estarás trabajando directamente con el commit en ese punto específico. Esto es útil si necesitas explorar un commit o realizar algunos cambios sin alterar ninguna rama existente.

```bash
git switch --detach <commit_hash>

git checkout <hash>
```

Esto te llevará al commit señalado por <commit_hash>, y cualquier cambio que realices no se registrará en ninguna rama a menos que crees una nueva rama.

En resumen, estarás en un estado donde no estás "en" ninguna rama, sino en un commit específico, y si haces cambios, esos cambios no formarán parte de una rama existente a menos que los guardes explícitamente en una nueva rama.

### Modo detallado


```bash
git remote --v
git remote --verbose
```

### setup

```bash
git push --set-upstream origin main
```

## Git checkout

>[!WARNING]
> No recomendable, debido a que altera el principio de la filosofia linux, principio minimalista

### cambiar rama

```bash
git checkout *name
```

### Restaurar archivos

```bash
git checkout commit *hash --file
```

### crear y cambiar de rama

```bash
git checkout -b newbranch
```

### cambiar a una rama remota y crearla en local 

```bash
git checkout -b *ramalocal origin/remote
```

# generar una nueva rama en local y subirla al remoto

>[!IMPORTANT]
>ASEGURATE DE QUEE STAS EN LA NUEVA RAMA ANTES DE SUBIRLA

** Ejemplo: Si tu nueva rama se llama feature-login, entonces ejecuta:**

```bash
git push -u origin feature-login

git branch -r # verifica que la rama se subio
```

>[!IMPORTANT]
>¿Qué hace el -u en git push -u? El -u (o --set-upstream) establece un "seguimiento" entre tu rama local y la rama remota. Después de esto, solo necesitarás hacer:

# saber que rama apunto al remoto

```bash
git branch --show-current # rama local en que trabajas
git branch -vv # ver todas las ramas locales y remotas
git rev-parse --abbrev-ref --symbolic-full-name @{u} # MOSTRAR rama remota asociada
git remote show origin # Si quieres confirmar la rama remota asociada, usa:
git branch --set-upstream-to=origin/main main # si no hay remota, creala
```

**RESUMEN**
- git branch --show-current → Muestra la rama actual.
- git rev-parse --abbrev-ref --symbolic-full-name @{u} → Muestra la rama remota asociada.
- git branch -vv → Muestra todas las ramas y sus ramas remotas asociadas.
- git remote show origin → Muestra información del remoto.