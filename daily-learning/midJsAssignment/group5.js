import { addNumbers } from "../midJsAssignment/mathUtils.js";

// The Math.random() function in JavaScript is used to generate a random floating-point number between 0 (inclusive) and 1 (exclusive). This means the number will always be greater than or equal to 0, but less than 1.

// In JavaScript, exporting and importing functions allow code to be organized into reusable modules. **Named exports** let multiple functions be exported from one file, requiring curly braces `{}` during import. Meanwhile, **default exports** allow a single function to be exported, without the need for curly braces. This modular system improves code structure, making applications more maintainable and scalable. Mastering these techniques is essential for modern development, especially in frameworks like React.

// Named exports and default exports are two methods for sharing code in JavaScript. **Named exports** allow multiple functions or variables to be exported from a file, requiring curly braces `{}` during import. They offer flexibility by enabling selective imports. In contrast, **default exports** allow only one value to be exported, making imports simpler without curly braces. Default exports are ideal for exporting the main functionality of a module, while named exports suit files with multiple utilities.

const anyNumber = Math.floor(Math.random() * 100) + 1;
console.log(anyNumber);


console.log(addNumbers(3,7));


const myArray = [23, 45, 67, 89, 12];
const highestNumber = Math.max(...myArray)

console.log(highestNumber);

