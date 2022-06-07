const add = function(num1, num2) {
    return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(...args) {
	const array = args[0]
  let add = 0
  for (let i=0; i<array.length; i++) {
      add += array[i]
  } 
  return add
};

// official solution
// const sum = function(array) {
//   return array.reduce((total, current) => total + current, 0);
// };

const multiply = function(...args) {
    const array = args[0]
    let multiplication = 1
    for (let i=0; i<array.length; i++) {
      multiplication *= array[i]
    }
    return multiplication
};

// Official solution
// const multiply = function(array) {
//   return array.length
//     ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
//     : 0;
// };

const power = function(base, exponent) {
	return Math.pow(base, exponent)
};

const factorial = function(number) {
	let factorialNumber = 1 
  if (number === 0) {
    return factorialNumber
  } else {
    for (i=number; i>0; i--) {
    factorialNumber *= i
   } 
   return factorialNumber
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
