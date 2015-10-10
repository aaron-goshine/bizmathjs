
describe("Bizmathjs-discount", function() {

  it("discount value ", function() {
    expect(Bizmath.discountValue(100, 80)).toEqual(80);
  });

  it("discounted price ", function() {
    expect(Bizmath.discountPrice(100,80)).toEqual(20);
  });

});
