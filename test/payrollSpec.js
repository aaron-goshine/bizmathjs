/* global it expect describe */
var assert = require('assert');
var Payroll = require('../src/payroll.js');

describe('Bizmathjs-payroll', function () {
  it('pay base on hourly wages', function () {
    assert.equal(Payroll.byHour(40, 45, 15, 65), 2775);
  });

  it('pay base on units ', function () {
    assert.equal(Payroll.byUnit(15, 185), 2775);
  });

  it('pay base on commision', function () {
    assert.equal(Payroll.byCommission(100, 85), 85);
  });
});
