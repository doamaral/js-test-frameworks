const _ = require('lodash')
class Calculator {
  constructor () {
    this._type = _.sample(['Scientific', 'Simple', 'Developer', 'Date'])
    // console.log(`Calculator ${this.type} was created`);
  }

  get type () {
    return 'calc_type: ' + this._type
  }

  add (numberOne, numberTwo) {
    return numberOne + numberTwo
  }
}

module.exports = Calculator
