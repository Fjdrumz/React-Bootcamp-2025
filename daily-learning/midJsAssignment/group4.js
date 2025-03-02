// 1.	Explain the difference between a for loop and a while loop with examples.
const  questionOneAnswer = `
        A for loop is a control flow statement that allows you to execute a block of code multiple times. It consists of three parts: initialization, condition, and increment/decrement. The loop continues to run as long as the condition is true.

        A while loop is another type of loop that executes a block of code as long as the condition is true. It only has a condition, and the loop continues to run until the condition becomes false.
`;
//example code 
//for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//while loop    
let i1 = 0;
while (i1 < 5) {
    console.log(i1);
    i1++;
}
// 2.	What is a try...catch block used for in JavaScript?
const questionTwoAnswer = ` 
        A try...catch block is used in JavaScript to handle errors and exceptions that may occur during the execution of a block of code. The try block contains the code that may throw an error, and the catch block handles the error if it occurs. If an error occurs in the try block, the catch block is executed, allowing you to handle the error gracefully without crashing the program.
`;
// 3.	Describe the use of the finally block in error handling.
const questionThreeAnswer = ` 
        The finally block in error handling is used to execute a block of code regardless of whether an error occurs or not. It is typically used to clean up resources or perform cleanup operations that need to be done regardless of the outcome of the try and catch blocks. The finally block will always be executed, even if an error occurs in the try block or if an error is caught in the catch block.
`;


//coding questions

//question 1 


for (let i = 100; i<=100; i--){
    console.log(i);
    if (i === 0){
        break;
    }
}

function findSquare(number) {
    try {
      if (typeof number !== 'number') {
        throw new Error('Input must be a number');
      }
      return number * number;
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // Example 
  console.log(findSquare(5));
  findSquare('hello'); 
  

  let i = 1; 
  while(i <= 10) {
      console.log(i);
      i++;
  }
  