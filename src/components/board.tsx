import { useEffect, useState } from "react";
import Square from "./square";
import type { GameStatus } from "@/App";
import { getWinningCombinations } from "@/utils/getWinningCombinations";
import { checkGameStatus } from "@/utils/checkGameStatus";
import { Button } from "./ui/button";

interface BoardProps {
  dimension: number;
  updateGameStatus: (value: GameStatus) => void;
  winner: GameStatus;
}

export default function Board({
  dimension,
  winner,
  updateGameStatus,
}: BoardProps) {
  const [values, setValues] = useState(Array(dimension * dimension).fill(""));
  const [player, setPlayer] = useState<GameStatus>("0");

  useEffect(() => {
    setValues(Array(dimension * dimension).fill(""));
  }, [dimension]);

  useEffect(() => {
    const gameStatus = checkGameStatus(
      getWinningCombinations(dimension),
      values,
    );
    updateGameStatus(gameStatus);
    gameStatus === "playing" && setPlayer(player === "X" ? "0" : "X");
  }, [values]);

  const handleClick = (squareIndex: number) => {
    if (values[squareIndex] !== "") return;
    setValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[squareIndex] = player;
      return newValues;
    });
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div>
        {Array.from({ length: dimension }, (_, rowIndex) => (
          <div key={rowIndex} className="flex">
            {Array.from({ length: dimension }, (_, colIndex) => {
              const squareIndex = rowIndex * dimension + colIndex;
              return (
                <Square
                  key={squareIndex}
                  value={values[squareIndex]}
                  onClick={() =>
                    winner === "playing" && handleClick(squareIndex)
                  }
                />
              );
            })}
          </div>
        ))}
      </div>

      <Button
        className="transition-colors px-8 py-3 dark:text-white border-gray-50 border"
        onClick={() => {
          setValues(Array(dimension * dimension).fill(""));
          updateGameStatus("playing");
          setPlayer("0");
        }}
      >
        Reset
      </Button>
    </div>
  );
}
