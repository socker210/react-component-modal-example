import { useState } from 'react'
import styled from '@emotion/styled'
import Transition, { reflow } from './Transition'
import Backdrop from './Backdrop'

type DelayModalProps = {
  open: boolean
  onClose: () => void
}

const Root = styled.div`
  position: fixed;
  inset: 0;
`

const Container = styled.div`
  position: absolute;
  width: 20%;
  height: 100%;
  background-color: white;
  transform: translateX(-100%);
  opacity: 0;
`

const DelayModal = ({ open, onClose }: DelayModalProps) => {
  const [exited, setExited] = useState(true)

  if (!open && exited) {
    return null
  }

  return (
    <Root>
      <Backdrop open={open} onClick={onClose} />
      <Transition
        appear
        in={open}
        timeout={200}
        onEnter={(node: HTMLElement) => {
          reflow(node)

          setExited(false)

          node.style.transition = 'transform 225ms cubic-bezier(0,0,.2,1) 300ms'
        }}
        onExit={(node: HTMLElement) => {
          node.style.transition =
            'transform 200ms ease-out 0ms, opacity 200ms linear 0ms'
        }}
        onExited={() => {
          setExited(true)
        }}
      >
        {(state) => {
          return (
            <Container
              style={{
                transform: `translateX(${
                  state === 'entering' || state === 'entered' ? '0%' : '-100%'
                })`,
                opacity: state === 'entering' || state === 'entered' ? 1 : 0,
              }}
            />
          )
        }}
      </Transition>
    </Root>
  )
}

export default DelayModal
