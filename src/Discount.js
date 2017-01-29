var Discount = {};
/**
 * Calculate a discounted price
 * @param {number} originalPrice
 * @param {float} discountPercentage
 * @returns {number}
 */

Discount.getValue = function (originalPrice, discountPercentage) {
  return originalPrice * (discountPercentage / 100);
};

Discount.getPrice = function (originalPrice, discountValue) {
  return originalPrice - discountValue;
};

export default Discount;
