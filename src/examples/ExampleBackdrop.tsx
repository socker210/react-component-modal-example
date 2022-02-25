import { useState } from 'react'
import Backdrop from '../components/Backdrop'

const ExampleBackdrop = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Backdrop
        open={open}
        onClick={() => {
          setOpen(false)
        }}
      />
      <button onClick={() => setOpen(true)}>Open</button>
    </>
  )
}

export default ExampleBackdrop
