
describe("Bizmathjs-payroll", function() {

  it("pay base on hourly wages", function() {
    expect(Bizmath.payByHour(40, 45, 15, 65)).toEqual(2775);
  });

  it("pay base on units ", function() {
    expect(Bizmath.payByUnit(15,185)).toEqual(2775);
  });

  it("pay base on commision", function() {
    expect(Bizmath.payByCommission(100,85)).toEqual(85);
  });

});
