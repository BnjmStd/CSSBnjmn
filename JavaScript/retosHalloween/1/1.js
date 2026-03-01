function createMagicPotion(potions, goal) {
  const seen = {};

  for (let i = 0; i < potions.length; i++) {
    const current = potions[i];
    const difference = goal - current;

    if (seen[difference] !== undefined) {
      console.log([seen[difference], i]);
      return [seen[difference], i];
    }

    seen[current] = i;
  }

  return undefined;
}

const potions = [4, 5, 6, 2];
const goal = 5;

createMagicPotion(potions, goal);

/* map => mejor solución el map más optimo */

function createMagicPotion2(potions, goal) {
  const seen = new Map();

  for (let i = 0; i < potions.length; i++) {
    const current = potions[i];
    const difference = goal - current;

    if (seen.has(difference)) {
      return [seen.get(difference), i];
    }

    seen.set(current, i);
  }

  return undefined;
}
