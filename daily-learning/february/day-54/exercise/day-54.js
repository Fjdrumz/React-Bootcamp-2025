const objectMethods = `JavaScript Object Methods Explained
Objects in JavaScript are used to store key-value pairs, making them essential for organizing and managing data. JavaScript provides several built-in methods to manipulate objects efficiently.

1. Creating an Object
You can create an object using object literals or the new Object() constructor.

javascript
Copy
Edit
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
2. Accessing Properties
Dot Notation
javascript
Copy
Edit
console.log(person.name);  // "John"
Bracket Notation
javascript
Copy
Edit
console.log(person["age"]);  // 30
3. Adding & Updating Properties
javascript
Copy
Edit
person.job = "Developer";  // Adding a new property
person.age = 31;  // Updating an existing property
4. Deleting Properties
javascript
Copy
Edit
delete person.city;
console.log(person);  // { name: "John", age: 31, job: "Developer" }
5. Checking If a Property Exists
Using in Operator
javascript
Copy
Edit
console.log("age" in person);  // true
console.log("salary" in person);  // false
Using hasOwnProperty()
javascript
Copy
Edit
console.log(person.hasOwnProperty("job"));  // true
6. Looping Through an Object
for...in Loop
javascript
Copy
Edit
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// name: John
// age: 31
// job: Developer
7. Object Methods
Object.keys() – Get an Array of Keys
javascript
Copy
Edit
console.log(Object.keys(person));  // ["name", "age", "job"]
Object.values() – Get an Array of Values
javascript
Copy
Edit
console.log(Object.values(person));  // ["John", 31, "Developer"]
Object.entries() – Get an Array of Key-Value Pairs
javascript
Copy
Edit
console.log(Object.entries(person));
// [["name", "John"], ["age", 31], ["job", "Developer"]]
8. Merging Objects
Using Object.assign()
javascript
Copy
Edit
const additionalInfo = { country: "USA", age: 32 };
const updatedPerson = Object.assign({}, person, additionalInfo);
console.log(updatedPerson);
Using Spread Operator (...)
javascript
Copy
Edit
const mergedPerson = { ...person, country: "USA", age: 32 };
console.log(mergedPerson);
9. Cloning Objects
Using Object.assign()
javascript
Copy
Edit
const clonedPerson = Object.assign({}, person);
Using Spread Operator
javascript
Copy
Edit
const clonedPerson2 = { ...person };
10. Freezing & Sealing Objects
Object.freeze() – Prevents Any Modification
javascript
Copy
Edit
Object.freeze(person);
person.age = 40;  // No effect
delete person.name;  // No effect
console.log(person);  
Object.seal() – Allows Modification But Prevents Adding/Removing Properties
javascript
Copy
Edit
Object.seal(person);
person.age = 40;  // Allowed
delete person.name;  // Not allowed
console.log(person);
`