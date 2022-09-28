const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
};

const multiply = function(numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++){
    result = result * numbers[i];
  }
  return result;
};

const power = function(a, b) {
  return Math.pow(a, b);	
};

const factorial = function(num) {
  let fac = 1;
  for (let i = 1; i <= num; i++){
    fac = fac * i;
  }	
  return fac;
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
