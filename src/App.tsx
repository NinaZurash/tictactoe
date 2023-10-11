import Confetti from "react-confetti";
import Board from "./components/board";
import { useState } from "react";

export default function App() {
  const [winner, setWinner] = useState("");

  const handleGameFinished = (value: string) => {
    setWinner(value);
  };
  return (
    <div className="min-h-screen flex justify-center flex-col  gap-8 items-center">
      {winner && <Confetti />}

      <h1 className="text-4xl  font-medium">TicTacToe</h1>
      <Board dimension={3} onGameFinished={handleGameFinished} />
    </div>
  );
}
