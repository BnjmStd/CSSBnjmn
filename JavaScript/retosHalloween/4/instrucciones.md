Una persona ha sido asesinada en la noche de halloween. Usando un hechizo, hemos conseguido escuchar su último susurro pero es muy debil y no nos permite identificar quien pudo ser el asesino.

La información que nos proporciona es:

whisper: cadena de textoq ue representa lo que la victima intento decir antes de morir

suspects: lista de cadenas que representa los nombres de todos los sospechosos.

Hay que tener que el susurro whisper tiene algunas reglas:

- cada ~ representa una letra incierta en el susurro
- cada posición del susurro es una posición del nombre del asesino

- la longitud del whisper no siempre representa la longitud completa del nombre, ya que la victima pudo haber muerto antes de terminar de decirlo.

- Pero si el último carácter, del susurro es una $ , entonces el nombre del asesino terminaba ahi.

Tu objetivo es descubrir quien pudo ser el asesino!:

debes devolver:

- si solo un nombre encaja en el patron de ese susurro, retorna ese nombre.

- si hay varias nombres que encajan, retorna todos los nombres separados por coma.

- si ningun nombre encaja, retorna una cadena vacia ""

Las mayúsculas y minúsculas de las letras no importan.

:::

const whisper = 'd~~~~~a'
const suspects = ['dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers']

findTheKiller(whisper, suspects)

:::
