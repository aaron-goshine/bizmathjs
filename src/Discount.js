var discount = {}
/**
 * Calculate a discounted price
 * @param {number} originalPrice
 * @param {float} discountPercentage
 * @returns {number}
 */

discount.getValue = function (originalPrice, discountPercentage) {
  return originalPrice * (discountPercentage / 100)
}

discount.getPrice = function (originalPrice, discountValue) {
  return originalPrice - discountValue
}

module.exports = discount
