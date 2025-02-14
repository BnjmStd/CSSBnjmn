/*

Parte 1: Creación y Extracción de Fechas
Crea una nueva instancia de Date para representar 
tu cumpleaños (por ejemplo, const miCumpleaños = new Date(año, mes, día)).

Extrae y muestra en consola:

El día de la semana en que naciste (usa getDay()).
El día del mes (usa getDate()).
El mes (usa getMonth() y recuerda que los meses van de 0 a 11).
El año (usa getFullYear()).
Muestra la fecha completa en un formato legible (usa toDateString()).

*/

const dayNames = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];

const myBirthday = new Date(1999, 7, 26)

console.log(`El día de la semana en que naciste: ${myBirthday.getDay()}`)
console.log(`El día del mes ${myBirthday.getDate()}`)
console.log(`El mes: ${myBirthday.getMonth()}`)
console.log(`Muestra la fecha: ${myBirthday.toDateString()}`)

// Obtener el día actual de la fecha de cumpleaños
const currentDay = myBirthday.getDate()

// Añadir 100 días
myBirthday.setDate(currentDay + 100)

const myBirthday2 = new Date(1999, 6, 26)

const currentDate = new Date()

myBirthday2.setFullYear(currentDate.getFullYear())

if (currentDate > myBirthday2) {
    myBirthday2.setFullYear(currentDate.getFullYear() + 1)
}

const leftDay = (myBirthday2 - currentDate)

console.log(Math.ceil(leftDay / (1000 * 60 * 60 * 24)))

console.log(dayNames[currentDate.getDay()])


/*


Escribe una función diasEntreFechas(fecha1, fecha2) que reciba dos objetos 
Date y devuelva el número de días completos entre ambas fechas.
Prueba la función con fechas de eventos importantes (por ejemplo, 
días entre Año Nuevo y tu cumpleaños).

*/

const diasEntreFechas = (fecha1, fecha2) => {
    
    const diferenciaMilisegundos = Math.abs(fecha2 - fecha1);

    const diferenciaDias = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

    return diferenciaDias;

}

console.log(diasEntreFechas(new Date(2025, 0, 1), new Date(2025, 6, 26)))