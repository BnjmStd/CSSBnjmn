
# conectar clúster 

```bash

ssh -p 22222 benja@45.236.128.220

```

# Cambiar clave sv

```bash

passwd

```

=> juanin1


# generar usuario

```bash

sudo useradd -m *usuario

```

# logar usuario

su *usuario


# quien soy

whoami

# Neofetch

Neofetch es una herramienta de línea de comandos escrita en Bash que muestra información del sistema en la terminal de manera estética. Su propósito principal es proporcionar un resumen visual y personalizable de las características de tu sistema, acompañado generalmente de un logotipo ASCII del sistema operativo o entorno.


neofetch --config


# neovim 

Neovim es una mejora moderna y extensible de Vim, un editor de texto avanzado popular entre programadores y usuarios avanzados. Es una bifurcación de Vim diseñada para mejorar su rendimiento, extensibilidad y facilidad de uso, mientras mantiene la misma experiencia básica y compatibilidad.

nvim archivo.txt

## archivo de conf principal  

~/.config/nvim/init.vim

## config basic

-- init.lua
vim.o.number = true         -- Mostrar números de línea
vim.o.relativenumber = true -- Números relativos
vim.o.expandtab = true      -- Usar espacios en lugar de tabs
vim.o.shiftwidth = 4        -- Tamaño de indentación
vim.o.tabstop = 4           -- Tamaño de tabulación


# con lua

~/.config/nvim/init.lua


-- Habilitar números de línea
vim.o.number = true

-- Usar espacios en lugar de tabulaciones
vim.o.expandtab = true
vim.o.tabstop = 4
vim.o.shiftwidth = 4

-- Habilitar colores
vim.o.termguicolors = true

-- Resaltado de búsqueda
vim.o.hlsearch = true


# archivo de ssh

sudo nvim /etc/ssh/sshd_config

# reiniciar ssh

sudo systemctl restart sshd

deamon => programas que corren en segundo plano


# modificar un commit 

git log => 

para cambiar el

git commit --amend

amend tambien nos permite editar cambios







