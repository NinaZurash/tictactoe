import Board from './components/board'

export default function App() {
  return (
    <div className="min-h-screen flex justify-center flex-col  gap-8 items-center">
      <h1 className="text-4xl  font-medium">TicTacToe</h1>
      <Board dimension={3} />
    </div>
  )
}
