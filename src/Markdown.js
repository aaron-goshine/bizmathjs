var markdown = {}

markdown.getValue = function (originalPrice, markdownPrice) {
  return originalPrice - markdownPrice
}

markdown.getPercentage = function (originalPrice, markdown) {
  return 100 * ((originalPrice - markdown) / originalPrice)
}

markdown.byPercentage = function (originalPrice, percentage) {
  return originalPrice - (originalPrice * (percentage / 100))
}

module.exports = markdown
