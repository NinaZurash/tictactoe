interface SquareProps {
  value?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Square({ value = 'X', onClick }: SquareProps) {
  const textColor = value === 'X' ? 'text-blue-500' : 'text-red-500'

  return (
    <button
      onClick={onClick}
      className={`${textColor} rounded-md select-none px-4 py-3 shadow-sm border border-gray-50 font-medium bg-gray-100   text-3xl w-24 h-24`}
    >
      {value}
    </button>
  )
}
