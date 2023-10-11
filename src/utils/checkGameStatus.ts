import { GameStatus } from "@/App";

export const checkGameStatus = (
  combinations: number[][],
  values: string[],
): GameStatus => {
  const filteredX = values.reduce((accumulator: number[], value, index) => {
    if (value === "X") {
      accumulator.push(index);
    }
    return accumulator;
  }, []);

  const filtered0 = values.reduce((accumulator: number[], value, index) => {
    if (value === "0") {
      accumulator.push(index);
    }
    return accumulator;
  }, []);

  let result: GameStatus = "playing";

  for (let i = 0; i < combinations.length; i++) {
    if (combinations[i].every((element) => filtered0.includes(element))) {
      result = "0";
      break;
    } else if (
      combinations[i].every((element) => filteredX.includes(element))
    ) {
      result = "X";
      break;
    } else if (!values.includes("")) {
      result = "draw";
      break;
    }
  }

  return result;
};
