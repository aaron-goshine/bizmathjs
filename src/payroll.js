var payroll = {};

payroll.byHour = function (reqularHours, reqularHoursRate, overTimeHours, overTimeHoursRate) {
  return (reqularHours * reqularHoursRate + overTimeHours * overTimeHoursRate);
};

payroll.byUnit = function (acceptedUnits, unitPice) {
  return acceptedUnits * unitPice;
};

payroll.byCommission = function (sales, commisionPercentRate) {
  return sales * (commisionPercentRate / 100);
};

module.exports = payroll;

