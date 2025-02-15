# ¿Qué es un repositorio?

- Es donde, se almacena ese historico de cambios de un proyecto + otras cosas
- Gites un sistema de control de versiones desentralizado o distribuido

>[!IMPORTANT]
> Un repositorio local no es igual a un repositorio remoto


## Partes de un repositorio (principales)

<details>

<summary>Working Directory</summary>

Archivos en forma actual

</details>

<details>

<summary>Staging area</summary>

Es donde se colocal los archivos que quieres incluir en el historico

</details>

<details>

<summary>Git Directory</summary>

donde se almacena el historico de cambios de git

</details>

## Inicialización de repositorio

```bash
git init
```

## Verificación de pendientes

```bash
git status 
```

- new files
- changes

## Agregando cambios al area de preparación

```bash
git add *.txt
```

## Persistencia de cambios en el repositorio

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

### Editando un commit

```bash
git commit --amend
```

>[!IMPORTANT]
> También se puede modificar archivos

```bash
git add
git commit -ammend
```

### Visualizar contenido de un commit

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

### Deshaciendo un commit 

```bash
git reset --soft HEAD~1
```

>[!WARNING]
> Verifica el commit donde te encuentras

### Deshacer un commit sin editar el historial de combios

```bash
git revert head
```

## Histórico de cambios

```bash
git log -n 2
```

- -n: Ultimos n commits

```bash
git log file

git log --oneline
```

## Retroceder cambios

```bash
git restore file
```

## Removiendo archivos del area de preparación

```
git reset file
```