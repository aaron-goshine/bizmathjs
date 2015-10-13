
describe("bizmathjs-markdown", function() {
  var Markdown = require('../src/Markdown.js');
  it("percent markdown base on cost", function() {
    expect(Markdown.getValue(100, 80)).toEqual(20);
  });

  it("markdown percentage", function() {
    expect(Markdown.getPercentage(100,80)).toEqual(20);
  });

  it("markdown by percentage", function() {
    expect(Markdown.byPercentage(100,20)).toEqual(80);
  });

});
