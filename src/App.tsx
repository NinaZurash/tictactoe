import Confetti from "react-confetti";
import Board from "./components/board";
import { ChangeEvent, useState } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import DimensionPickerPopOver from "./components/dimension-picker";

export type GameStatus = "X" | "0" | "draw" | "playing";

export default function App() {
  const [gameStatus, setGameStatus] = useState<GameStatus>("playing");
  const [boardDimensions, setBoardDimensions] = useState(3);

  const handleDimensions = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= 20) setBoardDimensions(value);
  };

  const handleGameUpdateStatus = (value: GameStatus) => {
    setGameStatus(value);
  };

  const visible = gameStatus === "playing" ? "invisible" : "visible";
  console.log("hi");
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen flex justify-center flex-col  gap-8 items-center">
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <ModeToggle />
        </div>
        <DimensionPickerPopOver
          boardDimensions={boardDimensions}
          handleDimensions={handleDimensions}
        />
        {["X", "0"].includes(gameStatus) && <Confetti />}
        <h1 className="text-4xl font-serif font-medium">Tic-Tac-Toe</h1>
        <div className={visible}>
          {gameStatus === "draw" ? "It's a draw" : ` Winner is ${gameStatus}!`}
        </div>
        <Board
          dimension={boardDimensions}
          winner={gameStatus}
          updateGameStatus={handleGameUpdateStatus}
        />
      </div>
    </ThemeProvider>
  );
}
