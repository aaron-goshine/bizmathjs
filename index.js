var Depreciation = require('./src/Depreciation.js');
var Interest = require('./src/Interest.js');
var Payroll = require('./src/Payroll.js');
var Discount = require('./src/Discount.js');
var Markdown = require('./src/Markdown.js');
var Markup  = require('./src/Markup.js');

class Bizmath {
  constructor(options){
    this.options = options;
  }
};
Bizmath.version =  "0.0.1";
Bizmath.Interest = Interest;
Bizmath.Payroll =  Payroll;
Bizmath.Discount = Discount;
Bizmath.Markdown = Markdown;
Bizmath.Markup = Markup;

console.log("Lovely doing business with you");

export default Bizmath;
