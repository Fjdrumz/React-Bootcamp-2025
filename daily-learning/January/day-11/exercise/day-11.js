// In JavaScript, arrays and objects are fundamental data structures that store collections of values. JavaScript provides a variety of built-in methods to manipulate, interact with, and perform operations on arrays and objects. These methods are called "methods" because they are functions that are associated with a particular object type (arrays or objects). The term "method" refers to functions that are designed to operate on instances of a specific data type or object.

// ### JavaScript Array Methods

// Arrays in JavaScript are ordered collections of values. Array methods allow you to manipulate these collections in various ways. Some commonly used array methods include:

// 1. **`push()`**  
//    - Adds one or more elements to the end of an array and returns the new length of the array.
//    - Example:  
//      ```javascript
//      let arr = [1, 2, 3];
//      arr.push(4);  // arr becomes [1, 2, 3, 4]
//      ```

// 2. **`pop()`**  
//    - Removes the last element from an array and returns that element.
//    - Example:  
//      ```javascript
//      let arr = [1, 2, 3];
//      let last = arr.pop();  // last is 3, arr becomes [1, 2]
//      ```

// 3. **`shift()`**  
//    - Removes the first element from an array and returns that element.
//    - Example:  
//      ```javascript
//      let arr = [1, 2, 3];
//      let first = arr.shift();  // first is 1, arr becomes [2, 3]
//      ```

// 4. **`unshift()`**  
//    - Adds one or more elements to the beginning of an array and returns the new length of the array.
//    - Example:  
//      ```javascript
//      let arr = [1, 2, 3];
//      arr.unshift(0);  // arr becomes [0, 1, 2, 3]
//      ```

// 5. **`map()`**  
//    - Creates a new array by applying a function to each element of the original array.
//    - Example:  
//      ```javascript
//      let arr = [1, 2, 3];
//      let squared = arr.map(x => x * x);  // squared becomes [1, 4, 9]
//      ```

// 6. **`filter()`**  
//    - Creates a new array with all elements that pass a test implemented by a provided function.
//    - Example:  
//      ```javascript
//      let arr = [1, 2, 3, 4, 5];
//      let even = arr.filter(x => x % 2 === 0);  // even becomes [2, 4]
//      ```

// 7. **`forEach()`**  
//    - Executes a provided function once for each element in the array.
//    - Example:  
//      ```javascript
//      let arr = [1, 2, 3];
//      arr.forEach(x => console.log(x));  // logs 1, 2, 3
//      ```

// 8. **`reduce()`**  
//    - Applies a function to reduce the array to a single value (accumulation of values).
//    - Example:  
//      ```javascript
//      let arr = [1, 2, 3];
//      let sum = arr.reduce((acc, curr) => acc + curr, 0);  // sum becomes 6
//      ```

// ### JavaScript Object Methods

// Objects in JavaScript are collections of key-value pairs, where the keys are strings (or symbols), and the values can be any type of data. JavaScript also offers built-in methods to work with objects. Some common object methods include:

// 1. **`Object.keys()`**  
//    - Returns an array of a given object's property names (keys).
//    - Example:  
//      ```javascript
//      let obj = { a: 1, b: 2 };
//      let keys = Object.keys(obj);  // keys becomes ['a', 'b']
//      ```

// 2. **`Object.values()`**  
//    - Returns an array of a given object's property values.
//    - Example:  
//      ```javascript
//      let obj = { a: 1, b: 2 };
//      let values = Object.values(obj);  // values becomes [1, 2]
//      ```

// 3. **`Object.entries()`**  
//    - Returns an array of a given object's enumerable string-keyed property [key, value] pairs.
//    - Example:  
//      ```javascript
//      let obj = { a: 1, b: 2 };
//      let entries = Object.entries(obj);  // entries becomes [['a', 1], ['b', 2]]
//      ```

// 4. **`Object.assign()`**  
//    - Copies the values of all enumerable properties from one or more source objects to a target object.
//    - Example:  
//      ```javascript
//      let obj1 = { a: 1 };
//      let obj2 = { b: 2 };
//      let combined = Object.assign({}, obj1, obj2);  // combined becomes { a: 1, b: 2 }
//      ```

// 5. **`hasOwnProperty()`**  
//    - Checks if an object has a particular property as its own (not inherited).
//    - Example:  
//      ```javascript
//      let obj = { a: 1 };
//      console.log(obj.hasOwnProperty('a'));  // true
//      ```

// 6. **`delete` operator**  
//    - Removes a property from an object.
//    - Example:  
//      ```javascript
//      let obj = { a: 1 };
//      delete obj.a;  // obj becomes {}
//      ```

// ### Why Are They Called "Methods"?

// The reason these functions are referred to as "methods" is due to their association with specific objects (arrays or objects). In JavaScript, functions that are properties of an object are called methods. Since arrays and objects are both considered types of objects in JavaScript, the functions that operate on them are referred to as methods of these object types.

// For example:
// - `push()` is a method of the Array object.
// - `hasOwnProperty()` is a method of the Object prototype.

// In essence, methods are simply functions that "belong" to objects and operate on them. They allow you to interact with and modify the state or behavior of the objects to which they are attached.