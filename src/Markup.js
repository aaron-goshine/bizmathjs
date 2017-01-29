var Markup = {};

Markup.byValue = function (originalCost, markup) {
  return markup + originalCost;
};

Markup.byPercentage = function (originalCost, percentage) {
  return originalCost + (originalCost * (percentage / 100));
};

Markup.was = function (originalCost, sellingCost) {
  return sellingCost - originalCost;
};

export default Markup;
