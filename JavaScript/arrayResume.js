// 1. transforma cada núymero multiplicado por 2
[1, 2, 3].map((n) => n * 2);

/*
    Devuelve un nuevo array con los resultados 
    Devuelve[2, 4, 6]
*/

let arr1 = [1, 2, 3];
let result1 = arr1.map((n) => n * 2);
console.log(result1); // [2, 4, 6]

// 2. filtra la comida que no sea carnivora
["🍖", "🥝", "🍌"].filter((n) => n != "🍖");
/*
    Crea un nuevo array con todos los elementos que pasen la prueba implementada por la función dada.
    devuelve ['🥝', '🍌']
*/

let arr2 = ["🍖", "🥝", "🍌"];
let result2 = arr2.filter((n) => n != "🍖");
console.log(result2); // ['🥝', '🍌']

// 3. encuentra y devuelve la gallina
["🐔", "🐕", "🐻"].find((n) => n == "🐔");

/*
    Devuelve el primer elemento del array que cumple con la función de prueba proporcionada. 
    Si no encuentra ningún elemento que cumpla con la condición, devuelve undefined.
    devuelve '🐔'
*/

let arr3 = ["🐔", "🐕", "🐻"];
let result3 = arr3.find((n) => n == "🐔");
console.log(result3); // '🐔'

// 4. dime dónde está la gallina
["🐔", "🐕", "🐻"].findIndex((n) => n == "🐔");

/*
    Devuelve el índice del primer elemento del array que cumple con la función de prueba proporcionada. 
    Si no encuentra ningún elemento que cumpla con la condición, devuelve -1.
    Devuelve: 0 (índice del primer elemento '🐔')
*/

let arr4 = ["🐔", "🐕", "🐻"];
let result4 = arr4.findIndex((n) => n == "🐔");
console.log(result4); // 0

// 5. rellena el array de dinero
["", "", ""].fill("💸");

/*
    Método fill: Cambia todos los elementos en un array a un valor estático, desde 
    un índice inicial hasta un índice final (sin incluirlo), y devuelve el array modificado.
    Devuelve: ['💸', '💸', '💸']
*/

let arr5 = ["", "", ""];
let result5 = arr5.fill("💸");
console.log(result5); // ['💸', '💸', '💸']

// 6. todo esta ok?
["✅", "✅", "✖️", "✅"].every((n) => n == "✅");

/*
    Método every: Verifica si todos los elementos en el array pasan la prueba 
    implementada por la función proporcionada. Devuelve true si la función de prueba devuelve 
    true para todos los elementos, false en caso contrario.
    Devuelve: false (porque no todos los elementos son '✅')
*/

let arr6 = ["✅", "✅", "✖️", "✅"];
let result6 = arr6.every((n) => n == "✅");
console.log(result6); // false

// 7. hay algún error?
["✅", "✅", "✖️", "✅"].some((n) => n == "✖️");

/*
    Método some: Verifica si al menos un elemento en el array pasa la prueba implementada por la función 
    proporcionada. Devuelve true si la función de prueba devuelve true para al menos un elemento, 
    false en caso contrario.
    Devuelve: true (porque al menos uno de los elementos es '✖️')
*/

let arr7 = ["✅", "✅", "✖️", "✅"];
let result7 = arr7.some((n) => n == "✖️");
console.log(result7); // true

// 8. combina dos array en uno

let arr8 = [1, 2];
let arr8_1 = [3, 4];
let result8 = arr8.concat(arr8_1);
console.log(result8); // [1, 2, 3, 4]

// 9. Une todos los elementos de un array en una cadena.

let arr9 = ["Fire", "Water", "Earth"];
let result9 = arr9.join(" & ");
console.log(result9); // "Fire & Water & Earth"

// 10. Devuelve una copia superficial de una porción del array en un nuevo array.

let arr10 = [1, 2, 3, 4, 5];
let result10 = arr10.slice(1, 3);
console.log(result10); // [2, 3]

// 11. Cambia el contenido de un array eliminando, reemplazando o agregando elementos.

let arr11 = [1, 2, 3, 4];
arr11.splice(1, 2, "a", "b"); // elimina 2 elementos a partir del índice 1 y añade 'a' y 'b'
console.log(arr11); // [1, 'a', 'b', 4]

// 12. Invierte el orden de los elementos de un array.

let arr12 = [1, 2, 3];
arr12.reverse();
console.log(arr12); // [3, 2, 1]

// 13. Ordena los elementos de un array.

let arr13 = [4, 2, 5, 1, 3];
arr13.sort((a, b) => a - b); // Ordena de menor a mayor
console.log(arr13); // [1, 2, 3, 4, 5]

// 14. Aplica una función a un acumulador y cada valor del array para reducirlo a un solo valor.

let arr14 = [1, 2, 3, 4];
let result14 = arr14.reduce((acc, curr) => acc + curr, 0);
console.log(result14); // 10

// 15. Similar a reduce, pero trabaja de derecha a izquierda.

let arr15 = [1, 2, 3, 4];
let result15 = arr15.reduceRight((acc, curr) => acc + curr, 0);
console.log(result15); // 10

// 16. Ejecuta una función para cada elemento del array.

let arr16 = [1, 2, 3];
arr16.forEach((n) => console.log(n * 2));
// Output: 2, 4, 6

// 17. Aplana un array de arrays en un solo array.

let arr17 = [1, [2, [3, [4]]]];
let result17 = arr17.flat(2); // Nivel de profundidad de aplanamiento
console.log(result17); // [1, 2, 3, [4]]

// 18. Primero mapea cada elemento usando una función, luego aplana el resultado en un nuevo array.

let arr18 = [1, 2, 3];
let result18 = arr18.flatMap((n) => [n, n * 2]);
console.log(result18); // [1, 2, 2, 4, 3, 6]

// 19. Determina si un array incluye un determinado elemento.

let arr19 = [1, 2, 3];
let result19 = arr19.includes(2);
console.log(result19); // true

// 20. Devuelve el primer índice en el que se puede encontrar un elemento.

let arr20 = ["a", "b", "c"];
let result20 = arr20.indexOf("b");
console.log(result20); // 1

// 21. Crea una nueva instancia de array a partir de un objeto iterable.

let str21 = "123";
let result21 = Array.from(str);
console.log(result21); // ['1', '2', '3']

// 22. Determina si el valor pasado es un array.

let arr = [1, 2, 3];
let result = Array.isArray(arr);
console.log(result); // true

// 23. Copia una parte del array a otra ubicación dentro del mismo array, sin cambiar su tamaño.

let arr23 = [1, 2, 3, 4, 5];
arr23.copyWithin(0, 3, 4);
console.log(arr23); // [4, 2, 3, 4, 5]

// 24. replace reemplazar partes de una cadena de texto.

let str2 = "Hola mundo";
let nuevoStr = str2.replace("mundo", "universo");

console.log(nuevoStr); // "Hola universo"

let str = "Hola mundo, mundo";
let nuevoStr2 = str.replace(/mundo/g, "universo");

console.log(nuevoStr); // "Hola universo, universo"

let str3 = "Hola mundo";
let nuevoStr3 = str3.replace(/mundo/, function (match) {
  return match.toUpperCase();
});

console.log(nuevoStr); // "Hola MUNDO"
