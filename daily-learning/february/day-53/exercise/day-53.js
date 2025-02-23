const arrayMethods = `JavaScript Array Methods Explained
Arrays are one of the most commonly used data structures in JavaScript. They store multiple values in a single variable and come with built-in methods that allow you to manipulate and process data efficiently.

1. Creating an Array
You can create an array using:

javascript
Copy
Edit
const fruits = ["Apple", "Banana", "Cherry"];
const numbers = new Array(1, 2, 3, 4, 5);
2. Adding & Removing Elements
push() – Add to the End
javascript
Copy
Edit
fruits.push("Orange");  
console.log(fruits);  // ["Apple", "Banana", "Cherry", "Orange"]
pop() – Remove from the End
javascript
Copy
Edit
fruits.pop();  
console.log(fruits);  // ["Apple", "Banana", "Cherry"]
unshift() – Add to the Beginning
javascript
Copy
Edit
fruits.unshift("Mango");  
console.log(fruits);  // ["Mango", "Apple", "Banana", "Cherry"]
shift() – Remove from the Beginning
javascript
Copy
Edit
fruits.shift();  
console.log(fruits);  // ["Apple", "Banana", "Cherry"]
3. Iterating Through Arrays
forEach() – Loop Over an Array
javascript
Copy
Edit
fruits.forEach((fruit) => console.log(fruit));
// Apple
// Banana
// Cherry
4. Transforming Arrays
map() – Creates a New Array
javascript
Copy
Edit
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log(squared);  // [1, 4, 9, 16]
filter() – Returns a New Array with Filtered Values
javascript
Copy
Edit
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  // [2, 4]
reduce() – Reduces an Array to a Single Value
javascript
Copy
Edit
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);  // 10
5. Finding Elements
find() – Returns the First Matching Element
javascript
Copy
Edit
const result = numbers.find(num => num > 2);
console.log(result);  // 3
findIndex() – Returns the Index of the First Match
javascript
Copy
Edit
const index = numbers.findIndex(num => num > 2);
console.log(index);  // 2
includes() – Checks If an Element Exists
javascript
Copy
Edit
console.log(fruits.includes("Banana"));  // true
console.log(fruits.includes("Grapes"));  // false
6. Sorting & Reversing
sort() – Sorts an Array Alphabetically
javascript
Copy
Edit
const sortedFruits = fruits.sort();
console.log(sortedFruits);  // ["Apple", "Banana", "Cherry"]
Sorting Numbers Properly
javascript
Copy
Edit
const nums = [10, 2, 5, 1];
nums.sort((a, b) => a - b);  // Ascending order
console.log(nums);  // [1, 2, 5, 10]
reverse() – Reverses an Array
javascript
Copy
Edit
const reversed = fruits.reverse();
console.log(reversed);  // ["Cherry", "Banana", "Apple"]
7. Combining & Slicing
concat() – Merges Two Arrays
javascript
Copy
Edit
const moreFruits = ["Grapes", "Peach"];
const combined = fruits.concat(moreFruits);
console.log(combined);
slice() – Extracts a Section Without Modifying the Original
javascript
Copy
Edit
const someFruits = fruits.slice(1, 3);
console.log(someFruits);  // ["Banana", "Cherry"]
splice() – Modifies an Array (Add/Remove Items)
javascript
Copy
Edit
fruits.splice(1, 1, "Pineapple");  
console.log(fruits);  // ["Apple", "Pineapple", "Cherry"]
8. Converting Arrays to Strings
join() – Converts to String with a Separator
javascript
Copy
Edit
const fruitString = fruits.join(", ");
console.log(fruitString);  // "Apple, Banana, Cherry"`