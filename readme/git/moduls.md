# ¿Qué son los módulos en Git?

En Git, un módulo se refiere a un submódulo, que es un repositorio Git dentro de otro repositorio Git. Esto permite incluir proyectos externos sin mezclar sus archivos con el repositorio principal.

🔹 Ejemplo de uso: Si tienes un repositorio principal y quieres incluir una librería externa que se mantiene en otro repositorio, puedes agregarlo como un submódulo en lugar de copiar los archivos manualmente.

# ¿Cómo funcionan los submódulos?

1. Un submódulo es un repositorio Git dentro de otro repositorio Git.
2. Solo almacena una referencia a un commit específico del repositorio externo.
3. No se clona automáticamente con git clone, sino que se debe inicializar aparte.

# Comandos esenciales para trabajar con submódulos

1️⃣ Agregar un submódulo
Para agregar un repositorio externo como submódulo dentro de tu proyecto:

```bash
git submodule add URL-del-repositorio
```

**ejemplo**

```bash
git submodule add https://github.com/alguien/proyecto-externo.git libs/proyecto
```

# Clonar un repositorio con submódulos

Si alguien clona un repositorio con submódulos, los submódulos no se descargan automáticamente. Para hacerlo, se usa:

```bash
git clone --recurse-submodules <URL-del-repo>
```

**Si ya clonaste el repositorio sin esta opción, entonces inicializa y actualiza los submódulos manualmente:**

```bash
git submodule init
git submodule update
```

# Actualizar los submódulos a la última versión

Si el submódulo ha cambiado en su repositorio original y quieres actualizarlo dentro de tu proyecto:

```bash
git submodule update --remote
```

# Eliminar un submódulo

```bash
git submodule deinit -f <ruta-del-submodulo>
git rm -rf <ruta-del-submodulo>
rm -rf .git/modules/<ruta-del-submodulo>
```

> [!WARNING]
> ojo

## ¿Cuándo usar submódulos en Git?

## ✅ Útil cuando:

Quieres mantener dependencias externas en tu repositorio sin copiar su código.
Trabajas en un proyecto modular con diferentes partes en repositorios separados.

## ❌ No es recomendable si:

Vas a modificar el código del submódulo constantemente desde el mismo repo principal (Git trata los submódulos como versiones fijas).
No necesitas versiones específicas del submódulo (en ese caso, podrías usar un package manager como npm o cargo).

## RESUME

- `git submodule add <URL>` Agrega un submódulo al repositorio
- `git submodule init` Inicializa submódulos después de clonar un repo
- `git submodule update` Descarga el contenido de los submódulos
- `git clone --recurse-submodules <URL>` Clona un repo incluyendo sus submódulos
- `git submodule update --remote` Actualiza los submódulos a su última versión
- `git submodule deinit -f <ruta>` Elimina un submódulo
