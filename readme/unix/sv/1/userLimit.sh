#!/bin/bash
set -e

# ===================================================
# Crear usuario restringido con entorno aislado (rbash)
# ===================================================

# Requisitos:
# - Solo accede a su /home
# - No puede cambiar de directorio
# - Solo puede usar comandos predefinidos (copiados a ~/bin)
# - Crea un entorno virtual Python en ~/venv (si hay python3)

# Verificar root
if [ "$EUID" -ne 0 ]; then
  echo "🚫 Ejecuta este script como root."
  exit 1
fi

# Parámetro: nombre de usuario
USERNAME=$1
if [ -z "$USERNAME" ]; then
  echo "Uso: $0 nombre_usuario"
  exit 1
fi

# Crear grupo 'dev' si no existe
if ! getent group dev > /dev/null; then
  groupadd dev
  echo "🛠️ Grupo 'dev' creado."
fi

# Crear usuario con rbash como shell y agregarlo al grupo dev
useradd -m -s /bin/rbash -G dev "$USERNAME"
echo "👤 Usuario '$USERNAME' creado con shell restringido."

# Asignar contraseña
echo "🔒 Asigna una contraseña para $USERNAME:"
passwd "$USERNAME"

USER_HOME="/home/$USERNAME"
USER_BIN="$USER_HOME/bin"

# Crear carpeta para comandos permitidos
mkdir -p "$USER_BIN"

# Lista de comandos permitidos
ALLOWED_CMDS=(python3 pip3 ls cat echo mkdir rm touch)

# Crear enlaces simbólicos solo si existen
for cmd in "${ALLOWED_CMDS[@]}"; do
  if command -v "$cmd" &> /dev/null; then
    ln -sf "$(command -v "$cmd")" "$USER_BIN/$cmd"
    echo "✅ $cmd habilitado para $USERNAME"
  else
    echo "⚠️  $cmd no encontrado, omitido"
  fi
done

# Si se agregó python3, también agregar alias 'python'
if [ -e "$USER_BIN/python3" ]; then
  ln -sf "$USER_BIN/python3" "$USER_BIN/python"
  echo "🔁 Alias 'python' → 'python3' creado"
fi

# Configurar bash_profile con entorno restringido
cat <<EOF > "$USER_HOME/.bash_profile"
export PATH=\$HOME/bin
unset HISTFILE
EOF

# Permisos:
# - root dueño del /home pero acceso total al usuario (755)
# - bin solo accesible por root
# - resto del home vuelve a ser del usuario
chown root:root "$USER_HOME"
chmod 755 "$USER_HOME"

chmod 700 "$USER_BIN"
chown root:root "$USER_BIN"

# Devolver el ownership del resto del home al usuario
chown -R "$USERNAME:$USERNAME" "$USER_HOME"
chown root:root "$USER_BIN"  # bin sigue siendo root

# Crear entorno virtual Python (si está disponible)
if command -v python3 &> /dev/null; then
  su - "$USERNAME" -c "python3 -m venv ~/venv && echo 'source ~/venv/bin/activate' >> ~/.bash_profile"
  echo "🐍 Entorno virtual Python creado en ~/venv"
fi

echo "✅ Usuario '$USERNAME' listo con entorno restringido y Python virtualenv."
