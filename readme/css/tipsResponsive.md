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
>  Ventaja: Asegura que el padding no sea demasiado grande en pantallas grandes ni demasiado pequeño en pantallas pequeñas.

## ``font-size con clamp()``

Controla el tamaño de fuente con un valor mínimo, preferido y máximo.

```css
h1 {
    font-size: clamp(1.8rem, calc(7vw + 1rem), 5rem);
}
```

> [!WARNING]
> Cuidado con vw

- ``vw`` no responde al zoom del navegador.
- ``calc(7vw + 1rem)`` evita que el texto sea ilegible en pantallas grandes.

**Solución: Usar clamp() en combinación con vw, rem y calc().**

## Imágenes Responsivas con ``aspect-ratio``

Asegura que las imágenes mantengan una proporción establecida

```css
img {
    height: auto;
    aspect-ratio: 1 / 1;
    object-fit: cover;
}
```

- ``aspect-ratio: 1 / 1``; → Mantiene la imagen cuadrada.
- ``object-fit: cover``; → Evita distorsión y rellena el contenedor.


## Altura ``vh`` vs ``dvh``

Evita problemas en móviles con dvh (dynamic viewport height).

```css
body {
    height: 100vh;  /* Puede ser problemático en móviles */
    height: 100dvh; /* Se adapta al tamaño real del viewport */
}
```

**Recomendación: Usar dvh para evitar recortes en dispositivos móviles**

##  Menús Ocultos con opacity y pointer-events

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

## ``inert``: Ocultar elementos completamente del DOM

```css
nav:not(.show) {
    inert;
}
```

**📌 Ventaja: Elimina el menú de la navegación del usuario, mejorando la accesibilidad.**