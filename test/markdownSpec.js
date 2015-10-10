
describe("Bizmathjs-markdown", function() {

  it("percent markdown base on cost", function() {
    expect(Bizmath.markdown(100, 80)).toEqual(20);
  });

  it("markdown percentage", function() {
    expect(Bizmath.markdownPercent(100,80)).toEqual(20);
  });

  it("markdown by percentage", function() {
    expect(Bizmath.markdownByPercent(100,20)).toEqual(80);
  });

});
