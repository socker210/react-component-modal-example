import { useState } from 'react'
import styled from '@emotion/styled'
import Fade from '../components/Fade'

const Box = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
`

const Content = (props: Record<string, unknown>) => {
  return (
    <Box {...props}>
      <p>Color</p>
    </Box>
  )
}

const ExampleFade = () => {
  const [open, setOpen] = useState(true)
  const [timeout, setTimeout] = useState(150)

  return (
    <>
      <Fade appear in={open} timeout={timeout}>
        <Content />
      </Fade>
      <button onClick={() => setOpen(!open)}>{open ? 'Hide' : 'Show'}</button>
      <button
        onClick={() => {
          const nextTimeout = Math.floor(Math.random() * 1000)

          setTimeout(nextTimeout)
        }}
      >
        Change timeout : {timeout}
      </button>
    </>
  )
}

export default ExampleFade
