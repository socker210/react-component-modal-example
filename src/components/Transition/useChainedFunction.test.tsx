import { useState, useEffect, useRef } from 'react'
import { render } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import useChainedFunction from './useChainedFunction'

describe('useChainedFunction', () => {
  it('w/o callback', () => {
    let sum = 0

    const func1 = (num: number): void => {
      sum += num
    }

    const func2 = (num: number): void => {
      sum += num
    }

    const { result } = renderHook(() =>
      useChainedFunction(undefined, [func1, func2])
    )

    act(() => {
      result.current(3)
    })

    expect(sum).toBe(6)
  })

  it('w/ callback', () => {
    let sum = 0

    const func1 = (num: number): void => {
      sum += num
    }

    const func2 = (num: number): void => {
      sum += num
    }

    const { result } = renderHook(() =>
      useChainedFunction(
        (num) => {
          sum += num
        },
        [func1, func2]
      )
    )

    act(() => {
      result.current(3)
    })

    expect(sum).toBe(9)
  })
})
