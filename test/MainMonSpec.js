/**
 * Created by aaron.goshine on 9/10/2015.
 */

describe("bizmathjs", function() {

  it("does bizmath exist", function() {
    expect(!bizmath).toEqual(false);
  });

  it("percent markup base on cost", function() {
    expect(bizmath.percentMarkupBaseOnCost(100,20)).toEqual(0.2);
  });

  it("markup by percentage", function() {
    expect(bizmath.markupByPercent(100,20)).toEqual(120);
  });

it("percent markup base on cost", function() {
    expect(bizmath.markupByUnits(100,20)).toEqual(120);
  });


});
