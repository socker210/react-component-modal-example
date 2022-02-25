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

    const chainedFunction = createChainedFunction(func1, func2, func3)

    chainedFunction(2, 2)

    expect(sum).toBe(12)
  })
})
