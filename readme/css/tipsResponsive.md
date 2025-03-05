# 🎨 CSS Moderno: Layouts, Tipografía y Comportamientos

---

## 📏 `padding: min()`

La función `min()` elige el menor de los valores dados, útil para **padding** adaptable.

```css
.container {
  padding: min(5em, 8%);
}
```

> [!IMPORTANT]
> Ventaja: Asegura que el padding no sea demasiado grande en pantallas grandes ni demasiado pequeño en pantallas pequeñas.

## `font-size con clamp()`

Controla el tamaño de fuente con un valor mínimo, preferido y máximo.

```css
h1 {
  font-size: clamp(1.8rem, calc(7vw + 1rem), 5rem);
}
```

> [!WARNING]
> Cuidado con vw

- `vw` no responde al zoom del navegador.
- `calc(7vw + 1rem)` evita que el texto sea ilegible en pantallas grandes.

**Solución: Usar clamp() en combinación con vw, rem y calc().**

## Imágenes Responsivas con `aspect-ratio`

Asegura que las imágenes mantengan una proporción establecida

```css
img {
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
```

- `aspect-ratio: 1 / 1`; → Mantiene la imagen cuadrada.
- `object-fit: cover`; → Evita distorsión y rellena el contenedor.

## Altura `vh` vs `dvh`

Evita problemas en móviles con dvh (dynamic viewport height).

```css
body {
  height: 100vh; /* Puede ser problemático en móviles */
  height: 100dvh; /* Se adapta al tamaño real del viewport */
}
```

**Recomendación: Usar dvh para evitar recortes en dispositivos móviles**

## Menús Ocultos con opacity y pointer-events

Para evitar clics en un menú oculto:

```css
nav {
  opacity: 0;
  pointer-events: none;
}

nav.show {
  opacity: 1;
  pointer-events: all;
}
```

**Ventaja: Permite ocultar el menú sin afectar la accesibilidad.**

## Animaciones de Menú con transition

Oculta el menú lateralmente y lo muestra con animación.

```css
nav {
  position: absolute;
  right: -16em;
  transition: right 0.2s ease-in-out;
}

nav.show {
  right: 0;
}
```

## `inert`: Ocultar elementos completamente del DOM

```css
nav:not(.show) {
    inert;
}
```

**📌 Ventaja: Elimina el menú de la navegación del usuario, mejorando la accesibilidad.**

# media query

```css
@media screen {
} /*for devices with screen like monitors, tablets, and phones */

@media print {
} /* for printers and print preview mode */

@media all {
} /* the default value that applies to all device */

@media speech {
} /* for screen readers that narrate for content of a page*/
```

## operators

```css
@media screen and /*condition*/ and /*condition*/ {
}
@media screen, /*condition*/, /*condition*/ {
}
@media not screen and (orientation: landscape) {
}
```

## valores clave para `screen`

```css
@media (width: 0px) {
}
@media (height: 0px) {
}
@media (min-height: 0px) {
}
@media (max-height: 0px) {
}
@media (min-width: 0px) {
}
@media (max-width: 0px) {
}
```

## orientación

```css
@media (orientation: landscape) {
  /*modo horizontal*/
}

@media (orientation: portrait) {
  /*modo vertical*/
}
```

## aspect ratios

![alt text](image-8.png)

![alt text](image-9.png)

# clamp

manera de no usar

```css
@media (max-width: 1200px) {
  h1 {
    font-size: 90px;
  }
}

@media (max-width: 900px) {
  h1 {
    font-size: 70px;
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: 50px;
  }
}
```
manera de si usar:

```css
h1 {
    font-size: clamp(min, curr, max);
    font-size: clamp(50px, 8vw, 100px);
}
```