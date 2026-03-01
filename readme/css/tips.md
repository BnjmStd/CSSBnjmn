# 📚 Guía de HTML y CSS Moderno

Esta guía integra **HTML y CSS** con técnicas modernas como `caret-color`, `accent-color`, `backdrop-filter`, y más.

# etiquetas raras

```html
<mark></mark>

<details>
  <summary></summary>
</details>

<time></time>

<div>
  <label for="browser"> choose your browser </label>

  <input list="browsers" id="browser" name="browser" />

  <datalist id="browsers">
    <option value="chrome"></option>
  </datalist>

  <label for="file">Upload files</label>
  <progress id="file" value="70" max="100">70%</progress>
  <meter id="disk" value="0.6">60%</meter>

  <abbr title="world health organization">WHO</abbr>
</div>
```

---

## 📝 Código Completo

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <!-- Iconos dinámicos según esquema de color -->
    <link rel="icon" href="white-icon" media="(prefers-color-scheme: white)" />
    <link rel="icon" href="black-icon" media="(prefers-color-scheme: light)" />

    <style>
      /* 📌 Color del cursor en inputs */
      input {
        caret-color: red;
      }

      /* 🎨 Personalización de radio buttons */
      input[type="radio"] {
        accent-color: green;
      }

      /* 🔒 Evitar selección de texto */
      p {
        user-select: none;
      }

      /* 💕 Enfatizar texto con decoraciones */
      span {
        text-emphasis: "💕";
      }

      /* 🔳 Efecto de desenfoque en fondos */
      .text {
        backdrop-filter: blur(10px);
      }

      /* 📝 Texto con guiones automáticos */
      .container {
        width: 100px;
        border: 1px solid black;
        hyphens: auto;
      }

      /* 🖼️ Renderizado de imágenes pixeladas */
      img {
        image-rendering: pixelated;
      }
    </style>
  </head>
  <body>
    <div class="inputs">
      <div>
        <p>type="text"</p>
        <input type="text" />
      </div>

      <div>
        <p>type="number"</p>
        <input type="number" />
      </div>

      <div>
        <p>type="number" con inputmode="numeric"</p>
        <input type="number" inputmode="numeric" />
      </div>

      <div>
        <p>✅ Input que **acepta solo números**:</p>
        <input type="text" inputmode="numeric" pattern="[0-9]+" />
      </div>
    </div>
  </body>
</html>
```

Explicación de las Técnicas

- 🎨 `caret-color: red;`
  Cambia el color del cursor dentro de los inputs.

- ✅ `accent-color: green;`
  Personaliza el color de los radio buttons y checkboxes.

- 🛑 `user-select: none;`
  Evita que el usuario seleccione texto.

- 💕 `text-emphasis: '💕';`
  Añade decoraciones sobre el texto, como símbolos personalizados.

- 🌫️ `backdrop-filter: blur(10px);`
  Crea un efecto de desenfoque en fondos semitransparentes.

- ✂️ `hyphens: auto;`
  Permite dividir palabras automáticamente cuando el espacio es limitado.

- 🎮 `image-rendering: pixelated;`
  Optimiza imágenes pixeladas sin suavizar los bordes
  `

## ¿Tienes desbordamiento?

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  outline: 2px solid lime;
}

/* funciona super bien cuando tienes un desbordamiento y no sabes donde */
```

## Padding y margins

```css
.wrapper {
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;

  margin-inline: auto;
  padding-inline: 2rem;
}
```

## algunos input

```html
<div class="inputs">
  <div>
    <p>type="text"</p>
    <input type="text" />
  </div>

  <div>
    <p>type:"number"</p>
    <input type="number" />
  </div>

  <div>
    <p>type number inputmode number</p>
    <input type="number" inputmode="numeric" />
  </div>

  <div>
    <p>este si</p>
    <input type="text" inputmode="numeric" pattern="[0-9]+" />
  </div>
</div>
```

## Funciones

- `min():` selecciona el valor más pequeño entre varios valores proporcionados.

- `clamp():` establece un rango de valores, donde el valor final siempre estará entre un valor mínimo y uno máximo definidos.

# min

La función min() toma dos o más valores y elige el menor de ellos.

```css
.element {
  width: min(100%, 500px);
}
```

En este ejemplo:

El ancho será el menor valor entre el 100% y 500px.
Si el 100% del contenedor es menor que 500px, el ancho se ajustará al 100%. Si el contenedor es más grande, el ancho se limitará a 500px.

# clamp

La función clamp() define un valor flexible que se ajusta entre un mínimo y un máximo.

```css
.element {
  font-size: clamp(16px, 4vw, 24px);
}
```

16px es el tamaño mínimo: el texto nunca será más pequeño que eso.
4vw es el tamaño preferido o base, que se ajustará en función del ancho de la ventana.
24px es el tamaño máximo: el texto nunca será más grande que eso.

# object fit cover

Se usa para ajustar una imagen o video dentro de un contenedor, cuando el elemento se usa directamente como una etiqueta \<img> o \<video>. Al aplicar cover, la imagen o video se redimensiona para cubrir completamente el contenedor, manteniendo la proporción y recortando los bordes cuando sea necesario.

```html
<img src="imagen.jpg" style="width: 100%; height: 100%; object-fit: cover;" />
```

# background size cover

Se usa para ajustar una imagen de fondo dentro de un contenedor, cuando la imagen se aplica como fondo en CSS mediante background-image. La imagen de fondo se redimensiona para cubrir completamente el área del contenedor, manteniendo la proporción y recortando los bordes cuando sea necesario.

```css
.contenedor {
  background-image: url("imagen.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 400px;
}
```

- Contexto de uso: object-fit: cover se usa con elementos `<img>` o `<video>`, mientras que `background-size: cover ` se aplica en imágenes de fondo dentro de un contenedor.

- Aplicación en HTML/CSS: `object-fit `es una propiedad CSS aplicada directamente en el elemento de imagen/video, mientras que `background-size` se usa en la configuración de estilo de fondo de un contenedor.

# ¿como usar custom property en react + css ?

### Usar style inline en React

Puedes establecer o actualizar CSS variables en línea en React usando el atributo style del elemento:

```js
function MyComponent() {
  return (
    <div style={{ "--my-custom-color": "blue" }}>
      <p style={{ color: "var(--my-custom-color)" }}>
        Texto en color personalizado
      </p>
    </div>
  );
}
```

### Actualizar CSS variables con JavaScript

Si necesitas cambiar una CSS variable en respuesta a una acción o evento, puedes actualizarla a través de JavaScript. En React, puedes hacer esto usando useEffect y document.documentElement.style.setProperty para modificar las variables globales, o puedes hacerlo en un elemento específico si tienes una referencia (ref) a él.

```js
import React, { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    // Cambia la variable de color personalizada en el nivel del documento
    document.documentElement.style.setProperty("--my-custom-color", "green");
  }, []);

  return (
    <div>
      <p style={{ color: "var(--my-custom-color)" }}>
        Texto en color personalizado
      </p>
    </div>
  );
}
```

### Usar CSS variables con estilos dinámicos en componentes

Si estás creando estilos en JavaScript o TypeScript (con librerías como styled-components o emotion), puedes pasar CSS variables como propiedades a los componentes:

```js
import styled from "styled-components";

const Box = styled.div`
  background-color: var(--box-color, red);
  width: 100px;
  height: 100px;
`;

function MyComponent() {
  return (
    <div style={{ "--box-color": "purple" }}>
      <Box />
    </div>
  );
}
```

# @supports

la regla @supports se utiliza para aplicar estilos condicionalmente, basándose en si el navegador soporta una propiedad o valor CSS específico. Esto es útil cuando deseas aplicar ciertos estilos solo si el navegador del usuario tiene soporte para ellos.

```css
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
```

En este caso, @supports (display: grid) verifica si el navegador soporta display: grid. Si es así, aplica esos estilos dentro del bloque @supports. Si no, el navegador utilizará los estilos flex definidos fuera del bloque @supports.

```css
@supports (display: grid) and (gap: 1rem) {
  .container {
    display: grid;
    gap: 1rem;
  }
}
```

## 🎯 Balancear Texto (`text-wrap: balance;`)

Permite equilibrar la distribución del texto en los encabezados para mejorar la legibilidad.

```css
h1 {
  text-wrap: balance;
}
```

**ejemplo:**

```html
<h1>Hola, me llamo Benjamin y no quiero ir al colegio aaaaaaa</h1>
```

## Media Queries Modernas

```css
@media (width >= 300px) {
  body {
    background-color: lightblue;
  }
}

@media (width < 1000px) {
  body {
    background-color: lightgray;
  }
}

@media (640px <= width < 700px) {
  body {
    background-color: lightcoral;
  }
}
```

**explicación**

- (width >= 300px) → Cuando el ancho es mayor o igual a 300px.
- (width < 1000px) → Cuando el ancho es menor a 1000px.
- (640px <= width < 700px) → Entre 640px y 700px.

## Animaciones con animation-timeline

```css
@keyframes reveal {
  from {
    opacity: 0;
    translate: 0 100px;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}

img {
  animation: reveal both;
  animation-timeline: view();
  animation-range: entry 20% cover 30%;
}
```

**ejemplo:**

```html
<img src="imagen.jpg" alt="Imagen con animación de scroll" />
```

## Efecto Sticky en Header con `animation-timeline: scroll();`

```css
header {
  backdrop-filter: blur(5px);
  position: sticky;
  top: 0;
  animation: adjust-header linear both;
  animation-timeline: scroll();
  animation-range: 0 200px;
}

@keyframes adjust-header {
  to {
    background: rgba(0, 0, 0, 0.3);
    font-size: 12px;
    height: 24px;
  }
}
```

**ejemplo**

```html
<header>Este es un header con efecto de scroll</header>
```

## Animación de Modal con scale y display

```css
dialog {
  transition:
    scale 0.3s ease,
    display 0.3s allow-discrete;
  scale: 0;
}

dialog[open] {
  scale: 1;
}

dialog[open] @starting-style {
  scale: 0;
}
```

**ejemplo**

```html
<dialog id="myDialog">
  <p>Contenido del modal</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>

<button id="button">Abrir Modal</button>

<script>
  const dialog = document.getElementById("myDialog");
  const button = document.getElementById("button");

  button.addEventListener("click", () => {
    dialog.showModal();
  });
</script>
```

## Transición de Vistas con view-transition-name

```css
@view-transition {
  navigation: auto;
}
```

**ejemplo**

```html
<main id="home">
  <img src="alana.webp" style="view-transition-name: alana-photo;" />
</main>

<article>
  <img src="alana.webp" alt="" style="view-transition-name: alana-photo;" />
</article>
```

## content-visibility

La propiedad CSS controla si un elemento muestra o no su contenido, además de forzar un conjunto sólido de elementos de contención, lo que permite a los agentes de usuario omitir potencialmente grandes partes del trabajo de diseño y representación hasta que sea necesario. Permite al agente de usuario omitir el trabajo de representación de un elemento (incluido el diseño y el pintado) hasta que sea necesario, lo que hace que la carga inicial de la página sea mucho más rápida. `content-visibility`

```css
img {
  content-visibility: visible;

  content-visibility: hidden;
}
```

**sintaxis**

```css
/* Keyword values */
content-visibility: visible;
content-visibility: hidden;
content-visibility: auto;

/* Global values */
content-visibility: inherit;
content-visibility: initial;
content-visibility: revert;
content-visibility: revert-layer;
content-visibility: unset;
```

> [!IMPORTANT] > `auto` es ideal para mejorar el rendimiento en páginas grandes, ya que evita renderizar elementos fuera de la pantalla hasta que sean visibles.

- `visible` El contenido siempre se renderiza, incluso si no es visible en la pantalla. Cuando necesitas que el contenido esté siempre disponible para cálculos de diseño.

- `auto` El navegador omite el renderizado del contenido hasta que es necesario (cuando entra en el viewport). Optimizar el rendimiento en páginas con mucho contenido.

# custom list

```css
@counter-style start-list {
  system: cyclic;
  symbols: "🤣" "😁" "🥰";
  suffix: " ";
}

ul {
  list-style: start-list;
}
```

```html
<ul>
  <li>Array</li>
  <li>Array</li>
  <li>Array</li>
  <li>Array</li>
  <li>Array</li>
</ul>
```

# supports

```css
@supports (display: grid) {
  .grid-container {
    display: grid;
    grid-templates-columns: repeat(3, 1fr);
  }
}

@supports not (display: grid) {
  .grid-container {
    display: flex;
    flex-direction: column;
  }
}
```

> [!WARNING]
> CSS puro no tiene `@else`, por lo que necesitas dos @supports.

```html
<div class="grid-container">
  <div></div>

  <div></div>

  <div></div>
</div>
```

# CONTAINER

si tienes prblema con la proporcion de tus imagenes

````css
.container {
  container-type: size;
  container-name: resize-box;
  width: 100%;
  height: 100%;
  background-color: black;
}


@container resize-box (aspect-ratio > 16/9){
  .scene {
    width: auto;
    height: 100%;
  }
}
```

# retrasar la carga de imagenes

```html

<img src="" alt="" loading="lazy">

```

+

```css

img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

```

# clip-path

mejor que con los psudoElementos
````
