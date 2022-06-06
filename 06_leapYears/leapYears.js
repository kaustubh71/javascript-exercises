const leapYears = function(year) {
    if (year%4 === 0 && year%100 !== 0) {
        return true
    } else if (year%4 === 0 && year%400 === 0) {
        return true
    } else return false
};

// Official solution
// const leapYears = function(year) {
//     return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
//   };

// Do not edit below this line
module.exports = leapYears;
