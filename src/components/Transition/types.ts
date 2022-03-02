import { CSSProperties } from 'react'
import {
  TransitionActions as _TransitionActions,
  TransitionStatus as _TransitionStatus,
  TransitionProps as _TransitionProps,
  EnterHandler as _EnterHandler,
  ExitHandler as _ExitHandler,
  EndHandler as _EndHandler,
  UNMOUNTED,
} from 'react-transition-group/Transition'

export type TransitionPhase<V> = V | { enter: V; exit: V }

export type TransitionEasing = Partial<TransitionPhase<string>>

export type TransitionDelay = Partial<TransitionPhase<number>>

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
