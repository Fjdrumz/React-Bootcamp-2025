// Class Work
// Task 1: Identifying Errors
// What type of error will each of the following produce?
// 1.	console.log(undefinedVariable);----- Reference Error
// 2.	"Hello".pop();------ Type Error
// 3.	const obj = {}; console.log(obj.name.age);----Type Error
// 4.	new Array(-1);---- Range error
// 5.	eval("console.log(Hello)");----reference error

// Task 2: Implementing Try-Catch
// Write a program that:
// •	Asks the user to enter a number.
// •	Throws an error if the input is not a valid number.
// •	Catches the error and displays an appropriate message.



try {
    const input = prompt("Enter a number:"); 
    const number = Number(input); 
  
    if (isNaN(number)) { 
      throw new Error("Invalid input. Please enter a valid number.");
    }
  
  
  } catch (error) {
    console.error(error.message);
  }


//ASSIGNMENT



function divide(a, b) {
    try {
      if (b === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return a / b; 
    } catch (error) {
      console.error(error.message); 
    }
  }
  

  console.log(divide(10, 0)); 
