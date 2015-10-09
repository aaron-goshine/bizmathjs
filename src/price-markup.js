
/**
 *Markup : Amount required ot cover operating expenses and make a profite
 *COST of goods is what the retailer pays the supplier or manifacturer for
 *goods.
 *SELLING PRICE of the goods is what the customer payes the retailer for
 *the goods.
 *MARKUP is selling price - cost
 */
bizmath.percentMarkupBaseOnCost = function (cost, markup){
  return markup / cost;
}

bizmath.valueMarkupBaseOncost = function(markupPercentage){
  return markupPercentage / (1 - markPriceMarkUp)
}

bizmath.markupByPercent  = function (cost,percent){
 var mkup = cost + (cost * (percent / 100))
  return mkup;

}

bizmath.markupByUnits = function (cost,units){
  return cost + units;
}
