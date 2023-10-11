export const getWinningCombinations = (dimension: number): number[][] => {
  const combinations: number[][] = Array.from(
    { length: dimension * 2 + 2 },
    () => [],
  );

  for (let i = 0; i < dimension; i++) {
    // get diagonal
    combinations[0].push(i * dimension + i);
    combinations[1].push(dimension - 1 + i * (dimension - 1));

    for (let j = 0; j < dimension; j++) {
      // get rows
      combinations[i + 2].push(i * dimension + j);

      //get collumns
      combinations[i + dimension + 2].push(dimension * j + i);
    }
  }

  return combinations;
};
