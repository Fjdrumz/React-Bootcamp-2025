// JavaScript errors are a way for the language to tell you that something has gone wrong in your code. When an error occurs, JavaScript stops executing the current code and throws an exception. If the error is not handled properly, it can crash your program. Understanding errors and how to handle them is crucial for writing robust and reliable JavaScript code.

// ---

// ### Types of JavaScript Errors
// JavaScript has several built-in error types. Each type represents a specific kind of error:

// 1. **`Error`**:
//    - The base type for all errors. It is a generic error that can be used to create custom errors.
//    - Example: `new Error("Something went wrong")`.

// 2. **`SyntaxError`**:
//    - Occurs when there is a syntax mistake in your code.
//    - Example: `if (x = 5) { }` (using `=` instead of `==` or `===`).

// 3. **`ReferenceError`**:
//    - Occurs when you try to access a variable or function that does not exist.
//    - Example: `console.log(undefinedVariable);`.

// 4. **`TypeError`**:
//    - Occurs when you try to perform an operation on a value that is not of the expected type.
//    - Example: `"Hello".pop()` (strings don’t have a `pop()` method).

// 5. **`RangeError`**:
//    - Occurs when a value is not within the expected range.
//    - Example: `new Array(-1)` (array length cannot be negative).

// 6. **`URIError`**:
//    - Occurs when using global URI handling functions like `encodeURI()` or `decodeURI()` incorrectly.
//    - Example: `decodeURI("%")` (invalid URI sequence).

// 7. **`EvalError`**:
//    - Occurs when there is an error in the `eval()` function. This is rarely used in modern JavaScript.

// ---

// ### How Errors Work
// When an error occurs, JavaScript creates an **error object** that contains information about the error, such as:
// - **`name`**: The type of error (e.g., `TypeError`, `ReferenceError`).
// - **`message`**: A description of the error.
// - **`stack`**: A stack trace showing where the error occurred in the code.

// Example:
// ```javascript
// try {
//   console.log(undefinedVariable);
// } catch (error) {
//   console.log(error.name);    // Output: ReferenceError
//   console.log(error.message); // Output: undefinedVariable is not defined
//   console.log(error.stack);   // Output: Stack trace (where the error occurred)
// }
// ```

// ---

// ### Handling Errors with `try...catch`
// To prevent your program from crashing, you can handle errors using a `try...catch` block.

// #### Syntax:
// ```javascript
// try {
//   // Code that might throw an error
// } catch (error) {
//   // Code to handle the error
// } finally {
//   // Code that runs regardless of whether an error occurred
// }
// ```

// #### Example:
// ```javascript
// try {
//   const result = 10 / 0;
//   if (!isFinite(result)) {
//     throw new Error("Division by zero is not allowed.");
//   }
//   console.log(result);
// } catch (error) {
//   console.error("An error occurred:", error.message);
// } finally {
//   console.log("Execution complete.");
// }
// ```

// ---

// ### Throwing Custom Errors
// You can throw your own errors using the `throw` keyword. This is useful for validating inputs or enforcing specific conditions.

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
//   console.error(error.message); // Output: Division by zero is not allowed.
// }
// ```

// ---

// ### Common Error Handling Patterns
// 1. **Validate Inputs**:
//    - Check if inputs are valid before performing operations.
//    - Example:
//      ```javascript
//      function squareRoot(x) {
//        if (x < 0) {
//          throw new Error("Input must be a non-negative number.");
//        }
//        return Math.sqrt(x);
//      }
//      ```

// 2. **Graceful Fallbacks**:
//    - Provide a fallback value or behavior when an error occurs.
//    - Example:
//      ```javascript
//      let result;
//      try {
//        result = JSON.parse(invalidJson);
//      } catch {
//        result = {}; // Fallback to an empty object
//      }
//      ```

// 3. **Logging Errors**:
//    - Log errors to the console or a logging service for debugging.
//    - Example:
//      ```javascript
//      try {
//        riskyOperation();
//      } catch (error) {
//        console.error("Error:", error.message);
//      }
//      ```

// ---

// ### Debugging Errors
// 1. **Use `console.log()`**:
//    - Log values and states to understand where things go wrong.
//    - Example:
//      ```javascript
//      console.log("Value of x:", x);
//      ```

// 2. **Use the Browser Developer Tools**:
//    - Open the browser's developer tools (F12) and check the **Console** tab for errors.
//    - Use the **Debugger** to step through your code.

// 3. **Read the Stack Trace**:
//    - The stack trace shows where the error occurred in your code. Use it to pinpoint the issue.

// ---

// ### Best Practices for Error Handling
// 1. **Be Specific**:
//    - Throw and catch specific errors instead of using generic ones.
//    - Example:
//      ```javascript
//      throw new TypeError("Expected a number.");
//      ```

// 2. **Don’t Suppress Errors**:
//    - Avoid empty `catch` blocks. Always handle or log errors.

// 3. **Use `finally` for Cleanup**:
//    - Use the `finally` block to release resources or perform cleanup tasks.

// 4. **Test Edge Cases**:
//    - Test your code with invalid inputs and edge cases to ensure it handles errors gracefully.

// ---

// ### Example: Full Error Handling Workflow
// ```javascript
// function fetchData(url) {
//   if (!url) {
//     throw new Error("URL is required.");
//   }

//   try {
//     // Simulate fetching data
//     const data = { name: "John", age: 30 };
//     if (!data) {
//       throw new Error("Failed to fetch data.");
//     }
//     return data;
//   } catch (error) {
//     console.error("Fetch error:", error.message);
//     return null; // Fallback value
//   } finally {
//     console.log("Fetch attempt complete.");
//   }
// }

// const result = fetchData("");
// console.log(result); // Output: Fetch error: URL is required.
// ```

// ---

// ### Summary
// - JavaScript errors help you identify and fix issues in your code.
// - Use `try...catch` to handle errors gracefully.
// - Throw custom errors to enforce specific conditions.
// - Always log or handle errors to prevent crashes and improve debugging.

// By understanding and handling errors effectively, you can write more reliable and maintainable JavaScript code!