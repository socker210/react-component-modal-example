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

  return (
    <>
      <Fade
        appear
        in={open}
        timeout={150}
        onEnter={(node) => {
          const transition = node.style.transition

          console.log(transition)
        }}
      >
        <Content />
      </Fade>
      <button onClick={() => setOpen(!open)}>{open ? 'Hide' : 'Show'}</button>
    </>
  )
}

export default ExampleFade
