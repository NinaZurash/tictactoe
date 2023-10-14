import Confetti from "react-confetti";
import Board from "./components/board";
import { useState } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

export type GameStatus = "X" | "0" | "draw" | "playing";

export default function App() {
  const [gameStatus, setGameStatus] = useState<GameStatus>("playing");

  const handleGameUpdateStatus = (value: GameStatus) => {
    setGameStatus(value);
  };

  const visible = gameStatus === "playing" ? "invisible" : "visible";

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen flex justify-center flex-col  gap-8 items-center">
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <ModeToggle />
        </div>
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
    </ThemeProvider>
  );
}
