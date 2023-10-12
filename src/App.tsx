import Confetti from "react-confetti";
import Board from "./components/board";
import { useState } from "react";

export type GameStatus = "X" | "0" | "draw" | "playing";

export default function App() {
  const [gameStatus, setGameStatus] = useState<GameStatus>("playing");

  const handleGameUpdateStatus = (value: GameStatus) => {
    setGameStatus(value);
  };

  const visible = gameStatus === "playing" ? "invisible" : "visible";

  return (
    <div className="min-h-screen flex justify-center flex-col  gap-8 items-center">
      {["X", "0"].includes(gameStatus) && <Confetti />}
      <h1 className="text-4xl  font-medium">TicTacToe</h1>
      <div className={visible}>
        {gameStatus === "draw" ? "It's a draw" : ` Winner is ${gameStatus}!`}
      </div>
      <Board
        dimension={3}
        winner={gameStatus}
        updateGameStatus={handleGameUpdateStatus}
      />
    </div>
  );
}
