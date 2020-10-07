const Calculator = require('../../../src/calculator')

describe('Test using Jest', function () {
  const calc = new Calculator()
  it('test sum 1 + 2', function () {
    expect(calc.add(1, 2)).toBe(3)
  })
})
