/* global it expect describe */
var assert = require('assert');
var markdown = require('../src/markdown.js');

describe('bizmathjs-markdown', function () {
  it('percent markdown base on cost', function () {
    assert.equal(markdown.getValue(100, 80), 20);
  });

  it('markdown percentage', function () {
    assert.equal(markdown.getPercentage(100, 80), 20);
  });

  it('markdown by percentage', function () {
    assert.equal(markdown.byPercentage(100, 20), 80);
  });
});
