import { useState } from 'react'
import BoardRow from './board-row'

export default function Board() {
  const [squares, setSquares] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ])

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-y-indigo-700">
        <BoardRow rowValues={squares[0]} />
        <BoardRow rowValues={squares[1]} />
        <BoardRow rowValues={squares[2]} />
      </div>
    </div>
  )
}
