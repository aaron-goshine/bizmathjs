
Bizmath.payByHour = function (reqularHours, reqularHoursRate, overTimeHours, overTimeHoursRate){
  return (reqularHours * reqularHoursRate + overTimeHours * overTimeHoursRate);
}

Bizmath.payByUnit = function(acceptedUnits, unitPice){
  return acceptedUnits * unitPice;
}

Bizmath.payByCommission = function (sales, commisionPercentRate) {
  return sales * (commisionPercentRate / 100);
}


