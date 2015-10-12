
describe("Bizmathjs-payroll", function() {
  var Payroll = require('../src/Payroll.js');
  it("pay base on hourly wages", function() {
    expect(Payroll.byHour(40, 45, 15, 65)).toEqual(2775);
  });

  it("pay base on units ", function() {
    expect(Payroll.byUnit(15,185)).toEqual(2775);
  });

  it("pay base on commision", function() {
    expect(Payroll.byCommission (100,85)).toEqual(85);
  });

});
