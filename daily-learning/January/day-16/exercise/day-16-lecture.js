// JavaScript Functions Lesson
 
// Introduction to Functions
// A function in JavaScript is a reusable block of code that performs a specific task. It allows you to write code once and use it multiple times, making your programs more efficient and organized.
 
// 1. Basics of Functions
// Defining a Function
// A function is defined using the function keyword, followed by a name, parentheses, and curly braces.
 
// Example:
// function greet() {
//   console.log("Hello, World!");
// }
 
// Calling a Function
// To execute a function, you call it by its name followed by parentheses.
// greet(); // Output: Hello, World!
 
// 2. Functions with Parameters
// Parameters are placeholders that allow you to pass data into a function.
// Example:
// function greetUser(name) {
//   console.log(Hello, ${name}!);
// }
 
// greetUser("Alice"); // Output: Hello, Alice!
 
// 3. Functions with Return Values
// A function can return a value using the return keyword.
// Example:
// function add(a, b) {
//   return a + b;
// }
 
// const sum = add(5, 10);
// console.log(sum); // Output: 15
 
 
 
 
// 4. Function Expressions
// A function can also be assigned to a variable. This is called a function expression.
// Example:
// const greet = function () {
//   console.log("Hello, World!");
// };
 
// greet(); // Output: Hello, World!
 
// 5. Arrow Functions
// Arrow functions are a shorter syntax for writing functions, introduced in ES6.
// Example:
// const greet = () => {
//   console.log("Hello, World!");
// };
 
// greet(); // Output: Hello, World!
// Arrow Functions with Parameters:
// const add = (a, b) => a + b;
// console.log(add(5, 10)); // Output: 15
 
// 6. Functions Inside Objects
// Functions defined inside objects are called methods.
// Example:
// const user = {
//   name: "Alice",
//   greet: function () {
//     console.log(Hello, ${this.name}!);
//   },
// };
 
// user.greet(); // Output: Hello, Alice!