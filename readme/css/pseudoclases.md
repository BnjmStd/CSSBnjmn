# Pseudoclases en CSS

Las pseudoclases en CSS permiten aplicar estilos a un elemento en función de su estado o posición en el documento.

## Pseudoclases de estado

- :hover → Aplica estilos cuando el usuario pasa el cursor sobre un elemento.

- :focus → Se activa cuando un elemento recibe el foco (ejemplo: un input seleccionado).

- :active → Se activa cuando un elemento está siendo presionado.

- :visited → Se aplica a enlaces que ya han sido visitados.

## Pseudoclases de estructura

- :first-child → Selecciona el primer hijo de un elemento padre.

- :last-child → Selecciona el último hijo de un elemento padre.

- :nth-child(n) → Selecciona el enésimo hijo de un padre.

- :nth-of-type(n) → Selecciona el enésimo elemento de un tipo específico.

## Pseudoclases lógicas

- :not(selector) → Selecciona todos los elementos excepto los que coincidan con el selector.

- :has(selector) → Selecciona elementos que contienen un elemento específico.

## Ejemplo de uso

```css

button:hover {
  background-color: blue;
  color: white;
}

input:focus {
  border: 2px solid red;
}

li:nth-child(odd) {
  background-color: lightgray;
}

```