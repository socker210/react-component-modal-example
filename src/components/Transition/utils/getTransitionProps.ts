import { TransitionProps } from '../types'

type TransitionPropsItem = {
  easing?: string
  delay?: number
  duration?: number
}

type GetTransitionPropsParams = {
  duration: TransitionProps['timeout']
  easing: TransitionProps['easing']
  delay: TransitionProps['delay']
}

type GetTransitionPropsReturn = {
  enter: TransitionPropsItem
  exit: TransitionPropsItem
}

export default function getTransitionProps({
  easing,
  duration,
  delay,
}: GetTransitionPropsParams): GetTransitionPropsReturn {
  return {
    enter: {
      easing: typeof easing === 'string' ? easing : easing?.enter,
      duration: typeof duration === 'number' ? duration : duration?.enter,
      delay: typeof delay === 'number' ? delay : delay?.enter,
    },
    exit: {
      easing: typeof easing === 'string' ? easing : easing?.exit,
      duration: typeof duration === 'number' ? duration : duration?.exit,
      delay: typeof delay === 'number' ? delay : delay?.exit,
    },
  }
}
