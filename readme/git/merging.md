# Git merge

HACER MERGE LOGIN EN MAIN

1. Cambiarse donde aplicar los cambios

```bash
git checkout main
git switch main
```

2. Asegurate que main este actualizado

```bash
git pull origin master
```

3. Fusionar en main

```bash
git merge login
```

4. Resuelve conflictos

```bash
git add
git commit -m "hola"
git push origin master
```

# Merge rama remoto

Origin /dev en main

1. step 1

```bash
git fetch origin dev # trae los cambios remotos
```

2. Cambiate y hace el merge

```bash
git checkout main
git merge origin/dev


git push origin main
```

# Git rebase

¿Que es git rebase y como se diferencia de merge?

> [!IMPORTANT]
> Rebase se usa para reaplicar los cambios de una rama sobre otra base diferente en lugar de hacer un simple merge

1. Mueve los commit de una rama para que se apliquen sobre otra
2. Mantiene el historial limpio sin merge
3. Puede ser riesgoso si compartiste tu repo

## Ejemplo

HACER REBABASE DE LOGIN SOBRE MAIN

1. change branch

```bash
git checkout login
```

2. rebase sobre main

```bash
git rebase main
```

3. si hay conflictos resuelvelos

```bash
git add.
git rebase --continue
```

4. sbe los cambios con forece

```bash
git push origin login --force
```

> [!IMPORTANT]
> Al hacer rebase sobre main lo que ocurre es que todos los commits de login se colocan sobre la ultima version más reciente de main

> [!IMPORTANT]
> Esto es como si hubieras empezado a trabajar desde la versión más reciente de main

## Si quieres hacer que login sea exactamente igual que el main (perdiendo cambios)

```bash
git checkout *rama
git reset --hard main
```

1. Podemos reorganizar el historial de cambios de una rama que apararezca de manera lineal
2. rebase permite que desde una rama traer los cambios de otra rama
3. es diferente al merge porque se reescriben el historial de commit
4. el merge une 2 ramas y en ocasiones genera un desastre en los niveles de commit

`git rebase master`
