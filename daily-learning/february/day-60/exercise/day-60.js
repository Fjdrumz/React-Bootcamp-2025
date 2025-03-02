// ### Notes on For Loops in JavaScript

// A **for loop** is used to execute a block of code a specific number of times. It is commonly used when the number of iterations is known beforehand.

// #### Syntax:

// ```javascript
// for (initialization; condition; increment/decrement) {
//     // Code block to be executed
// }
// ```

// #### Explanation:

// 1. **Initialization:** Executes once before the loop starts. It is typically used to declare and initialize a loop control variable.
// 2. **Condition:** The loop continues to execute as long as this condition is true.
// 3. **Increment/Decrement:** Updates the loop control variable after each iteration.
// 4. **Code Block:** The statements inside the loop are executed if the condition is true.

// #### Example:

// ```javascript
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// ```

// **Output:**

// ```
// 0
// 1
// 2
// 3
// 4
// ```

// #### How it Works:

// 1. The loop starts by initializing `i` to 0.
// 2. The condition `i < 5` is checked.
// 3. If the condition is true, the code block is executed.
// 4. The increment operation `i++` updates `i`.
// 5. Steps 2-4 repeat until the condition becomes false.

// #### Nested For Loops:

// A **nested for loop** is when one for loop is placed inside another. The inner loop executes completely for each iteration of the outer loop.

// Example:

// ```javascript
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 2; j++) {
//         console.log(`i=${i}, j=${j}`);
//     }
// }
// ```

// **Output:**

// ```
// i=1, j=1
// i=1, j=2
// i=2, j=1
// i=2, j=2
// i=3, j=1
// i=3, j=2
// ```

// #### Loop Control Statements:

// - **break:** Exits the loop immediately.
// - **continue:** Skips the current iteration and proceeds to the next iteration.

// Example with `break`:

// ```javascript
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }
// ```

// **Output:**

// ```
// 0
// 1
// 2
// 3
// 4
// ```

// Example with `continue`:

// ```javascript
// for (let i = 0; i < 5; i++) {
//     if (i === 2) {
//         continue;
//     }
//     console.log(i);
// }
// ```

// **Output:**

// ```
// 0
// 1
// 3
// 4
// ```

// #### When to Use For Loops:

// - When the number of iterations is known.
// - For iterating through arrays or lists.
// - When you need a counter.
// - For performing repeated tasks with a fixed number of iterations.

// #### Advantages:

// - Simple and easy to understand.
// - Suitable for fixed iteration tasks.
// - Provides better control with loop control statements.

// #### Disadvantages:

// - Not suitable for indefinite loops.
// - Can become complex with nested loops.

// Let me know if you'd like examples with advanced loop techniques or common mistakes!

