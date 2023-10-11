import { useEffect, useState } from "react";
import Square from "./square";

interface BoardProps {
  dimension: number;
  onGameFinished: (value: string) => void;
}

const getWinningCombinations = (dimension: number): number[][] => {
  const combinations: number[][] = Array.from(
    { length: dimension * 2 + 1 },
    () => [],
  );

  for (let i = 0; i < dimension; i++) {
    // get diagonal
    combinations[0].push(i * dimension + i);

    for (let j = 0; j < dimension; j++) {
      // get rows
      combinations[i + 1].push(i * dimension + j);

      //get collumns
      combinations[i + dimension + 1].push(dimension * j + i);
    }
  }

  return combinations;
};

const checkIfWinning = (
  combinations: number[][],
  values: string[],
): boolean => {
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

  const equal = combinations.some((combArray) => {
    return (
      combArray.every((element) => filtered0.includes(element)) ||
      combArray.every((element) => filteredX.includes(element))
    );
  });
  return equal;
};

export default function Board({ dimension, onGameFinished }: BoardProps) {
  const [values, setValues] = useState(Array(dimension * dimension).fill(""));
  const [tictac, setTictac] = useState("X");
  const isGameFinished = checkIfWinning(
    getWinningCombinations(dimension),
    values,
  );
  useEffect(() => {
    isGameFinished && onGameFinished(tictac);
    !isGameFinished && setTictac(tictac === "X" ? "0" : "X");
  }, [values]);

  const handleClick = (squareIndex: number) => {
    if (values[squareIndex] !== "") return;
    setValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[squareIndex] = tictac;
      return newValues;
    });
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      {isGameFinished && <div>Winner is {tictac}!</div>}
      <div>
        {Array.from({ length: dimension }, (_, rowIndex) => (
          <div key={rowIndex} className="flex">
            {Array.from({ length: dimension }, (_, colIndex) => {
              const squareIndex = rowIndex * dimension + colIndex;
              return (
                <Square
                  key={squareIndex}
                  value={values[squareIndex]}
                  onClick={() => !isGameFinished && handleClick(squareIndex)}
                />
              );
            })}
          </div>
        ))}
      </div>

      <button
        className="bg-gray-200 text-gray-600 hover:text-black transition-colors px-8 py-3 rounded-md shadow-md"
        onClick={() => {
          setValues(Array(dimension * dimension).fill(""));
          onGameFinished("");
        }}
      >
        Reset
      </button>
    </div>
  );
}
