const numbers = [1, 2, 3];
numbers.forEach((num, index, arr) => {
  arr[index] = num * 2;  // Modify the original array
});

console.log(numbers);
