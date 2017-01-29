var Markdown = {};

Markdown.getValue = function (originalPrice, markdownPrice) {
  return originalPrice - markdownPrice;
};

Markdown.getPercentage = function (originalPrice, markdown) {
  return 100 * ((originalPrice - markdown) / originalPrice);
};

Markdown.byPercentage = function (originalPrice, percentage) {
  return originalPrice - (originalPrice * (percentage / 100));
};

export default Markdown;
