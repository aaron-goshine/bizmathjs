
describe("bizmathjs-markdown", function() {

  it("percent markdown base on cost", function() {
    expect(bizmath.markdown(100, 80)).toEqual(20);
  });

  it("markdown percentage", function() {
    expect(bizmath.markdownPercent(100,80)).toEqual(20);
  });

  it("markdown by percentage", function() {
    expect(bizmath.markdownByPercent(100,20)).toEqual(80);
  });

});
