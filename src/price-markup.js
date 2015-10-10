Bizmath.percentMarkupBaseOnCost = function (cost, markup){
  return markup / cost;
}

Bizmath.valueMarkupBaseOncost = function(markupPercentage){
  return markupPercentage / (1 - markPriceMarkUp)
}

Bizmath.markupByPercent  = function (cost,percent){
 var mkup = cost + (cost * (percent / 100))
  return mkup;

}

Bizmath.markupByUnits = function (cost,units){
  return cost + units;
}
