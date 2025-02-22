const definitionOfThis = 
    `In JavaScript, this refers to the object that is currently executing the function. Unlike in many other programming languages, where this always refers to the instance of a class, JavaScript determines the value of this based on the function's invocation context. This means that this can refer to different objects depending on how a function is called.
    `;
const exampleCode = `
    const car = {
        brand: "Toyota",
        getBrand: function() {
        console.log(this.brand);
        }
    };
    car.getBrand(); // Output: Toyota
`;

const exampleObject = {
    name: `John`,
    age: 30,
    city: `New York`
};

//bracket notation
exampleObject[`name`];
exampleObject[`age`];
exampleObject[`city`];

//dot notation
exampleObject.name;
exampleObject.age;
exampleObject.city;

//3.	What is an object method? Provide an example.
const myAnswer = `
    An object method is a function that is stored as a property of an object. It is a function that is associated with an object, and it can be called using the object's name followed by a dot (.) and the method name. Object methods allow objects to perform actions and interact with other objects.
`;

const exampleObject2 = {
    name: `John`,
    age: 30,
    city: `New York`,
    myFunction: () => {
       console.log(`Hello, my name is ${exampleObject2.name}.`);
    }
};
exampleObject2.myFunction();



//coding questions

//Answer 1
const person = {
    name: `muna`,
    age: 30,
    gender: `female`,
    greet:()=>
    {
        console.log(`Hello, my name is ${person.name}.`);
    }
}

person.greet(); 


//Answer 2
const car = {
    brand: `Toyota`,
    model: `Camry`,
    year: 2020,
    getGetCarInfo: () =>{
        console.log(`This car is a ${car.year} ${car.brand} ${car.model}.`);
    }
}
console.log(car);
car.color = `red`;

console.log(car);