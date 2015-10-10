
Bizmath.markdown = function (originalPrice, markdownPrice){
  return originalPrice - markdownPrice;
}

Bizmath.markdownPercent = function(originalPrice, markdown){
  return 100 * ( (originalPrice - markdown) / originalPrice);
}

Bizmath.markdownByPercent  = function (originalPrice, percent){
 var mkdown = originalPrice - (originalPrice * (percent / 100))
  return mkdown;

}

