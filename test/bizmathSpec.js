/* global it expect describe */
var assert = require('assert');
var Bizmath = require('../index');

describe('Bizmathjs', function () {
  it('does Bizmath exist', function () {
    assert.equal(typeof Bizmath, 'object');
  });

  it('Bizmath has properties', function () {
  var methodNames = [
    'interest',
    'payroll',
    'discount',
    'markdown',
    'markup'];
  methodNames.forEach(function (name) {
    assert.equal(typeof Bizmath[name], 'object');
  });
  });
});
