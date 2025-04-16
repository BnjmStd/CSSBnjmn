#!/bin/bash

read -rep $'Ingrese su nombre, porfavor: \n' nombre

echo "hola, $nombre"


####################################

#!/bin/bash

# Los file descriptors son números enteros que el sistema operativo usa para referirse
# a los recursos abiertos por un proceso. Por convención:
# 0: stdin (entrada estándar) - generalmente el teclado
# 1: stdout (salida estándar) - generalmente la pantalla
# 2: stderr (salida de error estándar) - generalmente la pantalla (pero separado lógicamente)

# 1. Usando stdout (salida estándar)
echo "Este es un mensaje normal que se muestra en la salida estándar (stdout)."

# 2. Usando stderr (salida de error estándar)
echo "Este es un mensaje de error que se muestra en la salida de error estándar (stderr)." >&2

# 3. Usando stdin (entrada estándar)
read -p "Por favor, ingresa tu nombre: " nombre_usuario
echo "Hola, $nombre_usuario! Tu nombre fue leído desde la entrada estándar (stdin)."

# Intentemos un comando que genere un error para ver stderr en acción
comando_inexistente

echo "Este mensaje podría no aparecer si el comando anterior falla."

# Redireccionando la salida estándar a un archivo
echo "Este mensaje se guardará en el archivo salida.txt." > salida.txt

# Redireccionando la salida de error estándar a un archivo
echo "Este error también se guardará en el archivo errores.txt." >&2 errores.txt

# Redireccionando la salida estándar y la de error al mismo archivo
echo "Este mensaje irá al archivo todo.log." > todo.log 2>&1
echo "Este error también irá al archivo todo.log." >&2 todo.log

echo "Ejemplo completado. Revisa los archivos salida.txt, errores.txt y todo.log."