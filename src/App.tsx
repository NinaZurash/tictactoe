import Board from './components/board'

export default function App() {
  return (
    <div className="min-h-screen flex justify-center flex-col items-center">
      <Board dimension={3} />
    </div>
  )
}
