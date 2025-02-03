//create 3 variables and assign floating point numbers to them

const floatNum1 = 3.14;  
const floatNum2 = 2.71;
const floatNum3 = 1.618;


console.log(floatNum1);
console.log(floatNum2);
console.log(floatNum3);

const rounded1 = Math.round(floatNum1);
const rounded2 = Math.floor(floatNum2);
const rounded3 = Math.ceil(floatNum3);

console.log(rounded1);
console.log(rounded2);
console.log(rounded3);

const numberArray = [rounded1, rounded2, rounded3];

console.log(numberArray);

//create a variable and assign the result to a random number between 1 and 6

const randomNumber = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber);