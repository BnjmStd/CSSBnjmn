const battleHorde = (zombies, humans) => {
  // Convertir cada carácter a entero
  const z = zombies.split("").map(Number);
  const h = humans.split("").map(Number);

  let zPoints = 0;
  let hPoints = 0;

  for (let i = 0; i < z.length; i++) {
    let difference = Math.abs(z[i] + zPoints - h[i] - hPoints);

    if (z[i] + zPoints > h[i] + hPoints) {
      // Zombies ganan esta ronda
      zPoints += difference;
      hPoints = 0; // Los puntos humanos se reinician
    } else if (z[i] + zPoints < h[i] + hPoints) {
      // Humanos ganan esta ronda
      hPoints += difference;
      zPoints = 0; // Los puntos zombies se reinician
    } else {
      // Empate, ambos puntajes se reinician
      zPoints = 0;
      hPoints = 0;
    }
  }

  // Resultado final según los puntos
  if (zPoints > hPoints) {
    return `${zPoints}z`;
  } else if (hPoints > zPoints) {
    return `${hPoints}h`;
  } else {
    return "x";
  }
};

// Ejemplo de prueba
const zombies = "242";
const humans = "334";

const result = battleHorde(zombies, humans);
console.log(result); // Debería mostrar 'x'
