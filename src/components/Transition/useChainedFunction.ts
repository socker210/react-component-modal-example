import { useRef, useEffect, useMemo } from 'react'
import createChainedFunction from '../../utils/createChainedFunction'

const useChainedFunction = <Args extends unknown[]>(
  callback: ((...args: Args) => void) | null | undefined,
  chainedFuncs: Array<((...args: Args) => void) | null | undefined> = [],
  deps: unknown[] = []
) => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  })

  return useMemo(() => {
    return createChainedFunction(callbackRef.current, ...chainedFuncs)
  }, [...deps, ...chainedFuncs])
}

export default useChainedFunction
