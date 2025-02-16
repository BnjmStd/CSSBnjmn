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