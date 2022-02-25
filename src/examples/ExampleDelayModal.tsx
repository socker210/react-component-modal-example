import { useState } from 'react'
import DelayModal from '../components/DelayModal'

const ExampleDelayModal = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <DelayModal open={open} onClose={() => setOpen(false)} />
      <button onClick={() => setOpen(true)}>Open</button>
    </>
  )
}

export default ExampleDelayModal
