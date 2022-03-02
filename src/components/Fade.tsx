import { cloneElement, CSSProperties, ReactElement } from 'react'
import Transition, { TransitionStyles, TransitionProps } from './Transition'
import reflow from './Transition/utils/reflow'
import createTransition from './Transition/utils/createTransition'
import getTransitionProps from './Transition/utils/getTransitionProps'
import useChainedFunction from './Transition/useChainedFunction'

// TODO: theming ...

type FadeProps = TransitionProps & {
  children: ReactElement
}

const defaultStyles: CSSProperties = {
  opacity: 0,
  visibility: 'hidden',
}

const transitionStyles: TransitionStyles = {
  entering: {
    opacity: 1,
    visibility: 'visible',
  },
  entered: {
    opacity: 1,
    visibility: 'visible',
  },
}

const Fade = ({
  timeout,
  easing,
  delay,
  children,
  onEnter,
  onExit,
  addEndListener,
  ...props
}: FadeProps) => {
  const handleEnter = useChainedFunction(
    (node) => {
      reflow(node)
    },
    [onEnter],
    [timeout, easing, delay]
  )

  const handleAddEndListener = useChainedFunction(undefined, [addEndListener])

  return (
    <Transition {...props} addEndListener={handleAddEndListener}>
      {(state) => {
        return cloneElement(children, {
          style: {
            ...defaultStyles,
            ...transitionStyles[state],
            ...children.props.styles,
          },
        })
      }}
    </Transition>
  )
}

export default Fade
