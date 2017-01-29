/* global it expect describe */
describe('Bizmathjs-markup', function () {
  var Markup = require('../src/Markup.js');
  it('Markup value', function () {
    expect(Markup.byValue(100, 20)).toEqual(120);
  });

  it('markup by percentage', function () {
    expect(Markup.byPercentage(100, 20)).toEqual(120);
  });

  it('what was the markup', function () {
    expect(Markup.was(100, 120)).toEqual(20);
  });
});
