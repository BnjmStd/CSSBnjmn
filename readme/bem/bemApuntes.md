no tener problemas con
especificidad, cascada y eso

B -> Block
E -> Element
M -> Modifier

su principal caracteristica es su nomesclatura, y evitar problemas con heerencia especificidad y cascada
es una metodologia para crear componentes reutilizables
mantener codigo claro y manter la especificidad al minimo, a tener un codigo limpio

# ¿que es un bloque?

entidad independiente
no necesita de nadie para existir
un header un nav un form o un contenedor

# ¿como nombramos bloques?

se les nombra con la funcionalidad del bloque
si es un navbar, se le asigna navbar y asi

# ¿qué es un elemento?

Un elemento en BEM, depende directamente de un Bloque, por lo que este debe estar dentro de un bloque. (Es dependiente a un bloque y está ligado a él.)

## ¿Cómo nombramos los elementos?

Los elementos se les nombra con el nombre del bloque contenedor, dos guiones bajos y la descripción del elemento.

# ¿qué es un modificador?

un modificador en BEM puede ser un bloque o un elemento, estos indican una modificación a dicho elemento o bloque

# ¿como nombramos los modificadores?

a los modificadores se les nombra, con el nombre que tenian anteriormente (bloque o elemento) se le agrega dos guiones medios y la descripción de la modificación

un modificador agrega una funcionalidad extra

# curiosidades

## ¿qué pasa si tengo un hijo dentro de un elemento?

```html
<header class="block">
  <section class="block__elem1">
    <div class="block__elem2"></div>
  </section>
  <div class="block__elem3"></div>
</header>
```

mix en bem

```html
<div class="block1 block2"></div>
```

```html
<header class="header">
  <nav class="nav">
    <div class="nav__logo">
      <p class="nav__parap"></p>
    </div>

    <div class="nav__links">
      <a href="" class="nav__link nav__link--color-red"></a>
    </div>
  </nav>
</header>
```
