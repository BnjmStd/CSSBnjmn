# 🎨 Colores Modernos en CSS

## 🟢 RGBa Moderno

CSS ha evolucionado, y ahora puedes usar `rgb()` con **notación moderna** sin comas.  
Esto permite incluir **transparencia** directamente con la barra `/`.

```css
h1 {
  /* RGBa clásico (legacy) */
  color: rgba(0, 0, 0, 0.5);

  /* ✅ RGB moderno */
  color: rgb(0 0 0 / 50%);
}
```

## HSL (Hue, Saturation, Lightness)

```css
h1 {
  color: hsl(210, 100%, 50%); /* Azul puro */
  color: hsl(0, 100%, 50%); /* Rojo puro */
  color: hsl(120, 100%, 25%); /* Verde oscuro */
}

h1 {
  color: hsl(210 100% 50% / 70%);
}
```

# color() - Espacios de color avanzados

La función color() permite definir colores en espacios de color más amplios que el clásico sRGB. Esto es útil para pantallas de alta gama como las que usan display-p3 (colores más vivos y saturados).

```css
background: color(display-p3 1 0.5 0);
```

# color-mix() - Mezcla de colores en CSS

```css
background: color-mix(in srgb, red 50%, blue 50%);
```

# light-dark() - Modo claro/oscuro dinámico

```css
background: light-dark(white, black);
```

# fallback Usando var(--variable, valorPorDefecto)

```css
:root {
  --primary-color: #ff5733; /* Naranja */
}

button {
  background: var(--primary-color, blue);
}

button {
  background: color-mix(in srgb, var(--primary-color, red) 80%, white 20%);
}
```
