interface SquareProps {
  value?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Square({ value = 'X', onClick }: SquareProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-3 font-medium bg-blue-50 hover:bg-blue-100 text-blue-500 text-3xl w-20 h-20"
    >
      {value}
    </button>
  )
}
