// Advanced Lecture on JavaScript Objects and Methods
// This lecture will cover advanced concepts related to JavaScript objects and their methods, providing a solid understanding for students.

// 1. Understanding Objects
// Definition:
// •	Objects are collections of key-value pairs where the keys (properties) are strings (or symbols), and the values can be of any type (primitive or complex).
// •	Objects are used to store and organize data in a structured way.
// Syntax:
// javascript
// Copy code
// const objectName = {
//   key1: value1,
//   key2: value2,
//   key3: value3,
// };
// Example:
// javascript
// Copy code
// const student = {
//   name: "Jane Doe",
//   age: 22,
//   subjects: ["Math", "Physics", "Chemistry"],
//   isGraduated: false,
// };

// 2. Accessing Object Properties
// Dot Notation:
// •	Most commonly used for accessing properties with valid identifiers.
// javascript
// Copy code
// console.log(student.name); // Output: Jane Doe
// Bracket Notation:
// •	Useful when property names are dynamic or not valid identifiers.
// javascript
// Copy code
// const key = "age";
// console.log(student[key]); // Output: 22

// 3. Adding, Modifying, and Deleting Properties
// Adding/Modifying Properties:
// javascript
// Copy code
// student.grade = "A+";
// student.age = 23;
// console.log(student); // Updated object
// Deleting Properties:
// javascript
// Copy code
// delete student.isGraduated;
// console.log(student); // 'isGraduated' removed

// 4. Iterating Over Objects
// Using for...in:
// javascript
// Copy code
// for (const key in student) {
//   console.log(`${key}: ${student[key]}`);
// }
// Using Object.keys():
// •	Returns an array of keys.
// javascript
// Copy code
// const keys = Object.keys(student);
// console.log(keys); // ['name', 'age', 'subjects']
// Using Object.values():
// •	Returns an array of values.
// javascript
// Copy code
// const values = Object.values(student);
// console.log(values); // ['Jane Doe', 22, ['Math', 'Physics', 'Chemistry']]
// Using Object.entries():
// •	Returns an array of [key, value] pairs.
// javascript
// Copy code
// const entries = Object.entries(student);
// console.log(entries);
// // [['name', 'Jane Doe'], ['age', 22], ['subjects', ['Math', 'Physics', 'Chemistry']]]

// 5. Object Methods
// Definition:
// Methods are functions defined inside objects.
// Example:
// javascript
// Copy code
// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   start: function () {
//     console.log("Car started!");
//   },
//   getDetails: function () {
//     return `${this.brand} ${this.model}`;
//   },
// };

// car.start(); // Output: Car started!
// console.log(car.getDetails()); // Output: Toyota Camry

// 6. Advanced Object Methods
// Object.assign()
// •	Copies properties from one or more objects to a target object.
// javascript
// Copy code
// const target = { a: 1 };
// const source = { b: 2, c: 3 };
// Object.assign(target, source);
// console.log(target); // { a: 1, b: 2, c: 3 }
// Object.freeze()
// •	Makes an object immutable (cannot add, remove, or modify properties).
// javascript
// Copy code
// const frozenObj = Object.freeze({ name: "John" });
// frozenObj.name = "Doe"; // Ignored
// console.log(frozenObj.name); // Output: John
// Object.seal()
// •	Allows modification of existing properties but prevents adding or removing properties.
// javascript
// Copy code
// const sealedObj = Object.seal({ age: 25 });
// sealedObj.age = 30; // Allowed
// sealedObj.name = "John"; // Ignored
// console.log(sealedObj); // { age: 30 }

// 7. Destructuring Objects
// Definition:
// Destructuring allows you to extract specific properties from an object into variables.
// Example:
// javascript
// Copy code
// const user = { id: 101, username: "coder123", isAdmin: true };
// const { username, isAdmin } = user;
// console.log(username); // coder123
// console.log(isAdmin); // true

// 8. Spread and Rest Operators with Objects
// Spread Operator (...)
// •	Used to copy or merge objects.
// javascript
// Copy code
// const user1 = { name: "Alice", age: 30 };
// const user2 = { ...user1, isAdmin: true };
// console.log(user2); // { name: 'Alice', age: 30, isAdmin: true }
// Rest Operator (...)
// •	Gathers remaining properties into a new object.
// javascript
// Copy code
// const { name, ...details } = user2;
// console.log(details); // { age: 30, isAdmin: true }

// 9. Prototypes and Inheritance
// Prototype Chain:
// Objects in JavaScript inherit properties and methods from their prototypes. Every object has an internal link to its prototype.
// Example:
// javascript
// Copy code
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.greet = function () {
//   console.log(`Hello, ${this.name}`);
// };

// const person1 = new Person("John");
// person1.greet(); // Output: Hello, John

// 10. Common Use Cases of Objects
// 1.	Storing Data:
// javascript
// Copy code


// const product = { id: 101, name: "Laptop", price: 1500 };
// 2.	

// 3.	Config Settings:
// javascript
// Copy code


// const config = { theme: "dark", language: "en" };
// 4.	

// 5.	API Responses:
// javascript
// Copy code


// const apiResponse = { status: 200, data: { userId: 123, username: "coder123" } };
// 6.	


