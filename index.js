var depreciation = require('./src/depreciation.js');
var interest = require('./src/interest.js');
var payroll = require('./src/payroll.js');
var discount = require('./src/discount.js');
var markdown = require('./src/markdown.js');
var markup = require('./src/markup.js');

module.exports = {
  version: '0.0.1',
  interest: interest,
  payroll: payroll,
  discount: discount,
  markdown: markdown,
  markup: markup
};

