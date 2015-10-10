describe("Bizmathjs-markup", function() {

  it("does Bizmath exist", function() {
    expect(!Bizmath).toEqual(false);
  });

  it("percent markup base on cost", function() {
    expect(Bizmath.percentMarkupBaseOnCost(100,20)).toEqual(0.2);
  });

  it("markup by percentage", function() {
    expect(Bizmath.markupByPercent(100,20)).toEqual(120);
  });

it("percent markup base on cost", function() {
    expect(Bizmath.markupByUnits(100,20)).toEqual(120);
  });


});
