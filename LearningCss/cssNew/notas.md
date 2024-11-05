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


# object fit cover

Se usa para ajustar una imagen o video dentro de un contenedor, cuando el elemento se usa directamente como una etiqueta <img> o <video>. Al aplicar cover, la imagen o video se redimensiona para cubrir completamente el contenedor, manteniendo la proporción y recortando los bordes cuando sea necesario.

:::
<img src="imagen.jpg" style="width: 100%; height: 100%; object-fit: cover;">
:::

# background size cover

 Se usa para ajustar una imagen de fondo dentro de un contenedor, cuando la imagen se aplica como fondo en CSS mediante background-image. La imagen de fondo se redimensiona para cubrir completamente el área del contenedor, manteniendo la proporción y recortando los bordes cuando sea necesario.


 :::
 
 .contenedor {
    background-image: url('imagen.jpg');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 400px;
}
 
 :::

 Contexto de uso: object-fit: cover se usa con elementos <img> o <video>, mientras que background-size: cover se aplica en imágenes de fondo dentro de un contenedor.
Aplicación en HTML/CSS: object-fit es una propiedad CSS aplicada directamente en el elemento de imagen/video, mientras que background-size se usa en la configuración de estilo de fondo de un contenedor.


# ¿como usar custom property en react + css ?

### Usar style inline en React
Puedes establecer o actualizar CSS variables en línea en React usando el atributo style del elemento:
::: 

function MyComponent() {
  return (
    <div style={{ '--my-custom-color': 'blue' }}>
      <p style={{ color: 'var(--my-custom-color)' }}>Texto en color personalizado</p>
    </div>
  );
}

:::

### Actualizar CSS variables con JavaScript

Si necesitas cambiar una CSS variable en respuesta a una acción o evento, puedes actualizarla a través de JavaScript. En React, puedes hacer esto usando useEffect y document.documentElement.style.setProperty para modificar las variables globales, o puedes hacerlo en un elemento específico si tienes una referencia (ref) a él.

:::

import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Cambia la variable de color personalizada en el nivel del documento
    document.documentElement.style.setProperty('--my-custom-color', 'green');
  }, []);

  return (
    <div>
      <p style={{ color: 'var(--my-custom-color)' }}>Texto en color personalizado</p>
    </div>
  );
}

:::

###  Usar CSS variables con estilos dinámicos en componentes

Si estás creando estilos en JavaScript o TypeScript (con librerías como styled-components o emotion), puedes pasar CSS variables como propiedades a los componentes:

:::

import styled from 'styled-components';

const Box = styled.div`
  background-color: var(--box-color, red);
  width: 100px;
  height: 100px;
`;

function MyComponent() {
  return (
    <div style={{ '--box-color': 'purple' }}>
      <Box />
    </div>
  );
}

:::


# @supports 

la regla @supports se utiliza para aplicar estilos condicionalmente, basándose en si el navegador soporta una propiedad o valor CSS específico. Esto es útil cuando deseas aplicar ciertos estilos solo si el navegador del usuario tiene soporte para ellos.

:::


/* Aplica estos estilos solo si el navegador soporta display: grid */
@supports (display: grid) {
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}

/* Alternativa para navegadores sin soporte para display: grid */
.container {
    display: flex;
    flex-direction: column;
}


:::

En este caso, @supports (display: grid) verifica si el navegador soporta display: grid. Si es así, aplica esos estilos dentro del bloque @supports. Si no, el navegador utilizará los estilos flex definidos fuera del bloque @supports.


:::

@supports (display: grid) and (gap: 1rem) {
    .container {
        display: grid;
        gap: 1rem;
    }
}

:::