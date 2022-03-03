import { CSSProperties } from 'react'
import {
  TransitionActions as _TransitionActions,
  TransitionStatus as _TransitionStatus,
  TransitionProps as _TransitionProps,
  EnterHandler as _EnterHandler,
  ExitHandler as _ExitHandler,
  EndHandler as _EndHandler,
} from 'react-transition-group/Transition'

export type TransitionPhase<V = string> = { enter: V; exit: V }

export type TransitionEasing = string | Partial<TransitionPhase<string>>

export type TransitionDelay = number | Partial<TransitionPhase<number>>

export type TransitionStyles = Partial<Record<_TransitionStatus, CSSProperties>>

export type TransitionProps = _TransitionActions &
  Partial<
    Pick<
      _TransitionProps,
      | 'in'
      | 'mountOnEnter'
      | 'unmountOnExit'
      | 'timeout'
      | 'addEndListener'
      | 'onEnter'
      | 'onEntering'
      | 'onEntered'
      | 'onExit'
      | 'onExiting'
      | 'onExited'
    >
  > & {
    easing?: TransitionEasing
    delay?: TransitionDelay
  }

export type {
  _EnterHandler as EnterHandler,
  _ExitHandler as ExitHandler,
  _EndHandler as EndHandler,
}
