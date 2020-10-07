const Calculator = require('../../src/calculator')

describe('Suite 1 - Test 1', function () {
  let calc

  beforeAll(function () {
    calc = new Calculator()
  })

  it('test sum 1 + 2', function () {
    expect(calc.add(1, 2)).toBe(3)
  })

  it('test sum 2 + 2', function () {
    expect(calc.add(2, 2)).toBe(4)
  })

  afterAll(function () {
    // afterAll hook
  })
})

describe('Suite 1 - Test 2', function () {
  let calc

  beforeAll(function () {
    calc = new Calculator()
  })

  it('test sum 1 + 2', function () {
    expect(calc.add(1, 2)).toBe(3)
  })

  it('test sum 2 + 2', function () {
    expect(calc.add(2, 2)).toBe(4)
  })

  afterAll(function () {
    // afterAll hook
  })
})
