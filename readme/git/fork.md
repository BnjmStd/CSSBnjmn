# Fork

>[!IMPORTANT]
> ISSUES = PROBLEMAS


>[!IMPORTANT]
> PR = PULL REQUEST

- Genero un fork

- Clono repositorio

- Genero Cambios

- Subo los cambios a una rama

```bash

git checkout -b branch_new

```

luego subir al remoto:

```bash

git push -u origin branch_new

```

> [!IMPORTANT]
> El comando git push -u

se usa para subir tus cambios a un repositorio remoto, y la opción -u es un atajo para --set-upstream, lo que significa que establece una rama remota de seguimiento para la rama local que estás empujando.

~ Cuando ejecutas git push -u, Git guarda la referencia a la rama remota y la asocia con tu rama local. Esto te permite usar comandos como git push y git pull sin necesidad de especificar el nombre del repositorio remoto o la rama cada vez. ~

### FUSIONES FORK

Cuando aceptas un Pull Request en GitHub, tienes tres opciones principales para fusionar los cambios: Merge, Squash, y Rebase. Aquí te explico cada una de ellas:

#### Escenario:

- Tienes una rama main en tu repositorio.

- Alguien hace un fork de tu repositorio y trabaja en una rama llamada new en su fork.

- Luego, esa persona te envía un Pull Request para que sus cambios de la rama new se fusionen con tu rama main.

- Ahora, veamos lo que hace cada opción al momento de fusionar el Pull Request:

<details>

<summary>Merge</summary>

- ¿Qué hace? Si usas Merge, Git tomará todos los commits de la rama new (de la persona que hizo el fork) y los fusionará con la rama main sin cambiar el historial. El historial en la rama main quedará como un "árbol" de commits, donde verás un commit de fusión que marca el punto donde se combinan las ramas. Todos los commits que hicieron en la rama new seguirán presentes en el historial.

- Resultado: La rama main tendrá un nuevo commit de fusión. Los commits previos de la rama new se mantienen intactos en la historia.

```bash

main
 |
 |--- Commit 1 (de main)
 |--- Commit 2 (de main)
 |--- Merge commit (Fusionando main con new)
 |--- Commit 1 (de new)
 |--- Commit 2 (de new)
 |--- Commit 3 (de new)


```

</details>

<details>

<summary>Squash (Aplastar)</summary>


- Qué hace? Si eliges Squash, Git tomará todos los commits de la rama new y los aplastará en un solo commit. Luego ese único commit se fusionará con la rama main. Es como si todos los cambios hechos en new fueran un solo bloque, y solo aparecerá un único commit cuando los merges a main.

- Resultado: Solo habrá un commit en la rama main representando todos los cambios de new. El historial de new se pierde, y todo se verá como un único commit.

```bash 

main
 |
 |--- Commit 1 (de main)
 |--- Commit 2 (de main)
 |--- Squashed commit (Todos los cambios de new en un solo commit)


```

>[!IMPORTANT]
> Esto simplifica mucho el historial, pero pierde el detalle de los commits originales de la rama new.

</details>

<details>

<summary>Rebase (Rebase)</summary>


- ¿Qué hace? Si usas Rebase, Git toma todos los commits de la rama new y los "re-aplica" sobre la última versión de main. Es decir, Git toma los commits de new, los elimina temporalmente, y los agrega uno a uno por encima de la última versión de la rama main.

- La diferencia principal con el merge es que el historial será lineal: no habrá un commit de fusión, sino que los commits de new se verán como si hubieran sido hechos directamente en main.

- Resultado: La historia de main se verá como si siempre hubieras trabajado en ella sin interrupciones. Los commits de new aparecerán como si hubieran sido hechos después de los últimos commits de main, sin crear un commit de fusión.

```bash

main
 |
 |--- Commit 1 (de main)
 |--- Commit 2 (de main)
 |--- Commit 3 (de new, rebaseado sobre el commit 2 de main)
 |--- Commit 4 (de new, rebaseado sobre el commit 3 de main)

```

>[!IMPORTANT]
> Con el Rebase, los commits de new se re-aplican sobre el historial de main. Esto crea un historial lineal y limpio sin un merge commit.

</details>


>[!NOTE]

- Merge: Funde todos los commits de la rama new en main, creando un commit de fusión.
- Squash: Aplasta todos los commits de new en un solo commit, y luego fusiona ese único commit con main.
- Rebase: Re-aplica todos los commits de new sobre la base más reciente de main, creando un historial lineal sin un commit de fusión.

### ¿Qué opc usar?

- Merge: Usado cuando prefieres conservar el historial completo de todos los commits de la rama new y la relación exacta entre los cambios en new y main.
- Squash: Usado cuando prefieres un historial más limpio y menos detallado, con todos los cambios de new combinados en un solo commit.
- Rebase: Usado cuando prefieres un historial limpio y lineal, con todos los commits de new apareciendo como si se hubieran hecho directamente sobre main.