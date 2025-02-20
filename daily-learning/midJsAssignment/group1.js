//Explain the difference between let, const and var with examples.

const letVarConst = `
    var is function-scoped, meaning it is accessible throughout the function where it is declared. It can be re-declared and updated, but it is hoisted with an initial value of undefined, which can cause unexpected issues.

    let is block-scoped, meaning it is only accessible within the block {} where it is defined. It can be updated but not re-declared in the same scope. Unlike var, it is hoisted but remains uninitialized, so accessing it before declaration results in an error.

    const is also block-scoped like let, but it cannot be reassigned or re-declared. It must be initialized when declared and remains constant. It is hoisted but stays uninitialized, meaning it also throws an error if accessed before being declared.
`;

// what are primitive data types in javascript ? list them with examples

const premitiveDataTypes = `

    Primitive data types in JavaScript are the basic types of values that are immutable (cannot be changed). They include:  

1. Number  Represents numeric values (integers and floating points).  
   example: let number = 34.566;

2. string  Represents text enclosed in quotes.  
   example: let greeting = 'Hello';

3. Boolean Represents true or false values.  
   let isRaining = false;

4. Undefined  A variable that has been declared but not assigned a value.  
    let name;
    console.log(name)
  

5. Null Represents an intentional absence of value.  
   let nothing = null;



6. BigInt Used for very large numbers beyond Number limits.  
   let bigNumber = 12345670n;
`;

//Explain the difference between .map() and .forEach() methods.

const mapAndForEach = `

    The .map() and .forEach() methods both iterate over arrays, but they serve different purposes. .map() creates and returns a **new array** with modified values, making it ideal for transformations without changing the original array. On the other hand, .forEach() simply executes a function on each element without returning anything, making it useful for actions like logging or modifying existing data. If you need a new array, use .map(), but if you only need to perform an operation, use .forEach().

`;


//Coding Questions:

//1.	Create an array of 10 fruits. Use .map() to return an array of their lengths.

const fruits = [`Apple`, `Banana`, `Cherry`, `Mango`, `Pineapple`, `Grapes`, `Strawberry`, `Blueberry`, `Orange`, `Watermelon`];

const fruitLengths = fruits.map((fruit)=> {return fruit.length});

console.log(fruitLengths);

//2.	Use a for...of loop to print all numbers from 1 to 20.

const numbers = [];

for (let i = 1; i <= 20; i++){
    numbers.push(i);
}

// console.log(numbers);

for (num of numbers){
    console.log(num);
}


//3.	Create an array of numbers and use .filter() to return only the even numbers.
const returnArray = [];

const returnEvenNumbers = numbers.forEach((even)=>{
    if(even % 2 === 0){
        returnArray.push(even);
    }
});

console.log(returnArray);