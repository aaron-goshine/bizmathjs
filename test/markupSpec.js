/* global it expect describe */
var assert = require('assert');
var markup = require('../src/markup');

describe('Bizmathjs-markup', function () {
  it('Markup value', function () {
    assert.equal(markup.byValue(100, 20), 120);
  });

  it('markup by percentage', function () {
    assert.equal(markup.byPercentage(100, 20), 120);
  });

  it('what was the markup', function () {
    assert.equal(markup.was(100, 120), 20);
  });
});
