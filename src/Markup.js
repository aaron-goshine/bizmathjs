var markup = {};

markup.byValue = function (originalCost, markup) {
  return markup + originalCost;
};

markup.byPercentage = function (originalCost, percentage) {
  return originalCost + (originalCost * (percentage / 100));
};

markup.was = function (originalCost, sellingCost) {
  return sellingCost - originalCost;
};

export default markup;
