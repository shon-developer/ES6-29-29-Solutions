// todo Use the Spread Operator to Evaluate Arrays In-Place

//? Copy all contents of arr1 into another array arr2 using the spread operator.

const arr = [66, 98, 31, 76, 48];
const biggestNumber = Math.max(...arr);

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1]; // Change this line

console.log(arr2);

console.log(biggestNumber);
