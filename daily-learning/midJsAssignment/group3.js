// 1.	Explain the difference between function declaration and function expression with examples.

const difference = `
    A function declaration is a way of defining a function using the function keyword followed by a name. It is hoisted, meaning it can be invoked before it is defined in the code

    On the other hand, a function expression defines a function and assigns it to a variable. It is not hoisted, meaning it cannot be used before its definition
`;

// Function Declaration

sayHello(); 

function sayHello() {
    console.log("Hello!");
}

// Function Expression

const greet = function() {
    console.log("Hi There!");
};

greet();


// 2.	What is an arrow function, and how does it handle the this keyword differently from a regular function?

const arrowFunction = `
    An arrow function is a more concise way of writing a function in JavaScript. It uses the => syntax to define functions. Arrow functions do not have their own this context, so they inherit the this value from the surrounding code. This makes them particularly useful when working with callbacks and event handlers, as they can access the this value of the enclosing function.
`;


    const person = {
        name: 'John',
        greet: () => {
            console.log(`Hello, ${person.name}`);
        }
    }

    person.greet(); 

    // we cannot use the this keyword in an arrow function .



    const switchCase = `
        A switch statement in JavaScript is used to execute different blocks of code based on the value of an expression. It compares the given expression against multiple case values and executes the matching block. If no match is found, the default case is executed. Each case typically ends with a break statement to prevent fall-through to the next case.
    `;

  

    const day = "Monday";

    switch (day) {
        case "Monday":
            console.log("Start of the workweek.");
            break;
        case "Wednesday":
            console.log("Midweek day.");
            break;
        case "Friday":
            console.log("Weekend is near!");
            break;
        default:
            console.log("It's a regular day.");
    }


  
    const isEven  = (num)=>{
        if(num % 2 === 0){
            return "Even";
        }else{
            return "Odd";
        }
    }
    console.log(isEven(51));
    console.log(isEven(58));
    console.log(isEven(1));
    console.log(isEven(61));


 
   
    const gradeCalculator = (grade) => {
      
        if (grade >= 90) {
            return "A";
        }else if (grade >= 80 && grade <= 89) {
            return "B";
        }else if (grade >= 70 && grade <= 79) {
            return "C";
        }else if (grade < 70){
            return "F";
        }
    }

    console.log(gradeCalculator(95));
    console.log(gradeCalculator(85));
    console.log(gradeCalculator(75));
    console.log(gradeCalculator(65));


    // 3.	Use a switch statement to create a function dayOfWeek() that returns the day of the week based on a number (1 for Monday, 2 for Tuesday, etc.).

    const dayOfWeek = (num) => {
        switch (num) {
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
            case 7:
                return "Sunday";
            default:
                return "Invalid number! Please enter a number between 1 and 7.";
        }
    };
    
    console.log(dayOfWeek(1)); 
    console.log(dayOfWeek(5));
    console.log(dayOfWeek(8)); 
    