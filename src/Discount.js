var Discount = {};

Discount.getValue = function (originalPrice, discountPercentage){
  return originalPrice * (discountPercentage / 100);
}

Discount.getPrice = function(originalPrice, discountValue){
  return originalPrice - discountValue;
}

export default Discount;
