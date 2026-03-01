// ECMAScript 2024
// agrupar datos de un array en un objeto segun una clave

/*
    const numbers = [1, 2, 3, 4, 5]

    let group = {}

    numbers.forEach(number => {
        let key = 'par'
        if (number % 2 !== 0) {
            key = 'impar'
        }
        group[key].push(number)
    })
*/

// EJEMPLO
Object.groupBy(numbers, (number) => {
  if (number % 2 === 0) return "par";
  return "impar";
});

// EJEMPLO
const avengers = [
  {
    name: "Iron Man",
    power: "Genius-level intellect, powered armor suit",
    strength: 85,
    planet: "Earth",
    alive: true,
  },
  {
    name: "Thor",
    power: "God of Thunder, superhuman strength, Mjölnir",
    strength: 100,
    planet: "Asgard",
    alive: true,
  },
  {
    name: "Black Widow",
    power: "Expert in hand-to-hand combat, master spy",
    strength: 70,
    planet: "Earth",
    alive: false,
  },
  {
    name: "Captain America",
    power: "Super-soldier serum, peak human strength, indestructible shield",
    strength: 90,
    planet: "Earth",
    alive: true,
  },
  {
    name: "Hulk",
    power: "Superhuman strength, durability, and healing factor",
    strength: 100,
    planet: "Earth",
    alive: true,
  },
];

Object.groupBy(avengers, (hero) => hero.planet);

// EJEMPLO
Object.groupBy(avengers, (hero) => {
  if (hero.planet === "Earth") return "terricola";
  return "extraterrestre";
});

// EJEMPLO
Object.groupBy(avengers, (hero) => `alive:${hero.alive}`);

// EJEMPLO
// tipo de datos symbol
const HUMAN_LEVEL_POWER = Symbol();
const SUPERHUMAN_LEVEL_POWER = Symbol();
const GOD_LEVEL_POWER = Symbol();

const groupByPower = Object.groupBy(avengers, (hero) => {
  if (hero.strength > 100) return GOD_LEVEL_POWER;
  if (hero.strength > 70) return SUPERHUMAN_LEVEL_POWER;
  return HUMAN_LEVEL_POWER;
});

groupByPower[HUMAN_LEVEL_POWER];

// EJEMPLO
const grouped = Map.groupBy(avengers, (hero) => hero.planet);
grouped.get("Earth");
