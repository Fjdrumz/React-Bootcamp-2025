 // Task 1 create an array of proucts available in a store
 const productsInStore = ['shoes', 'bags', 'watches', 'hats'];

 // 1. Add two new products
 
 // productsInStore.push('gloves', 'scarves')
 // (...) is a spread operator and its used to expand or create a copy of an array without modifying it. 
 
 // benefits
 // Benefits of Using the Spread Operator:
     // 1.	Non-destructive: It doesn’t modify the original array.
     // 2.	Clean Syntax: Easy to read and concise.
     // 3.	Versatile: Useful for copying, merging arrays, or adding new elements.
 
 // const aNewWay = [`scarves`, `gloves`, ...productsInStore];
 
 //  const newArray = [...productsInStore];
 
 //  console.log(aNewWay[3])
 
 //. 2. Remove the first product from the list.
 const shiftArray = productsInStore[0];
  productsInStore.shift([0])
  console.log()
 
 // 3. Sort the products alphabetically
 // newArray.sort();
 // console.log(newArray)
 
 // 4. Find and log the index of watches
 // console.log(productsInStore[3])
 
 // 5. Filter out all products that starts with letter s
 // const toFilter = productsInStore.filter(productsInStore => productsInStore.startsWith("s"));
 // console.log(toFilter);
 // console.log(productsInStore)
 
 // Task 2 Create an object called student with the following details
 // const student = {
 //     name: 'John',
 //     age: 24,
 //     subject:['html', 'css', 'JavaScript']
 //   };
   
   // 1. Add a new key-value pair: 
 //   student.grade = 'A+'
   // console.log(student)
   
   // 2. Remove the age property
 //   delete student.age; 
   // console.log(student);
   
   // 3. Use Object.key() to log all the properties of the student object.
   // const keys = Object.keys(student);
   // console.log(keys);
   
   // 4. Use Object.value() to log all the values of the student object.
   // const values = Object.values(student)
   // console.log(values);
   
   // 5. Use a for...in loop to print the key-value pairs in the format: key: value.
   // for (const key in student) {
   //   console.log(${key}: ${student[key]});
   // }