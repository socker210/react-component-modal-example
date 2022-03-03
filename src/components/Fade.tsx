import { cloneElement, CSSProperties, ReactElement } from 'react'
import useTheme from '../components/theme/useTheme'
import Transition, { TransitionStyles, TransitionProps } from './Transition'
import reflow from './Transition/utils/reflow'
import createTransition from './Transition/utils/createTransition'
import getTransitionProps from './Transition/utils/getTransitionProps'
import useChainedFunction from './Transition/useChainedFunction'

type FadeProps = TransitionProps & {
  children: ReactElement
}

const defaultStyles: CSSProperties = {
  opacity: 0,
}

const transitionStyles: TransitionStyles = {
  entering: {
    opacity: 1,
  },
  entered: {
    opacity: 1,
  },
}

const Fade = (props: FadeProps) => {
  const theme = useTheme()

  const {
    timeout = theme.transition.duration.standard,
    easing = theme.transition.easing.easeInOut,
    delay = 0,
    children,
    onEnter,
    onEntered,
    onExit,
    onExited,
    addEndListener,
    ...otherProps
  } = props

  const handleEnter = useChainedFunction(
    (node) => {
      reflow(node)

      const {
        timeout: enterTimeout = theme.transition.duration.standard,
        easing: enterEasing = theme.transition.easing.easeInOut,
        delay: enterDelay = 0,
      } = getTransitionProps({
        timeout,
        easing,
        delay,
        property: 'enter',
      })

      const enterTransition = createTransition({
        properties: 'opacity',
        duration: enterTimeout,
        easing: enterEasing,
        delay: enterDelay,
      })

      node.style.transition = enterTransition
    },
    [onEnter],
    [timeout, easing, delay]
  )

  const handleEntered = useChainedFunction(
    (node) => {
      node.style.transition = ''
    },
    [onEntered]
  )

  const handleExit = useChainedFunction(
    (node) => {
      const {
        timeout: exitTimeout = theme.transition.duration.standard,
        easing: exitEasing = theme.transition.easing.easeInOut,
        delay: exitDelay = 0,
      } = getTransitionProps({
        timeout,
        easing,
        delay,
        property: 'exit',
      })

      const exitTransition = createTransition({
        properties: 'opacity',
        duration: exitTimeout,
        easing: exitEasing,
        delay: exitDelay,
      })

      node.style.transition = exitTransition
    },
    [onExit],
    [timeout, easing, delay]
  )

  const handleExited = useChainedFunction(
    (node) => {
      node.style.transition = ''
    },
    [onExited]
  )

  const handleAddEndListener = useChainedFunction(undefined, [addEndListener])

  return (
    <Transition
      {...otherProps}
      timeout={timeout}
      onEnter={handleEnter}
      onEntered={handleEntered}
      onExit={handleExit}
      onExited={handleExited}
      addEndListener={handleAddEndListener}
    >
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
