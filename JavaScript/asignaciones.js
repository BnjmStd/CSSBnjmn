// en js todos los valores  tienen una interpretación
// booleana cuando son evaluados dentro de un operador lógico

// valores falsy

const falsy = 0; // 0, false, '', null, undefined, NaN

const truthy = " todos los demás "; // true, ' ', Symbol(), [], {}, new Date()

const nullish = null; // & undefined

// operadores lógicos &&, ||, ??

// &&
// --> devuelve el primer valor falsy o el último truthy

1 && true && true && "";

// ||
// --> devuelve el primer valor truthy o el ultimo falsy
false || "" || false || " " || false;

// ?? nullish coalescing operator
// devuelve el primer valor NO nullish o el ultimo nullish

undefined ?? undefined ?? false ?? undefined ?? 0 ?? "" ?? true;

//  AHORA MÁS COSITAS

let a = 0; // cualquier cosa que sea falsy

// a =  a || 'default text'
a ||= "default text";

a &&= "default text";

a ??= "default text";

console.log(a);

// error comun

const DEFAULT_LIMIT = 10;

let limit = 0; // no tiene limite y quiero todos los resultados

limit = limit ?? DEFAULT_LIMIT;
limit ??= DEFAULT_LIMIT;

console.log(limit);
