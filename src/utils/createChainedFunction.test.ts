import createChainedFunction from './createChainedFunction'

describe('createChainedFunction', () => {
  it('default', () => {
    let sum = 0

    const func1 = (num: number, num2: number) => {
      sum += num + num2
    }

    const func2 = (num: number, num2: number) => {
      sum += num + num2
    }

    const func3 = (num: number, num2: number) => {
      sum += num + num2
    }

    const chainedFunction = createChainedFunction(
      func1,
      func2,
      func3,
      undefined
    )

    chainedFunction(2, 2)

    expect(sum).toBe(12)
  })

  it('undefined first', () => {
    let sum = 0

    const func1 = undefined

    const func2 = (num: number) => {
      sum += num
    }

    const chainedFunction = createChainedFunction(func1, func2)

    chainedFunction(3)

    expect(sum).toBe(3)
  })
})
