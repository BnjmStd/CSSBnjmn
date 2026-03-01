# ¿Qué es un repositorio?

- Es donde, se almacena ese historico de cambios de un proyecto + otras cosas
- Gites un sistema de control de versiones desentralizado o distribuido

> [!IMPORTANT]
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

## Histórico de cambios

```bash
git log -n 2
```

- -n: Ultimos n commits

```bash
git log file

git log --oneline

git log --oneline --graph
```

## Retroceder cambios

```bash
git restore file
```

## Removiendo archivos del area de preparación

```bash
git reset file
```

## Resolviendo conflictos de unión (merge conflict)

```bash
git revert head
git add .
git revert --continue
```

## Ver diferencias

```bash
git diff
```

## si quieres ver las diferencias entre una rama y otra usa

Si quieres ver qué commits tiene vv que no están en main:

```bash
git log main..vv --oneline
```

Esto mostrará una lista de commits que están en vv pero no en main.

Si quieres ver los commits que están en main pero no en vv:

```bash
git log vv..main --oneline
```

### ver las diferencias entre archivos

```bash
git diff main..vv
```
