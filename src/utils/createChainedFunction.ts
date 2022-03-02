const noop = () => undefined

export default function createChainedFunction<Args extends unknown[], This>(
  ...funcs: Array<((this: This, ...args: Args) => void) | null | undefined>
): (this: This, ...args: Args) => void {
  const chainedFunc = funcs.reduce(
    (chainedFunc: (this: This, ...args: Args) => void, func) => {
      if (!func) {
        return chainedFunc
      }

      return function nextChainedFunc(...args) {
        chainedFunc.apply(this, args)
        func.apply(this, args)
      }
    },
    noop
  )

  return chainedFunc
}
