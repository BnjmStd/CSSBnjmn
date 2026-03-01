# abstracción

abstraer = hacer caso omiso de algo, o dejarlo a un lado.

Poo, es una forma de programar organizando el codigo en objetos que tienen metodos, caracteristicas y funciones

Es el proceso de identificar las características y comportamientos esenciales de un objeto y crear un modelo simplificado de ese objeto que se puede utilizar en el programa

La abstracción en Programación Orientada a Objetos (POO) es el concepto de ocultar los detalles internos de una clase y exponer solo lo necesario para el uso externo. Se logra utilizando clases abstractas y métodos abstractos, los cuales deben ser implementados por las clases hijas.

En Python, se usa el módulo abc (Abstract Base Class).

```python
from abc import ABC, abstractmethod

# Clase abstracta
class Animal(ABC):
    @abstractmethod
    def hacer_sonido(self):
        """Método abstracto que deben implementar las subclases"""
        pass

# Clases concretas que heredan de Animal
class Perro(Animal):
    def hacer_sonido(self):
        return "Guau Guau"

class Gato(Animal):
    def hacer_sonido(self):
        return "Miau Miau"

# Uso
mi_perro = Perro()
mi_gato = Gato()

print(mi_perro.hacer_sonido())  # Salida: Guau Guau
print(mi_gato.hacer_sonido())   # Salida: Miau Miau

```

Abstracción
La abstracción es el proceso de ocultar los detalles complejos de la implementación y solo mostrar lo esencial. En POO, la abstracción permite que las clases base (abstractas) proporcionen una interfaz para las subclases, obligándolas a implementar ciertos métodos o comportamientos sin conocer la implementación interna.

Propósito:
Enfocarse en lo esencial, sin preocuparse por los detalles internos.
Definir una interfaz común que las subclases deben seguir, sin importar los detalles de cada subclase.

```python
class Animal:
    def hacer_sonido(self):
        raise NotImplementedError("Este método debe ser implementado por las subclases")

class Perro(Animal):
    def hacer_sonido(self):
        return "Guau"

class Gato(Animal):
    def hacer_sonido(self):
        return "Miau"
```

# Herencia

La herencia es el mecanismo que permite a una clase hija heredar los atributos y métodos de una clase padre. Esto permite reutilizar código y construir jerarquías de clases.

Propósito:
Reutilizar código de una clase base en sus subclases.
Extender o modificar el comportamiento de la clase base en las subclases.

```python
class Animal:
    def __init__(self, nombre):
        self.nombre = nombre

    def hacer_sonido(self):
        return "Sonido genérico"

class Perro(Animal):
    def hacer_sonido(self):
        return "Guau"

# Crear una instancia de Perro
mi_perro = Perro("Rex")
print(mi_perro.hacer_sonido())  # Salida: Guau

```

# El polimorfismo

es otro de los pilares de la Programación Orientada a Objetos (POO), y se refiere a la capacidad de un objeto de adoptar diferentes formas. En otras palabras, es la habilidad de utilizar métodos con el mismo nombre pero con comportamientos diferentes, dependiendo del tipo de objeto que lo invoque.

## polimorfismo de sobrecarga (not support python)

Permite que un método tenga el mismo nombre pero con diferentes firmas, es decir, diferentes tipos o número de parámetros.

En este caso, el método sumar() tiene la misma firma pero se sobrecarga para aceptar tipos de datos diferentes. Python no soporta sobrecarga directamente, pero puedes lograrlo con valores por defecto o manejo de argumentos.

```java
class Calculadora {
    public int sumar(int a, int b) {
        return a + b;
    }

    public double sumar(double a, double b) {
        return a + b;
    }
}
```

## polimorfismo de subtipo

En Python, el polimorfismo más común es el que ocurre cuando una clase hija sobrescribe un método de la clase base. Así, el mismo método puede comportarse de manera diferente según el tipo de objeto

```python
class Animal:
    def hacer_sonido(self):
        raise NotImplementedError("Este método debe ser implementado por las subclases")

class Perro(Animal):
    def hacer_sonido(self):
        return "Guau"

class Gato(Animal):
    def hacer_sonido(self):
        return "Miau"

# Función que utiliza el polimorfismo
def imprimir_sonido(animal):
    print(animal.hacer_sonido())

# Crear instancias
mi_perro = Perro()
mi_gato = Gato()

# Usar la misma función para diferentes objetos
imprimir_sonido(mi_perro)  # Salida: Guau
imprimir_sonido(mi_gato)   # Salida: Miau

```

**¿quepasas?**

imprimir_sonido es una función que espera un objeto de tipo Animal, pero puedes pasarle un objeto de cualquier subclase de Animal (en este caso, Perro o Gato).
El polimorfismo se da cuando el método hacer_sonido se llama sobre un objeto sin importar si es un Perro o un Gato. Python se asegura de que se invoque el método correspondiente según el tipo real del objeto.
Polimorfismo: Un mismo método (hacer_sonido) se comporta de manera diferente según el objeto que lo invoque.

# Encapsulamiento

El encapsulamiento es el proceso de ocultar los detalles internos de un objeto y exponer solo lo necesario para su uso. En otras palabras, se refiere a la idea de agrupar los datos (atributos) y los métodos (funciones) que operan sobre esos datos dentro de una clase, de modo que no sean accesibles directamente desde fuera de la clase.

Esto ayuda a proteger los datos del acceso no autorizado y garantiza que las operaciones sobre esos datos se realicen de manera controlada.

```python
class CuentaBancaria:
    def __init__(self, saldo):
        self.__saldo = saldo  # Atributo privado

    def depositar(self, cantidad):
        if cantidad > 0:
            self.__saldo += cantidad

    def retirar(self, cantidad):
        if 0 < cantidad <= self.__saldo:
            self.__saldo -= cantidad
        else:
            print("Saldo insuficiente o cantidad inválida")

    def obtener_saldo(self):
        return self.__saldo

# Uso
mi_cuenta = CuentaBancaria(1000)
mi_cuenta.depositar(500)
mi_cuenta.retirar(200)
print(mi_cuenta.obtener_saldo())  # Salida: 1300
```

**explicación**

- Atributo privado: self.\_\_saldo es inaccesible directamente desde fuera de la clase, se debe usar los métodos depositar, retirar y obtener_saldo para interactuar con él.
- Protección: El encapsulamiento asegura que el saldo solo se modifique mediante los métodos controlados.

# Composición

La composición es otro concepto que se refiere a la creación de clases que están formadas por otras clases. En lugar de heredar de una clase base, una clase puede tener instancias de otras clases como atributos.

La composición es a menudo preferida sobre la herencia, ya que es más flexible y permite crear relaciones "tiene un" en lugar de "es un".

```python
class Motor:
    def encender(self):
        print("Motor encendido")

class Coche:
    def __init__(self, marca):
        self.marca = marca
        self.motor = Motor()  # Composición: Coche tiene un Motor

    def conducir(self):
        print(f"El coche {self.marca} está en marcha.")
        self.motor.encender()  # Uso del motor

# Uso
mi_coche = Coche("Toyota")
mi_coche.conducir()  # Salida: El coche Toyota está en marcha. Motor encendido
```

**explicación**

Aquí, la clase Coche tiene un Motor (relación de composición) en lugar de heredar de la clase Motor.

# Dependencia

La dependencia describe una relación entre clases donde una clase utiliza los métodos o propiedades de otra, pero no necesariamente la contiene (como en la composición) o hereda de ella.

```python
class Persona:
    def __init__(self, nombre):
        self.nombre = nombre

class Estudiante:
    def __init__(self, persona):
        self.persona = persona  # Dependencia de la clase Persona

    def mostrar_info(self):
        print(f"Estudiante: {self.persona.nombre}")

# Uso
persona = Persona("Juan")
estudiante = Estudiante(persona)
estudiante.mostrar_info()  # Salida: Estudiante: Juan

```

> [!IMPORTANT]
> La reutilización de código es un principio clave de la POO, ya que mediante herencia y composición, puedes reutilizar métodos y atributos de otras clases, evitando duplicación de código y haciendo que tu software sea más mantenible y escalable.

# Interfaces (solo en algunos lenguajes, como Java, C#, etc.)

Una interfaz define un contrato o conjunto de métodos que una clase debe implementar. A diferencia de la abstracción, una interfaz no tiene implementación; solo define los métodos que se esperan en las clases que la implementan.

```java
interface Vehiculo {
    void acelerar();
    void frenar();
}

class Coche implements Vehiculo {
    public void acelerar() {
        System.out.println("Coche acelerando");
    }

    public void frenar() {
        System.out.println("Coche frenando");
    }
}

class Moto implements Vehiculo {
    public void acelerar() {
        System.out.println("Moto acelerando");
    }

    public void frenar() {
        System.out.println("Moto frenando");
    }
}

```

**En este caso, tanto Coche como Moto implementan la interfaz Vehiculo, y ambos deben definir los métodos acelerar y frenar.**

# resumen

- Herencia: Permite que una clase herede atributos y métodos de otra.
- Abstracción: Oculta los detalles complejos y expone solo lo necesario.
- Polimorfismo: Permite que un mismo método se comporte de manera diferente según el objeto.
- Encapsulamiento: Agrupa los datos y comportamientos de un objeto, ocultando la implementación interna.
- Composición: Crea clases a partir de otras clases como atributos, favoreciendo una relación de "tiene un" sobre "es un".
