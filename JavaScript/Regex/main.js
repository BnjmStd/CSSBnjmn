/*
puedes hacer una validación
de una busqueda de un patron
reemplazar, limpiar, transformar texto
nos sirven para una forma más declarativa
*/

// aserciones son limites de algo que vamos a buscar, iniciar con finalizar con
// circunflejo (caret) ^

const regex = /^a/; // inicio
const regex2 = /b$/; // final
const regex3 = /^b$/; // ambas
const text = "a";

// aserción de palabras
const regex4 = /Git\b/; // fin de palabra!
const msg1 = "me gusta git, no!";

// cuantificadores cuantas veces coincide un caracter!
const regex5 = /^a*$/; // c recursivo * puede ser nulo vacio

const regex6 = /^a+e+$/; // + por lo menos uno

// cuantificador ?
const regex7 = /^a+e?$/; // infinitas a pero puede venir e solo una vez

// cuantificador {1, 2} puede venir una vez 2 veces pero no 0
const regex8 = /^pato1{1,2}?$/;

// 2 veces al infinito
const regex9 = /^pato1{2,}?$/;

// cuantificador codicioso
const regex10 = /^<beer>.*?<\/beer>$/g;
const text1 = "<beer>Corona</beer><beer>Heineken</beer><beer>sol</beer>";
console.log(text1.match(regex10));

// clases de caracteres un conjunto, una categoria!, cualquier letra numero, alfanumerico, espacios
// buscar todos los digitos
const regex11 = /^a\d+a$/;

// validar que no tenga numeros
const regex12 = /^\D+$/;

const regex13 = /^\d+\D+\d+$/;

// validar alfanumericos

const regex14 = /^[A-Za-z0-9_]$/;
const regex15 = /^\w+$/;

// espacios \s

// grupos y rangos!
const regex16 = /^cerveza|vino$/;

const regex17 = /^(\w\s)+(cerveza|vino)$/;
const text2 = "benja le gusta el agua";

const regex18 = /^[a-zA-Z]+$/;

// aserciones complejas condicionantes algo precede a una cosa un patron un rango jaja

// aserción anticipada
const regex19 = /Vino(=?\s\w+)/;
const text3 = "vinos blanco";

// quieor que algo empiece con pero no continue con
// aserción anticipada negativa
const regex20 = /Java\s(?!8|9)/;
const text4 = "";

// en emojs tambien funciona

if (regex11.test(text)) {
  console.log("correcto");
} else {
  console.error("Es incorrecto");
}
