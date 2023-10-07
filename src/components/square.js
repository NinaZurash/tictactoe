import { Button } from '@mui/material'

export default function Square({ value }) {
  return (
    <>
      <Button className="w-16 h-16">{value}</Button>
    </>
  )
}
