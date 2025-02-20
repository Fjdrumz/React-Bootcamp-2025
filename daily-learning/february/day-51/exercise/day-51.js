const person = { name: "John", age: 30, city: "New York" };
const keys = Object.keys(person);
console.log(keys); // ["name", "age", "city"]


const laptop = { brand: "Dell", price: 800, color: "Black" };
const entries = Object.entries(laptop);
console.log(entries); 
// [["brand", "Dell"], ["price", 800], ["color", "Black"]]


const user = { name: "Emma", age: 25 };
console.log(user.hasOwnProperty("age")); // true
console.log(user.hasOwnProperty("email")); // false


const student = { name: "Jake", grade: "A", subject: "Math" };
delete student.grade;
console.log(student); // { name: "Jake", subject: "Math" }
