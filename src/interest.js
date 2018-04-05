var interest = {};
/**
 *
 *  Simple Interest
An item or service costs an amount C and is to be paid off over time in equal installment payments.
The difference between the cost C and the total amount paid in installments is the interest I.
The interest rate r is the amount of interest divided by the cost and the time of the loan T
(usually expressed in years): r = I/CT

example
An item purchased and costing $4,000 is to be paid off in 18 equal monthly payments of $249.
The total amount paid is 18 × $249 = $4,482, so that I = $482.
The time of the loan is 1.5 years; hence, the rate is r = 482/(4000 × 1.5) = 0.0803 or 8.03%.
Note: While the above computation is correct, the computed rate, 8.03%, is misleading.
This would be the true rate only if the $4,482 were repaid in one payment at the end of 18 months.
But since you are reducing the unpaid balance with each payment, you are paying a rate higher than 8.03%.
True interest rates are  gured on the unpaid balance.
The monthly payment based on the true rate is discussed below.
*/

var simple = {
  /**
  * simple interest rate calculator
  *
  * @name rate
  * @function
  * @param {number} I - interest
  * @param {number} C - the initial cost before interest
  * @param {number} T - time in years
  * @returns {number} return the interest rate as percentage
  */

  rate: function (I, C, T) {
    var R = (I / (C * T));
    R = Math.round(R * 10000);
    return R / 100;
  },
  interest: function (R, C, T) {},
  cost: function (I, R, T) {}
};

/**
 *True Interest Formula (Loan Payments)
The interest rate is usually expressed per year; thus, the monthly rate r is 1/12th of the annual interest rate. The monthly payment P is computed from the amount borrowed, A, and the number of monthly payments, n, according to the formula
(1+r)n P=Ar(1+r)n−1 (r>0)
example
A mortgage of $80,000 (A) is to be paid over 20 years (240 months) at a rate of 9% per year. The monthly payment is computed from the above formula with n = 240 months and r = 0.09/12 = 0.0075 per month.
It is necessary to calculate (1 + 0.0075)240 for use in the formula. This is accomplished with the calculator key [yx]; that is, enter 1.0075, press the [yx] key, then 240 = to give 6.00915. The above formula yields
P = 80000 × 0.0075 × 6.00915 / (6.00915 − 1) = $719.78
example
An automobile costing $20,000 is to be  nanced at the annual rate of 8% and paid in equal monthly payments over 60 months. Thus, n = 60, A = 20000, and r = 0.08/12 = 0.006667.
First compute (1 + 0.006667)60 (by entering 1.006667 then pressing the key [yx], followed by 60) = 1.48987. Thus, the monthly payment is
*/

/**
 * P = 20000 × .006667 × 1.48987 / (1.48987 − 1) = $405.53
Table A.6 gives the monthly payment for each $1,000 of the loan at several different interest rates.
example
Use Table A.6 to get the monthly payment for the previous example.
Note that the table entry for 8% and 5 years is $20.28 per thousand. Since the loan is $20,000, you must multiply $20.28 by 20, which gives $405.60. (This differs by a few cents from the above due to rounding in the tables.)

*/

interest.compound = function () {
// -
};

interest.daily = function () {
};

module.exports = {
  simple: simple
};
