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

