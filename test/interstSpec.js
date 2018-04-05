/* global it expect describe */
var interest = require('../src/interest');
var assert = require('assert');

describe('Bizmathjs interest', function () {
  var interestAmount = 482;
  var cost = 4000;
  var timeInYear = 1.5;
  var ratePercentage = 8.03;

  it('simple interest', function () {
    assert.equal(typeof interest.simple, 'object');
  });

  it('simple interest rate', function () {
    assert.equal(typeof interest.simple.rate, 'function',
      'simple interest rate should be a function');
    assert.equal(interest.simple.rate(interestAmount, cost, timeInYear), ratePercentage,
      'should calculate simple interest');
  });

  it('simple interest interest', function () {
    assert.equal(typeof interest.simple.interest, 'function');
    assert.equal(interest.simple.interest(ratePercentage, cost, timeInYear), interestAmount,
      'should calculate the interest');
  });

  it('simple interest cost', function () {
    assert.equal(typeof interest.simple.cost, 'function');
  });

  it('compound interest');
  it('compound interest');
});
