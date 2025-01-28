const sqrt24 = Math.sqrt(24);
console.log(sqrt24);

const sqrt96 = Math.sqrt(96);
console.log(sqrt96);

const sqrt48 = Math.sqrt(48);
console.log(sqrt48);

const sqrt122 = Math.sqrt(48);
console.log(sqrt122);

// 1. what is the difference between Math.round(), Math.ceil() and Math.floor()?


//                          Answer : 
// Math.round() rounds the number to the nearest integer, Math.ceil() rounds the number up to the nearest integer, Math.floor() rounds the number down to the nearest integer.
// Math.round(): Rounds to the nearest integer based on decimal (rounds .5 and above up, below .5 down).
//Math.floor(): Always rounds down (towards negative infinity).
//Math.ceil(): Always rounds up (towards positive infinity).

//2. What will Math.round(2.5) return? Why?

//                          Answer :
// Math.round(2.5) returns 3. This is because Math.round() rounds the number to the nearest integer, and 2.5 is closer to 3 than it is to 2.

//3. How does Math.ceil() behave when the number is negative? Provide an example.

//                          Answer :
// Math.ceil() rounds the number up to the nearest integer, regardless of whether the number is positive or negative. For example, Math.ceil(-2.5) returns -2.




                    //Task 3:

const compareRoundingMethods = (number) => (
    {
        rounded: Math.round(number),  // Round to nearest integer
        ceil: Math.ceil(number),      // Round up
        floor: Math.floor(number)     // Round down
      }
);
  

  
  const result1 = compareRoundingMethods(4.7);
  console.log(result1);
  


// Create a program that generates 10 random decimal numbers between 1 and 100.


for (let i = 0; i < 10; i++) {
    
    const randomNumber = Math.random() * 99 + 1;
  
    console.log(Math.round(randomNumber));
    console.log(Math.ceil(randomNumber));
    console.log(Math.floor(randomNumber));
  }
  

 // Write a function calculateTotal(items) that takes an array of item prices (decimal numbers).
// 	•	Use:
// 	•	Math.round() to calculate the total rounded to the nearest integer.
// 	•	Math.ceil() to calculate the total rounded up.
// 	•	Math.floor() to calculate the total rounded down.
// 	•	Return an object with the three totals.


const calculateTotal = (items) => 
  ({
    totalRounded: Math.round(items.reduce((acc, item) => acc + item, 0)),  // Round to nearest integer
    totalCeil: Math.ceil(items.reduce((acc, item) => acc + item, 0)),      // Round up
    totalFloor: Math.floor(items.reduce((acc, item) => acc + item, 0))     // Round down
  });
  
  // Example usage:
  const itemPrices = [10.5, 5.3, 8.8];
  const result2 = calculateTotal(itemPrices);
  console.log(result2);
  


  	//Challenge Question 
// Write a program that takes any positive or negative decimal number and determines whether Math.ceil() and Math.floor() return the same result for that number. Print a message indicating the result.
// Hint: For some negative numbers, Math.ceil() and Math.floor() behave differently.



const checkCeilAndFloor = (number) => {
    // Calculate the ceil and floor values
    const ceilValue = Math.ceil(number);
    const floorValue = Math.floor(number);
  
    // Check if the ceil and floor values are the same
    if (ceilValue === floorValue) {
      console.log(`For the number ${number}, Math.ceil() and Math.floor() return the same result: ${ceilValue}`);
    } else {
      console.log(`For the number ${number}, Math.ceil() returns ${ceilValue} and Math.floor() returns ${floorValue}`);
    }
  };
  
 
  checkCeilAndFloor(4.2);   // Positive decimal
  checkCeilAndFloor(-4.2);  // Negative decimal
  checkCeilAndFloor(3.0);   // Whole number
  checkCeilAndFloor(-3.0);  // Negative whole number
  checkCeilAndFloor(5.99);  // Another positive decimal
  checkCeilAndFloor(-5.99); // Another negative decimal
  

  console.log(checkCeilAndFloor());