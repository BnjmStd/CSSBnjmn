# Combinators (Operadores de relación)

Los operadores permiten seleccionar elementos basándose en atributos, jerarquías y combinaciones.

## Jerarquía y relaciones

> \> → Hijo directo

```css
div > p {
  color: red; /*Child combinator */
}
```

> ~ → Hermano siguiente (general)

```css
div ~ p {
  color: blue; /* General sibling combinator */
}
```

> \ + → Hermano siguiente (inmediato)

```css
div + p {
  color: green; /* Adjacent sibling combinato */
}
```

> , -> group selector

```css
h1,
h2,
h3 {
  color: green;
}
```

## Attribute Selectors

> [attr] → Elemento con atributo

```css
input[required] {
  border: 1px solid red;
}
```

> [attr="value"] → Atributo con valor exacto

```css
a[target="_blank"] {
  color: orange;
}
```

> [attr~="value"] → Atributo con una palabra específica

```css
div[class~="container"] {
  padding: 10px;
}
```

> [attr|="value"] → Atributo que comienza con "value" o "value-"

```css
div[class|="box"] {
  margin: 5px;
}
```

> [attr^="value"] → Atributo que empieza con "value"

```css
input[name^="user"] {
  background: yellow;
}
```

> [attr$="value"] → Atributo que termina con "value"

```css
img[src$=".jpg"] {
  border-radius: 5px;
}
```

> [attr*="value"] → Atributo que contiene "value"

```css
a[href*="example"] {
  font-weight: bold;
}
```

## unidades en css

> vw → Porcentaje del ancho de la pantalla

```css
div {
  width: 50vw;
} /* 50% del ancho de la pantalla */
```

> vh → Porcentaje del alto de la pantalla

```css
div {
  height: 50vh;
} /* 50% del alto de la pantalla */
```

> vmin → Porcentaje del lado más pequeño del viewport

```css
div {
  width: 10vmin;
} /* 10% del menor lado del viewport */
```

> vmax → Porcentaje del lado más grande del viewport

```css
div {
  width: 10vmax;
} /* 10% del mayor lado del viewport */
```

> lvw / lvh → Como vw/vh pero sin incluir barras de desplazamiento (experimental)

> svw / svh → Solo el viewport más pequeño posible (experimental)

> dvw / dvh → El viewport dinámico considerando teclado en móviles (experimental)

> cap → Altura de las mayúsculas de la fuente

```css
div {
  font-size: 2cap;
}
```

> ic → Ancho del carácter "水" en la fuente actua

```css
span {
  width: 5ic;
}
```

> lh → Altura de línea del elemento actua

```css
div {
  height: 2lh;
}
```
