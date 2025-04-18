#!/bin/bash

# Variables
DEST_USER="benja"
DEST_IP="45.236.128.220"
DEST_PORT="22222"
DEST_PATH="/home/benja/"
SOURCE_DIR="/home/benja/"
FOLDERS=(
  "bdgenomas"
  "dockerPracticaKatalina"
  "env"
  "scrapGenomasPython"
  "snap"
  "Data4Life"
  "download"
  "opticMouse"
  "silverBullet-Noteapp"
)

# Función para copiar una carpeta y capturar errores
copiar_carpeta() {
  local carpeta="$1"
  echo "Intentando copiar la carpeta: $carpeta"
  scp -P "$DEST_PORT" -r "$SOURCE_DIR/$carpeta" "$DEST_USER@$DEST_IP:$DEST_PATH"
  if [ $? -eq 0 ]; then
    echo "La carpeta '$carpeta' se copió exitosamente."
  else
    echo "Error al copiar la carpeta '$carpeta'."
  fi
  echo "-----------------------------------------"
}

# Iterar sobre la lista de carpetas y llamar a la función de copia
for carpeta in "${FOLDERS[@]}"; do
  copiar_carpeta "$carpeta"
done

echo "Proceso de copia completado."