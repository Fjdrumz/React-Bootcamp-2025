// Here are **code examples** for each type of JavaScript error and how to handle them:

// ---

// ### 1. **`SyntaxError`**
// Occurs when there is a syntax mistake in your code.

// #### Example:
// ```javascript
// // Incorrect syntax
// if (x = 5) { // Using '=' instead of '=='
//   console.log("x is 5");
// }
// ```

// #### Fix:
// ```javascript
// if (x === 5) { // Use '===' for comparison
//   console.log("x is 5");
// }
// ```

// ---

// ### 2. **`ReferenceError`**
// Occurs when you try to access a variable or function that does not exist.

// #### Example:
// ```javascript
// console.log(undefinedVariable); // undefinedVariable is not defined
// ```

// #### Handling with `try...catch`:
// ```javascript
// try {
//   console.log(undefinedVariable);
// } catch (error) {
//   console.error("Error:", error.message); // Output: Error: undefinedVariable is not defined
// }
// ```

// ---

// ### 3. **`TypeError`**
// Occurs when you perform an operation on a value of the wrong type.

// #### Example:
// ```javascript
// const str = "Hello";
// str.pop(); // Strings don't have a pop() method
// ```

// #### Handling with `try...catch`:
// ```javascript
// try {
//   const str = "Hello";
//   str.pop();
// } catch (error) {
//   console.error("Error:", error.message); // Output: Error: str.pop is not a function
// }
// ```

// ---

// ### 4. **`RangeError`**
// Occurs when a value is not within the expected range.

// #### Example:
// ```javascript
// const arr = new Array(-1); // Invalid array length
// ```

// #### Handling with `try...catch`:
// ```javascript
// try {
//   const arr = new Array(-1);
// } catch (error) {
//   console.error("Error:", error.message); // Output: Error: Invalid array length
// }
// ```

// ---

// ### 5. **`URIError`**
// Occurs when using URI-related functions incorrectly.

// #### Example:
// ```javascript
// decodeURI("%"); // Invalid URI sequence
// ```

// #### Handling with `try...catch`:
// ```javascript
// try {
//   decodeURI("%");
// } catch (error) {
//   console.error("Error:", error.message); // Output: Error: URI malformed
// }
// ```

// ---

// ### 6. **Custom Error**
// You can throw your own custom errors using `throw new Error()`.

// #### Example:
// ```javascript
// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Division by zero is not allowed.");
//   }
//   return a / b;
// }

// try {
//   console.log(divide(10, 0));
// } catch (error) {
//   console.error("Error:", error.message); // Output: Error: Division by zero is not allowed.
// }
// ```

// ---

// ### 7. **Handling Asynchronous Errors**
// Errors in asynchronous code (e.g., Promises) can be handled using `.catch()` or `try...catch` with `async/await`.

// #### Example with Promises:
// ```javascript
// fetch("https://invalid-url.com")
//   .then((response) => response.json())
//   .catch((error) => {
//     console.error("Fetch Error:", error.message); // Output: Fetch Error: Failed to fetch
//   });
// ```

// #### Example with `async/await`:
// ```javascript
// async function fetchData() {
//   try {
//     const response = await fetch("https://invalid-url.com");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Fetch Error:", error.message); // Output: Fetch Error: Failed to fetch
//   }
// }

// fetchData();
// ```

// ---

// ### 8. **`finally` Block**
// The `finally` block runs regardless of whether an error occurs.

// #### Example:
// ```javascript
// try {
//   console.log("Try block");
//   throw new Error("Something went wrong");
// } catch (error) {
//   console.error("Catch block:", error.message);
// } finally {
//   console.log("Finally block: This always runs.");
// }
// ```

// #### Output:
// ```
// Try block
// Catch block: Something went wrong
// Finally block: This always runs.
// ```

// ---

// ### 9. **Validating Input with Custom Errors**
// Throw custom errors to enforce specific conditions.

// #### Example:
// ```javascript
// function validateAge(age) {
//   if (typeof age !== "number") {
//     throw new TypeError("Age must be a number.");
//   }
//   if (age < 0) {
//     throw new RangeError("Age cannot be negative.");
//   }
//   console.log("Age is valid:", age);
// }

// try {
//   validateAge(-5);
// } catch (error) {
//   console.error("Validation Error:", error.message); // Output: Validation Error: Age cannot be negative.
// }
// ```

// ---

// ### 10. **Logging Errors**
// Always log errors for debugging purposes.

// #### Example:
// ```javascript
// try {
//   JSON.parse("invalid JSON");
// } catch (error) {
//   console.error("Error Name:", error.name); // Output: Error Name: SyntaxError
//   console.error("Error Message:", error.message); // Output: Error Message: Unexpected token i in JSON at position 0
//   console.error("Stack Trace:", error.stack); // Output: Stack trace (where the error occurred)
// }
// ```

// ---

// ### Summary of Key Points:
// 1. **`SyntaxError`**: Fix syntax mistakes in your code.
// 2. **`ReferenceError`**: Ensure variables/functions are defined before use.
// 3. **`TypeError`**: Check the type of values before performing operations.
// 4. **`RangeError`**: Ensure values are within valid ranges.
// 5. **`URIError`**: Use URI-related functions correctly.
// 6. **Custom Errors**: Use `throw new Error()` to enforce specific conditions.
// 7. **`try...catch`**: Handle errors gracefully.
// 8. **`finally`**: Use for cleanup or final actions.
// 9. **Logging**: Always log errors for debugging.

// These examples cover the most common JavaScript errors and how to handle them effectively!