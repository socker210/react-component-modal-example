import { ReactElement } from 'react'
import Transition, { TransitionProps } from '../components/Transition'

type FadeProps = TransitionProps & {
  children: ReactElement
}

// TODO
const Fade = ({ children, ...props }: FadeProps) => {
  return null
}

export default Fade
