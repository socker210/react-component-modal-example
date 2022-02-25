const noop = () => undefined

export default function createChainedFunction<Args extends unknown[], This>(
  ...funcs: Array<((this: This, ...args: Args) => void) | null | undefined>
): (this: This, ...args: Args) => void {
  // TODO: null | undefined를 먼저 filtering하기
  // 그리고 onEnter와 (state) => ... 해당 부분 transition설정할 때 어떻게 서로 보이는지 그리고 어떤게 먼저 실행되는지 확인해보기

  const chainedFunc = funcs.reduce((func, chainedFunc) => {
    if (!chainedFunc) {
      return noop
    }

    if (!func) {
      return chainedFunc
    }

    return function nextChainedFunc(...args) {
      chainedFunc.apply(this, args)
      func.apply(this, args)
    }
  }, null)

  return chainedFunc as (this: This, ...args: Args) => void
}
