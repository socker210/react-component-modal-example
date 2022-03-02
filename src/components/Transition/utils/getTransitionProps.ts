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
  duration,
  easing,
  delay,
}: GetTransitionPropsParams): GetTransitionPropsReturn {
  const extract = (key: 'enter' | 'exit'): TransitionPropsItem => {
    return {
      duration: typeof duration === 'number' ? duration : duration?.[key],
      easing: typeof easing === 'string' ? easing : easing?.[key],
      delay: typeof delay === 'number' ? delay : delay?.[key],
    }
  }

  return {
    enter: extract('enter'),
    exit: extract('exit'),
  }
}
