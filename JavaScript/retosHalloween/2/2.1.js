const battleHorde = (zombies, humans) => {
  let z = 0,
    h = 0;

  for (let i = 0; i < zombies.length; i++) {
    z += Number(zombies[i]);
    h += Number(humans[i]);
  }

  const diff = Math.abs(z - h);

  if (diff === 0) return "x";

  const letter = h > z ? "h" : "z";

  return `${diff}${letter}`;
};

// Ejemplo de prueba
const zombies = "242";
const humans = "334";

const result = battleHorde(zombies, humans);
console.log(result); // Debería mostrar 'x'
