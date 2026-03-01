/*

Por qué el uso excesivo console.log()puede frenarte
Sí, console.log()funciona, pero aquí hay algunas razones por las que confiar demasiado en él puede perjudicar tu flujo de trabajo:

Obstruye la consola : los registros dispersos llenan la consola, lo que dificulta aislar la información que realmente necesita.
Sin información estructurada : console.log()solo genera valores sin procesar y no ofrece estructura ni vista más profunda de datos complejos, como objetos o matrices.
Sobrecarga de rendimiento : el registro frecuente en entornos sensibles al rendimiento (como bucles o funciones asincrónicas) puede degradar el rendimiento con el tiempo.
Potencial perdido : JavaScript ofrece muchos otros métodos integrados consoleque pueden brindarle información mucho más completa y resultados más claros.

*/

// console dir console.dir()

/*

En lugar de utilizar console.log()para imprimir objetos, lo que puede resultar difícil de leer, pruebe console.dir(). Muestra una lista interactiva de las propiedades de un objeto específico, lo que facilita la exploración de estructuras profundamente anidadas.

*/

const usuario = {
  nombre: "Alice",
  edad: 25,
  preferencias: {
    tema: "oscuro",
    notificaciones: verdadero,
  },
};

console.dir(usuario, { profundidad: null });

/*

Beneficio : Este método le permite controlar qué tan profundamente desea profundizar en las propiedades del objeto, proporcionando una vista más estructurada en comparación con console.log(). También es útil para explorar objetos complejos y anidados.

*/

/*

console.clear() Mantener limpia la consola

Si inicias sesión con frecuencia durante el desarrollo, tu consola puede saturarse rápidamente. En lugar de limpiarla manualmente o revisar registros interminables, usa la función console.clear()para limpiar la consola cuando ya no necesites registros antiguos.

*/

/*

console.group()y console.groupEnd()para organizar los registros
A veces, es necesario organizar registros relacionados en grupos para facilitar su lectura. console.group()permite agrupar varios registros e incluso puede anidar grupos para obtener datos jerárquicos. Utilice console.groupEnd()para cerrar el grupo.

*/

console.group("Información del usuario");
console.log(" Nombre : Alice");
console.log("Edad: 25");
console.group(" Preferencias");
console.log("Tema : Oscuro");
console.log(" Notificaciones : Habilitadas");
console.groupEnd(); // Cierra ' Preferencias' console.groupEnd ( ); // Cierra ' Información del usuario '

/**
 * 
 * console.table()para visualizar datos tabulares
Si trabaja con matrices de objetos o grandes conjuntos de datos, console.table()puede formatear su salida en una tabla agradable y legible, lo que facilita la visualización de datos complejos
 */

const usuarios = [
  { nombre: "Alice", edad: 25 },
  { nombre: "Bob", edad: 30 },
  { nombre: "Charlie", edad: 35 },
];
console.table(usuarios);

/*

Beneficio : Este método ofrece una visualización clara y visual de matrices y objetos, lo que hace más fácil digerir datos estructurados de un vistazo.

*/

/**
 * 
 * 
 * console.time()y console.timeEnd()para medir el desempeño
¿Necesita saber cuánto tiempo tarda en ejecutarse una función? Utilícelo console.time()al inicio y console.timeEnd()al final de la función para medir el tiempo de ejecución de un bloque de código. Esto resulta especialmente útil para optimizar el rendimiento.
 */

console.time("fetchData"); // Simular alguna operación asincrónica setTimeout ( () => { console.timeEnd ( ' fetchData ' ) ; }, 2000 );
