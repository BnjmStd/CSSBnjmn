# pyenv

`source ~/.bashrc`

`pyenv --version`

`pyenv global`

`pyenv --list`

## entorno virtual

```bash
pyenv virtualenv x.x.x mi entorno

pyenv activate mi entorno

pyenv deactivate
```

### automatico

`pyenv local mi entorno`

## verify

`which python`

`pyenv versions`

## eliminar entorno

```bash
pyenv unistall <entorno>

pip install --upgrade -r req ...

pip freeze > req ..
```
