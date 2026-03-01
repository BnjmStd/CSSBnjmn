# type hints

## básicos

```python
def suma(a: int, b: int) -> int:
    return a + b

nombre: str = "Juan"
edad: int = 30
activo: bool = True

```

## types compounds

```python
def procesar_nombres(nombres: list[str]) -> dict[str, int]:
    return {nombre: len(nombre) for nombre in nombres}

```

## optional o union

```python
from typing import Optional

def obtener_usuario(id: int) -> Optional[str]:
    return "Usuario" if id == 1 else None


def obtener_usuario(id: int) -> str | None:
    return "Usuario" if id == 1 else None

```

## en class

```python
class Persona:
    def __init__(self, nombre: str, edad: int) -> None:
        self.nombre = nombre
        self.edad = edad

    def __str__(self) -> str:
        return f"{self.nombre} ({self.edad} años)"


# si se refiere a ella misma usa ""

class Nodo:
    def __init__(self, valor: int, siguiente: "Nodo" | None = None):
        self.valor = valor
        self.siguiente = siguiente

```

## typeDict

```python
from typing import TypedDict

class Usuario(TypedDict):
    id: int
    nombre: str

usuario: Usuario = {"id": 1, "nombre": "Juan"}
```

## Protocols: Duck Typing con Type Hints

```python
from typing import Protocol

class ConSaludar(Protocol):
    def saludar(self) -> str: ...

class Persona:
    def saludar(self) -> str:
        return "Hola"

def presentar(obj: ConSaludar) -> None:
    print(obj.saludar())

presentar(Persona())  # ✅
```
