// let arr = [10, 20, 30, 40, 50];
// console.log(arr); // Output: [10, 20, 30, 40, 50]


// let arr = [10, 20, 30, 40, 50];
// console.log(arr[0]); // Output: 10 (First element)
// console.log(arr[2]); // Output: 30 (Third element)


// let arr = [10, 20, 30, 40, 50];
// console.log(arr.length); 
// Output: 5 (Number of elements in the array)



//Iterating Over an Array with for Loop:
// let arr = [10, 20, 30, 40, 50];
// for (let i = 0; i < arr.length; i++) {   
//     console.log(arr[i]);
// }
// Output: 10 20 30 40 50


// let arr = [10, 20, 30, 40, 50];
// arr.forEach(function(item) {         //Iterating Over an Array with forEach Method
//     console.log(item);
// });
// Output: 10 20 30 40 50


// let arr = [1, 2, 3, 4, 5];
// let squared = arr.map(function(num) {       //Mapping an Array
//     return num * num;
// });
// console.log(squared); // Output: [1, 4, 9, 16, 25]

// Filtering an Array:
// let arr = [1, 2, 3, 4, 5, 6];
// let evenNumbers = arr.filter(function(num) {
//     return num % 2 === 0;
// });
// console.log(evenNumbers); // Output: [2, 4, 6]


//  Reducing an Array:
// let arr = [1, 2, 3, 4];
// let sum = arr.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);
// console.log(sum); // Output: 10 (Sum of the array elements)

// Spreading Array (Spread Operator):

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5, 6];
// console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]

// Combining Arrays with concat:
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let combined = arr1.concat(arr2);
// console.log(combined); // Output: [1, 2, 3, 4, 5, 6]


// Checking if an Element Exists in an Array:
let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // Output: true
console.log(arr.includes(6)); // Output: false

