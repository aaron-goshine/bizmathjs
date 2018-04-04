/* global it expect describe */
var interest = require('../src/interest');
var assert = require('assert');

describe('Bizmathjs interest', function () {
  it('simple interest', function () {
    assert.equal(typeof interest.simple, 'object');
  });

  it('simple interest rate', function () {
    assert.equal(typeof interest.simple.rate, 'function');
  });

  it('simple interest interest', function () {
    assert.equal(typeof interest.simple.interest, 'function');
  });

  it('simple interest cost', function () {
    assert.equal(typeof interest.simple.cost, 'function');
  });

  it('compound interest');
  it('compound interest');
});
