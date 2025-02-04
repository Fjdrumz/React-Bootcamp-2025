//class work

//Question 1 :
//write a program that checks if a number is even or not



// const numberChecker = function myFunction(number) {
//     const userInput = 5.45;
    
//     const checkNumber = Math.round(userInput);

//     if(checkNumber % 2 === 0 && checkNumber >= 1){
//         console.log(`${checkNumber} is an Even number`);
//     }else if(checkNumber % 2 !== 0 && checkNumber >= 1){
//         console.log(`${checkNumber} is an Odd number`);
//     }
//     else if (checkNumber < 1){
//         console.log(`${checkNumber} is not a positive whole number`);
//     }
// }


// numberChecker();


//Question 2



const scoreChecker = function myScore (){

    const userScore = 60;

    if (userScore >= 90 && userScore <= 100){
        console.log(`Execellent`);
    }else if (userScore >= 70 && userScore <= 89 ){
        console.log(`Good`);
    }else if (userScore >= 50 && userScore <= 69 ){
        console.log(`Average`);
    }else if (userScore < 50 ){
        console.log(`Fail`);
    }

}

scoreChecker();



//question 3

const fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("Apples are red.");
        break;
    case "banana":
        console.log("Bananas are yellow.");
        break;
    case "grape":
        console.log("Grapes are purple.");
        break;
    default:
        console.log("Unknown fruit color.");
}


//Assignment

//1 

const currentHour = 12;

if (currentHour >= 6 && currentHour < 12){
    console.log(`Good Morning!`);
}else if (currentHour >= 12 && currentHour < 18){
    console.log(`Good afternoon!`);
}else if (currentHour >= 18 && currentHour < 24){
    console.log(`Good evening!`);
}else{
    console.log(`It is Night Time!`);
}


const numberLine = 0.8;

if (numberLine > 0){
    console.log(`${numberLine} is a positive number`);
}else {
    console.log(`${numberLine} is a negative number`);
}