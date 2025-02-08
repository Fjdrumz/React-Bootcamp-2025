// use a for ... of loop to iterate over this array

// const colors = ["red", "green", "blue"];

// for (color of colors){
//     console.log(color);
// }


// iterating over a string 

// const strings = "hey i ama string!";

// for (string of strings){
//     console.log(string);
// }



// writer a javascript program that prints numbers from 1 to 50
// hovever: 
        // For multiples of 3 , print 'Fizz'
        // For multiples of 5 , print 'Buzz'
        // For multiples of 3 and 5, print 'FizzBuzz'

for (i = 1; i <= 50; i++){
    if ((i % 3) === 0){
        console.log("Fizz");
    }else if ((i % 5) === 0){
        console.log("Buzz");
    }else if (((i % 3) === 0) && ((i % 5) === 0)){
        console.log("FizzBuzz");
    }
}


// write a javascript program that finds the sum of numbers from 1 to 100 using a for loop


let totalSum = 0;

for (i = 0; i <= 100; i++){
    totalSum += i;
    // console.log(totalSum)
}

console.log(totalSum);