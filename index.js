var depreciation = require('./src/depreciation.js');
var interest = require('./src/interest.js');
var payroll = require('./src/payroll.js');
var discount = require('./src/discount.js');
var markdown = require('./src/markdown.js');
var markup = require('./src/markup.js');

class Bizmath {
  constructor (options) {
    this.options = options;
  }
};
Bizmath.version = '0.0.1';
Bizmath.interest = interest;
Bizmath.payroll = payroll;
Bizmath.discount = discount;
Bizmath.markdown = markdown;
Bizmath.markup = markup;

export default Bizmath;
