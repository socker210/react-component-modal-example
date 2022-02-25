import styled from '@emotion/styled'
import Fade from './Fade'

const Root = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
`

type BackdropProps = {
  open: boolean
  onClick: () => void
}

const Backdrop = ({ open, onClick }: BackdropProps) => {
  return (
    <Fade appear unmountOnExit in={open} timeout={150}>
      <Root onClick={onClick} />
    </Fade>
  )
}

export default Backdrop
