import { Button } from "./ui/button";

interface SquareProps {
  value?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  dimension: number;
}

export default function Square({
  value = "X",
  onClick,
  dimension,
}: SquareProps) {
  const textColor = value === "X" ? "text-blue-500" : "text-red-500";
  const width = `${288 / dimension}px`;
  return (
    <Button
      onClick={onClick}
      className={`${textColor} w-60 h-60 rounded-md w select-none px-4 py-3 shadow-sm border border-gray-50 font-medium text-3xl`}
      style={{ width: width, height: width }}
    >
      {value}
    </Button>
  );
}
