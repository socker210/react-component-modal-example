import { TransitionProps, TransitionPhase } from '../types'

type TransitionPropsItem = {
  timeout?: number
  easing?: string
  delay?: number
}

type GetTransitionPropsParams = {
  timeout: TransitionProps['timeout']
  easing: TransitionProps['easing']
  delay: TransitionProps['delay']
  property: keyof TransitionPhase
}

export default function getTransitionProps({
  timeout,
  easing,
  delay,
  property,
}: GetTransitionPropsParams): TransitionPropsItem {
  return {
    timeout: typeof timeout === 'number' ? timeout : timeout?.[property],
    easing: typeof easing === 'string' ? easing : easing?.[property],
    delay: typeof delay === 'number' ? delay : delay?.[property],
  }
}
