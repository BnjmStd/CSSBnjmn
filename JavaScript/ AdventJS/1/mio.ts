const findFirstRepeatedId = ({ id }: { id: number[] }): number => {
  const uniqueId = new Set<number>();

  for (let element of id) {
    if (uniqueId.has(element)) {
      return element;
    }
    uniqueId.add(element);
  }

  return -1;
};
const resp = findFirstRepeatedId({
  id: [2, 1, 1, 3, 3, 6, 7],
});

console.log(resp);
