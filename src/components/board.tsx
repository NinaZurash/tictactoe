import { useState } from 'react'
import Square from './square'

interface BoardProps {
  dimension: number
}

export default function Board({ dimension }: BoardProps) {
  const [values, setValues] = useState(Array(dimension * dimension).fill(''))
  const [tictac, setTictac] = useState('X')

  const handleClick = (squareIndex: number) => {
    if (values[squareIndex] !== '') return
    setValues((prevValues) => {
      const newValues = [...prevValues]
      newValues[squareIndex] = tictac
      return newValues
    })
    setTictac(tictac === 'X' ? '0' : 'X')
    console.log(values)
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <div>
        {Array.from({ length: dimension }, (_, rowIndex) => (
          <div key={rowIndex} className="flex">
            {Array.from({ length: dimension }, (_, colIndex) => {
              const squareIndex = rowIndex * dimension + colIndex
              return (
                <Square
                  key={squareIndex}
                  value={values[squareIndex]}
                  onClick={() => handleClick(squareIndex)}
                />
              )
            })}
          </div>
        ))}
      </div>

      <button
        className="bg-gray-200 text-gray-600 hover:text-black transition-colors px-8 py-3 rounded-md shadow-md"
        onClick={() => setValues(Array(dimension * dimension).fill(''))}
      >
        Reset
      </button>
    </div>
  )
}
