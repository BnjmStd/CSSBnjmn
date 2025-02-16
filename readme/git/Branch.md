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

