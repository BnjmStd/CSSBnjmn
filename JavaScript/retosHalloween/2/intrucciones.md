en una lucha epica entre muertos vivientes y humanos, ambos bandos tienen un alista de combatiented con poderes de ataque específico.

La batalla se desarrolla en rondas, y cada ronda enfrenta a cada combatiente de su bando

el bando con mayor poder de ataque gana la ronda, y su poder se suma al siguiente combatiente de su equipo

en caso de empate, ambos combatientes caen y no afecta a la próxima ronda.

dadas dos cadenas de texto zombies y humans, donde cada digito del 1 al 9 representa el poder de ataque de un combatiente, determina quien queda al final y con cuanto poder de ataque.

!importante: Las dos cadenas siempre tendrán la misma longitud

La salida es una cadena de texto que representa el resultado final de la batalla

- Si queda un zombie, devuelve su poder seguido de "z", por ejemplo "3z"

- si queda un humans, devuelve su poder seguido de "h" por ejemplo "2h"

- si hay un empate y ninguno queda con poder al final, devuelve "x"

aquí ejemplo

const zombies = "242"
const humans = "334"

const result = battleHorde(zombie, humans);
// primera ronda: zombie 2 vs humans 3 => humans win
// segunda ronda: zombie 4 vs humans + 1 => empate
// tercera ronda: zombie 2 vs humans 4 => humano win

result: 2h

"444"
"282"

=> 1° zombie 4 humans 2 => zombie win

=> 2° zombie 4 + 2 humans 8 => humano win

=> zombie 4 humsn 2 => empate

result x
