#!/bin/bash
set -e

# Verificar que se ejecuta como root
if [ "$EUID" -ne 0 ]; then
  echo "Este script debe ejecutarse como root"
  exit 1
fi

USER=$1
ACTION=$2
COMMAND=$3

USER_HOME="/home/$USER"
USER_BIN="$USER_HOME/bin"

if [ -z "$USER" ] || [ ! -d "$USER_HOME" ]; then
  echo "Error: usuario no válido o no existe"
  exit 1
fi

# Asegura que exista la carpeta ~/bin
mkdir -p "$USER_BIN"
chown root:root "$USER_BIN"
chmod 700 "$USER_BIN"

case "$ACTION" in
  ver)
    echo "✅ Comandos permitidos para $USER:"
    ls -1 "$USER_BIN"
    ;;

  agregar)
    if [ -z "$COMMAND" ]; then
      echo "Uso: $0 $USER agregar <comando>"
      exit 1
    fi

    if ! command -v "$COMMAND" &> /dev/null; then
      echo "❌ Comando '$COMMAND' no encontrado en el sistema"
      exit 1
    fi

    ln -sf "$(command -v $COMMAND)" "$USER_BIN/$COMMAND"
    echo "➕ Comando '$COMMAND' agregado para $USER"

    # Agregar alias python si es python3
    if [ "$COMMAND" = "python3" ] && command -v python3 &> /dev/null; then
      ln -sf "$(command -v python3)" "$USER_BIN/python"
      echo "🔁 También se agregó alias 'python'"
    fi
    ;;

  eliminar)
    if [ -z "$COMMAND" ]; then
      echo "Uso: $0 $USER eliminar <comando>"
      exit 1
    fi

    if [ -L "$USER_BIN/$COMMAND" ]; then
      rm "$USER_BIN/$COMMAND"
      echo "➖ Comando '$COMMAND' eliminado de $USER"

      # Eliminar alias si es python3
      if [ "$COMMAND" = "python3" ] && [ -L "$USER_BIN/python" ]; then
        rm "$USER_BIN/python"
        echo "🗑️ También se eliminó alias 'python'"
      fi
    else
      echo "⚠️ El comando '$COMMAND' no está permitido actualmente"
    fi
    ;;

  *)
    echo "Uso:"
    echo "  $0 usuario ver                    # Ver comandos permitidos"
    echo "  $0 usuario agregar <comando>     # Agregar comando permitido"
    echo "  $0 usuario eliminar <comando>    # Eliminar comando permitido"
    exit 1
    ;;
esac
