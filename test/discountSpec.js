/* global it expect describe */

describe('Bizmathjs-discount', function () {
  var Discount = require('../src/Discount.js');
  it('discount value ', function () {
    expect(Discount.getValue(100, 80)).toEqual(80);
  });

  it('discounted price ', function () {
    expect(Discount.getPrice(100, 80)).toEqual(20);
  });
});
