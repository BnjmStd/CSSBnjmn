# 🎨 Diferencia entre @layer y @scope en CSS

Tanto @layer como @scope son características modernas de CSS, pero tienen propósitos diferentes:

> [!IMPORTANT] > **@layer Permite definir la prioridad de los estilos mediante capas (CSS Cascade Layers). Soporte amplio en navegadores modernos.**

> [!IMPORTANT] > **@scope Restringe los estilos a un elemento específico y sus descendientes (Scoped Styles). Soporte experimental (solo en Chrome y Edge por ahora).**

# `@layer:` Control de la prioridad en la cascada

La directiva `@layer` permite agrupar estilos en capas para controlar qué reglas tienen mayor prioridad en caso de conflictos. Es útil para organizar estilos y evitar que reglas globales sobrescriban reglas específicas.

```css
@layer base {
  h1 {
    color: blue;
  }
}

@layer theme {
  h1 {
    color: red;
  }
}
```

- Como `@layer` theme se definió después de @layer base, el h1 será rojo, ya que los estilos en capas declaradas después tienen mayor prioridad.

**📌 Reglas de @layer:**

- Las capas que se definen después tienen mayor prioridad.
- Puedes usar @import con @layer para cargar estilos externos en una capa específica.
- `@layer` ayuda a evitar problemas de sobrescritura de estilos en proyectos grandes.

# Implementar `@layer` en un project react

**Ejemplo de @layer en global.css**

```css
@layer reset, base, components, utilities;

/* Reset (se aplica primero) */
@layer reset {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}

/* Base (estilos generales) */
@layer base {
  body {
    font-family: sans-serif;
    color: #333;
  }
}

/* Componentes (botones, tarjetas, etc.) */
@layer components {
  .btn {
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 16px;
  }

  .card {
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}

/* Utilidades (helpers y clases rápidas) */
@layer utilities {
  .text-center {
    text-align: center;
  }

  .mt-4 {
    margin-top: 1rem;
  }
}
```

**Orden de Aplicación:**

- reset (primero) → base → components → utilities (último y con mayor prioridad).
- Esto asegura que los estilos de los componentes no sean sobreescritos accidentalmente por reglas globales.

**Uso de @layer en Componentes Individuales**

Ejemplo en `Button.css`:

```css
@layer components {
  .btn-primary {
    background-color: blue;
    color: white;
  }
}
```

# `@scope:` Limitar estilos a un elemento específico

La directiva @scope permite aplicar estilos solo dentro de un determinado contenedor y sus descendientes, sin afectar otros elementos fuera del ámbito.

```css
@scope (.card) {
  h2 {
    color: green;
  }
}
```

**Explicación:**

- La regla `h2 { color: green; }` solo se aplicará a los h2 dentro de un .card, sin afectar otros h2 en la página.
- Esto es similar a usar prefijos en selectores (.card h2 {}), pero más limpio y potente.
