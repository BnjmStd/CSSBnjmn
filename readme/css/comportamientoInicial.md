# initial behavior

## initial, inherit, unset, revert

> INITIAL Establece la propiedad a su valor por defecto según la especificación CSS.

```css
p {
  color: initial; /* Vuelve al valor por defecto (normalmente negro) */
}
```

> inherit

Fuerza la herencia de la propiedad desde el elemento padre.

```css
p {
    color: inherit; /* Hereda el color del elemento contenedor */
}
```

> unset

- Si la propiedad es heredable, se comporta como inherit.
- Si no es heredable, se comporta como initial.

```css
p {
    color: unset; /* Hereda o vuelve al valor por defecto */
}
```

> revert

Vuelve al valor del usuario o del navegador, ignorando valores establecidos en CSS.

```css
button {
    all: revert; /* Restablece a los estilos del navegador */
}
```