/* global it expect describe */
var discount = require('../src/discount');
var assert = require('assert');

describe('Bizmathjs-discount', function () {
  it('discount value ', function () {
    assert.equal(discount.getValue(100, 80), 80);
  });

  it('discounted price ', function () {
    assert.equal(discount.getPrice(100, 80), 20);
  });
});
