#!/bin/bash

DEST_DIR="/home/benjamin/"
REMOTE_USER="benja"
REMOTE_IP="45.236.128.220"
REMOTE_PORT="22222"
REMOTE_DIR="/home/benja/"
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

copiar_carpeta_rsync() {
    local carpeta="$1"
    echo "🚚 Copiando carpeta: $carpeta"

    for intento in {1..3}; do
        echo "🔁 Intento $intento de 3 para '$carpeta'..."
        rsync -avz -e "ssh -p $REMOTE_PORT" "$REMOTE_USER@$REMOTE_IP:$REMOTE_DIR$carpeta" "$DEST_DIR"

        if [ $? -eq 0 ]; then
            echo "✅ Carpeta '$carpeta' copiada exitosamente."
            break
        else
            echo "⚠️ Error al copiar '$carpeta'. Reintentando en 5 segundos..."
            sleep 5
        fi
    done

    echo "-----------------------------------------"
}

for carpeta in "${FOLDERS[@]}"; do
    copiar_carpeta_rsync "$carpeta"
done

echo "🏁 Proceso de copia completado."