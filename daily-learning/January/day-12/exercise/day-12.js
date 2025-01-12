// JavaScript is a versatile programming language used for creating dynamic and interactive web pages. It runs in the browser and can also be used for server-side development (e.g., with Node.js). Below are the key concepts that form the foundation of JavaScript:

// ### 1. **Variables**
// Variables are used to store data that can be referenced and manipulated. In JavaScript, variables can be declared using `var`, `let`, or `const`.

// - **`var`**: The older way to declare variables. It has function-scoped or globally-scoped behavior.
// - **`let`**: A modern way to declare variables, with block-scoping.
// - **`const`**: Used to declare constants (values that cannot be reassigned).

// Example:
// ```javascript
// let name = "Alice";
// const age = 25;
// ```

// ### 2. **Data Types**
// JavaScript has several basic data types that can be categorized into two groups: **Primitive Types** and **Reference Types**.

// - **Primitive Types**: These include numbers, strings, booleans, null, undefined, and symbols.
// - **Reference Types**: These include objects, arrays, and functions.

// Examples:
// ```javascript
// let number = 10;            // number (primitive)
// let greeting = "Hello";     // string (primitive)
// let isActive = true;        // boolean (primitive)
// let user = { name: "Bob" }; // object (reference)
// ```

// ### 3. **Operators**
// Operators are used to perform operations on variables and values. Some common operators in JavaScript are:

// - **Arithmetic operators**: `+`, `-`, `*`, `/`, `%`, `++`, `--`
// - **Assignment operators**: `=`, `+=`, `-=`, `*=`, `/=`
// - **Comparison operators**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
// - **Logical operators**: `&&` (AND), `||` (OR), `!` (NOT)

// Example:
// ```javascript
// let x = 5;
// let y = 10;
// let sum = x + y;  // sum = 15
// ```

// ### 4. **Control Structures**
// Control structures allow the flow of code execution to be changed based on conditions.

// - **If/else statements**: Used to execute code based on conditions.
// - **Switch statements**: Allows testing multiple conditions.
// - **Loops**: `for`, `while`, and `do...while` loops are used to repeat code a certain number of times or while a condition is true.

// Example:
// ```javascript
// let x = 10;

// if (x > 5) {
//     console.log("x is greater than 5");
// } else {
//     console.log("x is 5 or less");
// }
// ```

// ### 5. **Functions**
// A function is a block of code designed to perform a specific task. Functions allow you to write reusable code and organize logic.

// - Functions can be declared using the `function` keyword or using arrow syntax (`() => {}`).
// - Functions can return values and accept parameters.

// Example:
// ```javascript
// function greet(name) {
//     return `Hello, ${name}!`;
// }

// let message = greet("Alice");  // message = "Hello, Alice!"
// ```

// ### 6. **Objects**
// Objects are collections of key-value pairs, where keys (also called properties) are strings, and values can be any data type (including functions).

// Objects are used to represent and group related data.

// Example:
// ```javascript
// let person = {
//     name: "Alice",
//     age: 25,
//     greet: function() {
//         console.log("Hello!");
//     }
// };

// console.log(person.name);  // Output: Alice
// person.greet();            // Output: Hello!
// ```

// ### 7. **Arrays**
// Arrays are special types of objects used to store multiple values in a single variable. The values are indexed, starting from 0.

// You can access, modify, and loop through the elements in an array.

// Example:
// ```javascript
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers[2]);  // Output: 3
// numbers.push(6);          // Adds 6 to the end of the array
// ```

// ### 8. **Event Handling**
// JavaScript is often used to handle events like clicks, form submissions, mouse movements, etc. You can attach event listeners to HTML elements to respond to these events.

// Example:
// ```javascript
// document.getElementById("myButton").addEventListener("click", function() {
//     alert("Button clicked!");
// });
// ```

// ### 9. **Error Handling**
// JavaScript provides mechanisms for handling errors that occur during program execution.

// - **`try...catch`**: Allows you to catch errors and handle them gracefully.
// - **`throw`**: Used to throw custom errors.

// Example:
// ```javascript
// try {
//     let x = 10 / 0;
//     if (x === Infinity) throw "Division by zero!";
// } catch (error) {
//     console.log("Error:", error);
// }
// ```

// ### 10. **Asynchronous JavaScript**
// JavaScript can handle asynchronous tasks, like fetching data from a server or waiting for an event, using:

// - **Callbacks**: Functions passed as arguments to other functions.
// - **Promises**: Used for handling asynchronous operations that may succeed or fail in the future.
// - **Async/Await**: A cleaner syntax for working with promises.

// Example (Using `fetch()` to get data):
// ```javascript
// fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log("Error:", error));
// ```

// ### 11. **DOM Manipulation**
// The DOM (Document Object Model) represents the structure of an HTML document. JavaScript allows you to manipulate the DOM, including adding, removing, and updating elements dynamically.

// Example:
// ```javascript
// let heading = document.getElementById("myHeading");
// heading.innerHTML = "New Heading Text";
// ```

// ### 12. **Scope and Closures**
// - **Scope** refers to the visibility of variables. Variables declared within a function are local to that function, while those declared outside are global.
// - **Closure** occurs when a function retains access to its lexical environment even after the function has executed.

// Example:
// ```javascript
// function outer() {
//     let outerVar = "I am outside!";
//     function inner() {
//         console.log(outerVar);  // inner function has access to outer's variables
//     }
//     inner();
// }

// outer();
// ```

// ### 13. **This Keyword**
// The `this` keyword refers to the context in which a function is called. It can refer to an object, a function, or the global scope, depending on how the function is invoked.

// Example:
// ```javascript
// let person = {
//     name: "Alice",
//     greet: function() {
//         console.log(`Hello, ${this.name}`);
//     }
// };

// person.greet();  // Output: Hello, Alice
// ```

// ### Conclusion
// These concepts form the building blocks of JavaScript programming. By understanding these key ideas, you can start building interactive web pages, work with APIs, handle events, and write robust, dynamic JavaScript code.