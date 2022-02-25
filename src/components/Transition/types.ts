import { CSSProperties } from 'react'
import {
  TransitionActions as _TransitionActions,
  TransitionProps as _TransitionProps,
  TransitionStatus as _TransitionStatus,
  EnterHandler as _EnterHandler,
  ExitHandler as _ExitHandler,
  EndHandler as _EndHandler,
  UNMOUNTED,
} from 'react-transition-group/Transition'

export type TransitionEasing = string | { enter?: string; exit?: string }

export type TransitionDelay = number | { enter?: number; exit?: number }

export type TransitionStatus = Exclude<_TransitionStatus, typeof UNMOUNTED>

export type TransitionStyles = Partial<Record<TransitionStatus, CSSProperties>>

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
