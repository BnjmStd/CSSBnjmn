# Para generar una rama de tu proyecto y luego juntar todos los commits del main en uno solo con un tag

>[!WARNING]
> Mejor es trabajar en una rama y luego hacer squash al mergear 

```bash
git checkout -b nueva-rama # crea una rama a partir del main

# Unir todos los commits del main en uno solo (Squash)

git checkout main
git reset --soft $(git rev-list --max-parents=0 HEAD)  # Regresa al primer commit sin perder los cambios
git commit -m "Commit único con todos los cambios"
git tag -a v1.0 -m "Versión 1.0 con todos los cambios"

# y luego subir

git push origin main --force  # ⚠ Esto sobrescribe el historial en remoto
git push origin v1.0  # Subir el tag

```

otro caso

# git merge --squash 

Si quieres combinar todos los commits de una rama secundaria en un solo commit antes de unirlos al main

```bash
git push origin main --force  # ⚠ Esto sobrescribe el historial en remoto
git push origin v1.0  # Subir el tag
```


# generé una rama local pero no en remoto

```bash
git push origin nombre-de-la-rama
```

# cuando queda la caga en el repo y tu tienes una vs antigua

```bash
git fetch origin
git reset --hard origin/main
git pull
```

>[!WARNING]
>Advertencia: El comando ``reset --hard`` eliminará cualquier cambio no confirmado que tenga en su rama local. Si tiene cambios sin confirmar que quiere guardar, primero debe hacer un`` git stash`` o un commit.