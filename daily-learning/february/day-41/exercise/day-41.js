// Sure! Here are **more examples** of JavaScript errors and how to handle them, including advanced scenarios and best practices:

// ---

// ### 11. **Handling Multiple Error Types**
// You can handle different types of errors separately in a `try...catch` block.

// #### Example:
// ```javascript
// try {
//   const input = prompt("Enter a number:");
//   const number = Number(input);

//   if (isNaN(number)) {
//     throw new TypeError("Input is not a valid number.");
//   }
//   if (number < 0) {
//     throw new RangeError("Number cannot be negative.");
//   }

//   console.log("Valid number:", number);
// } catch (error) {
//   if (error instanceof TypeError) {
//     console.error("Type Error:", error.message);
//   } else if (error instanceof RangeError) {
//     console.error("Range Error:", error.message);
//   } else {
//     console.error("Unknown Error:", error.message);
//   }
// }
// ```

// ---

// ### 12. **Error Handling in Promises**
// Use `.catch()` to handle errors in Promises.

// #### Example:
// ```javascript
// const promise = new Promise((resolve, reject) => {
//   const success = false; // Simulate failure
//   if (success) {
//     resolve("Success!");
//   } else {
//     reject(new Error("Something went wrong."));
//   }
// });

// promise
//   .then((result) => console.log(result))
//   .catch((error) => console.error("Promise Error:", error.message));
// ```

// ---

// ### 13. **Error Handling with `async/await`**
// Use `try...catch` with `async/await` for cleaner asynchronous error handling.

// #### Example:
// ```javascript
// async function fetchData() {
//   try {
//     const response = await fetch("https://invalid-url.com");
//     if (!response.ok) {
//       throw new Error("Failed to fetch data.");
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Fetch Error:", error.message);
//   }
// }

// fetchData();
// ```

// ---

// ### 14. **Custom Error Classes**
// Create custom error classes for more specific error handling.

// #### Example:
// ```javascript
// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// function validateEmail(email) {
//   if (!email.includes("@")) {
//     throw new ValidationError("Invalid email address.");
//   }
//   console.log("Email is valid:", email);
// }

// try {
//   validateEmail("invalid-email");
// } catch (error) {
//   if (error instanceof ValidationError) {
//     console.error("Validation Error:", error.message);
//   } else {
//     console.error("Unknown Error:", error.message);
//   }
// }
// ```

// ---

// ### 15. **Error Handling in Event Listeners**
// Handle errors in event listeners to prevent crashes.

// #### Example:
// ```javascript
// document.getElementById("myButton").addEventListener("click", () => {
//   try {
//     // Simulate an error
//     throw new Error("Button click error.");
//   } catch (error) {
//     console.error("Event Listener Error:", error.message);
//   }
// });
// ```

// ---

// ### 16. **Error Handling in Node.js**
// In Node.js, you can handle errors in callbacks and streams.

// #### Example with Callback:
// ```javascript
// const fs = require("fs");

// fs.readFile("nonexistent-file.txt", "utf8", (error, data) => {
//   if (error) {
//     console.error("File Read Error:", error.message);
//     return;
//   }
//   console.log(data);
// });
// ```

// #### Example with Stream:
// ```javascript
// const fs = require("fs");

// const stream = fs.createReadStream("nonexistent-file.txt");

// stream.on("error", (error) => {
//   console.error("Stream Error:", error.message);
// });
// ```

// ---

// ### 17. **Global Error Handling**
// Use `window.onerror` to handle uncaught errors globally in the browser.

// #### Example:
// ```javascript
// window.onerror = (message, source, lineno, colno, error) => {
//   console.error("Global Error:", message);
//   console.error("Source:", source);
//   console.error("Line:", lineno);
//   console.error("Column:", colno);
//   console.error("Stack Trace:", error.stack);
//   return true; // Prevent default error handling
// };

// // Trigger an error
// undefinedFunction();
// ```

// ---

// ### 18. **Error Handling in Express.js (Node.js)**
// Handle errors in Express.js middleware.

// #### Example:
// ```javascript
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   throw new Error("Something went wrong.");
// });

// // Error-handling middleware
// app.use((error, req, res, next) => {
//   console.error("Server Error:", error.message);
//   res.status(500).send("Internal Server Error");
// });

// app.listen(3000, () => console.log("Server running on port 3000"));
// ```

// ---

// ### 19. **Error Handling in React**
// Handle errors in React components using `Error Boundaries`.

// #### Example:
// ```javascript
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.error("Component Error:", error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h1>Something went wrong.</h1>;
//     }
//     return this.props.children;
//   }
// }

// function MyComponent() {
//   throw new Error("Test error.");
//   return <div>My Component</div>;
// }

// function App() {
//   return (
//     <ErrorBoundary>
//       <MyComponent />
//     </ErrorBoundary>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));
// ```

// ---

// ### 20. **Error Handling in Fetch API**
// Handle errors when using the Fetch API.

// #### Example:
// ```javascript
// fetch("https://invalid-url.com")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok.");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Fetch Error:", error.message));
// ```

// ---

// ### 21. **Error Handling in Axios**
// Handle errors when using Axios for HTTP requests.

// #### Example:
// ```javascript
// axios
//   .get("https://invalid-url.com")
//   .then((response) => console.log(response.data))
//   .catch((error) => {
//     if (error.response) {
//       console.error("Server Error:", error.response.status);
//     } else if (error.request) {
//       console.error("Network Error:", error.message);
//     } else {
//       console.error("Request Error:", error.message);
//     }
//   });
// ```

// ---

// ### 22. **Error Handling in JSON Parsing**
// Handle errors when parsing JSON.

// #### Example:
// ```javascript
// const invalidJson = "{ invalid }";

// try {
//   const data = JSON.parse(invalidJson);
//   console.log(data);
// } catch (error) {
//   console.error("JSON Parse Error:", error.message);
// }
// ```

// ---

// ### 23. **Error Handling in File Uploads**
// Handle errors during file uploads.

// #### Example:
// ```javascript
// const fileInput = document.getElementById("fileInput");

// fileInput.addEventListener("change", (event) => {
//   const file = event.target.files[0];
//   if (file.size > 5 * 1024 * 1024) {
//     alert("File size must be less than 5MB.");
//     return;
//   }
//   console.log("File uploaded:", file.name);
// });
// ```

// ---

// ### 24. **Error Handling in Web Workers**
// Handle errors in Web Workers.

// #### Example:
// ```javascript
// const worker = new Worker("worker.js");

// worker.onmessage = (event) => {
//   console.log("Message from worker:", event.data);
// };

// worker.onerror = (error) => {
//   console.error("Worker Error:", error.message);
// };

// worker.postMessage("Start");
// ```

// ---

// 25. **Error Handling in Third-Party Libraries**
// Handle errors when using third-party libraries.

// #### Example with Lodash:
// ```javascript
// try {
//   const result = _.divide(10, 0);
//   console.log(result);
// } catch (error) {
//   console.error("Lodash Error:", error.message);
// }
// ```

// ---

// ### Summary
// These examples cover a wide range of scenarios for handling errors in JavaScript, including:
// - Synchronous and asynchronous code.
// - Frontend (browser) and backend (Node.js) environments.
// - Frameworks like React and Express.js.
// - Third-party libraries and APIs.

// By mastering these techniques, you can write more robust and error-resistant JavaScript applications!