# 📚 Guía de HTML y CSS Moderno

Esta guía integra **HTML y CSS** con técnicas modernas como `caret-color`, `accent-color`, `backdrop-filter`, y más.

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
