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
  }
  return (
    <div>
      {Array.from({ length: dimension }, (_, rowIndex) => (
        <div key={rowIndex} className="flex">
          {Array.from({ length: dimension }, (_, colIndex) => {
            const squareIndex = rowIndex * dimension + colIndex
            return (
              <Square
                key={squareIndex}
                value={values[squareIndex]}
                onClick={() => {
                  handleClick(squareIndex)
                }}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}
