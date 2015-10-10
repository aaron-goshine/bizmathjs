
Bizmath.discountValue = function (originalPrice, discountPercentage){
  return originalPrice * (discountPercentage / 100);
}

Bizmath.discountPrice = function(originalPrice, discountValue){
  return originalPrice - discountValue;
}



