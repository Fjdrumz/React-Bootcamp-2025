// // function fizzBuzz (number){
// //     if (number % 3 === 0 && number % 5 === 0){
// //         return `FizzBuzz`;
// //     }else if(number % 3 === 0){
// //         return `Fizz`;
// //     }else if(number % 5 === 0){
// //         return `Buzz`;
// //     }else{
// //         return number;
// //     }
// // }
// // console.log(fizzBuzz(90));



// // function evenNumbers (array){
// //     for (const number of array){
// //         if (number % 2 === 0){
// //             console.log(number);
// //         }
// //     }
// // }
// // evenNumbers([1,2,3,4,5,6,7,8,9])


// // function oddNumbers (array){
// //     for (const number of array){
// //         if (number % 2 != 0){
// //             console.log(number);
// //         }
// //     }
// // }
// // oddNumbers([1,2,3,4,5,6,7,8,9])

//             //Factory Functions.   
//             const dog = {
//                 name: 'Max',
//                 breed: 'Dachshund',
//                 age: 5,
//                 weightInPounds: 12,
//                 eat: function(){
//                     console.log('Chomp!');
//                 },
//                 bark: function(){
//                     console.log('woof!');
//                 }
//             }
            
//             //to dupicate instead of just writing the code all over again .
            
//             function getDog(name, breed, age , weightInPounds){
//                 return{
//                     name,
//                     breed,
//                     age,
//                     weightInPounds,
//                     eat(){
//                         console.log('Chomp!');
//                     },
//                     bark: function(){
//                         console.log('woof!');
//                     }
//                 }
//             }
            
//             const anotherDog = getDog('Marley', 'Chocolate Lab', 3, 60);
//             console.log(anotherDog);
            
            
            
//             function Dog (name, breed, age, weightInPounds){
//                 this.name = name;
//                 this.breed = breed;
//                 this.age =age;
//                 this.weightInPounds = weightInPounds;
            
//                 this.eat = function (){
//                     console.log(this.name + ': Chomp!');
//                 }
            
//                 this.bark = function (){
//                     console.log(this.name + ': woof!');
//                 }
//             }            