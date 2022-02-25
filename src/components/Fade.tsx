import { useMemo, cloneElement, ReactElement } from 'react'
import Transition, {
  reflow,
  createTransition,
  getTransitionProps,
  TransitionProps,
  EnterHandler,
  ExitHandler,
  EndHandler,
} from '../components/Transition'
import createChainedFunction from '../utils/createChainedFunction'

type FadeProps = TransitionProps & {
  children: ReactElement
}

const Fade = ({
  timeout,
  easing,
  delay,
  children,
  addEndListener,
  onEnter,
  onExit,
  ...props
}: FadeProps) => {
  const handleEnter = useMemo(() => {
    return createChainedFunction(onEnter, (node) => {
      reflow(node)

      const transitionProps = getTransitionProps({
        easing,
        delay,
        duration: timeout,
      })

      const enterTransition = createTransition({
        properties: 'opacity',
        easing: transitionProps.enter.easing ?? 'ease-in',
        duration: transitionProps.enter.duration ?? 300,
        delay: transitionProps.enter.delay ?? 0,
      })

      node.style.transition = enterTransition
    })
  }, [delay, easing, timeout, onEnter])

  const handleExit: ExitHandler<undefined> = (node) => {
    const transitionProps = getTransitionProps({
      easing,
      delay,
      duration: timeout,
    })

    const exitTransition = createTransition({
      properties: 'opacity',
      easing: transitionProps.exit.easing ?? 'ease-out',
      duration: transitionProps.exit.duration ?? 300,
      delay: transitionProps.enter.delay ?? 0,
    })

    node.style.transition = exitTransition

    if (onExit) {
      onExit(node)
    }
  }

  const handleAddEndListener: EndHandler<undefined> = (node, next) => {
    if (addEndListener) {
      addEndListener(node, next)
    }
  }

  return (
    <Transition
      {...props}
      timeout={timeout}
      onEnter={handleEnter}
      onExit={handleExit}
      addEndListener={handleAddEndListener}
    >
      {(state) => {
        return cloneElement(children, {
          style: {
            opacity: state === 'exited' || state === 'exiting' ? 0 : 1,
            visibility: state === 'exited' ? 'hidden' : 'visible',
            ...children.props.style,
          },
        })
      }}
    </Transition>
  )
}

export default Fade
