var Payroll = {}

Payroll.byHour = function (reqularHours, reqularHoursRate, overTimeHours, overTimeHoursRate){
  return (reqularHours * reqularHoursRate + overTimeHours * overTimeHoursRate);
}

Payroll.byUnit = function(acceptedUnits, unitPice){
  return acceptedUnits * unitPice;
}

Payroll.byCommission = function (sales, commisionPercentRate) {
  return sales * (commisionPercentRate / 100);
}

export default Payroll;

