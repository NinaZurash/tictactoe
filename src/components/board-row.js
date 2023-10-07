import React from 'react'
import Square from './square'

export default function BoardRow({ rowValues }) {
  return (
    <div className="board-row">
      <Square value={rowValues[0]} />
      <Square value={rowValues[1]} />
      <Square value={rowValues[2]} />
    </div>
  )
}
