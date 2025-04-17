#!/bin/bash
set -e

if [ "$EUID" -ne 0 ]; then
  echo "Este script debe ejecutarse como root"
  exit 1
fi

USER=$1

if [ -z "$USER" ]; then
  echo "Uso: $0 nombre_usuario"
  exit 1
fi

if ! id "$USER" &>/dev/null; then
  echo "❌ El usuario '$USER' no existe"
  exit 1
fi

read -p "⚠️ ¿Estás seguro de que querés eliminar al usuario '$USER' y todo su /home? (s/N): " CONFIRM

if [[ "$CONFIRM" == "s" || "$CONFIRM" == "S" ]]; then
  userdel -r "$USER"
  echo "✅ Usuario '$USER' eliminado correctamente."
else
  echo "❎ Cancelado."
fi
