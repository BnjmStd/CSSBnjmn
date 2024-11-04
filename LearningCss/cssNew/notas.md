min(): selecciona el valor más pequeño entre varios valores proporcionados.
clamp(): establece un rango de valores, donde el valor final siempre estará entre un valor mínimo y uno máximo definidos.

# min 

La función min() toma dos o más valores y elige el menor de ellos.

:::css

.element {
    width: min(100%, 500px);
}

:::

En este ejemplo:

El ancho será el menor valor entre el 100% y 500px.
Si el 100% del contenedor es menor que 500px, el ancho se ajustará al 100%. Si el contenedor es más grande, el ancho se limitará a 500px.


# clamp

La función clamp() define un valor flexible que se ajusta entre un mínimo y un máximo.

::: css


.element {
    font-size: clamp(16px, 4vw, 24px);
}


:::

16px es el tamaño mínimo: el texto nunca será más pequeño que eso.
4vw es el tamaño preferido o base, que se ajustará en función del ancho de la ventana.
24px es el tamaño máximo: el texto nunca será más grande que eso.