/*
sin set, < >
[3,1,2,3,4,2,5]
1,2,3,4,5
*/

function prepareGifts(gifts: number[]): number[] {
  const numeritos = [];

  for (let numero of gifts) {
    if (!numeritos.includes(numero)) {
      numeritos.push(numero);
    }
  }

  return numeritos.sort((a, b) => a - b);
}

function prepareGifts2(gifts: number[]): number[] {
  const numeritos = new Set<number>(gifts);
  return Array.from(numeritos).sort((a, b) => a - b);
}

function prepareGifts3(gifts: number[]): number[] {

    const buffer: Record<number, number> = {};

    for (const num of gifts) {
        buffer[num] = num;
    }

    return Object.values(buffer)
}