// ======== Integer Difference  ======== 
// Write a function that accepts two arguments: an array/list of integers and another integer (n).
// Determine the number of times where two integers in the array have a difference of n.

// const intDiff = (arr, n) => {

//   let result = 0;

//   for (let i = 1; i < arr.length; i ++){
//     for (let x = 0; x < i; x ++) {
//       if (Math.abs(arr[x] - arr[i]) === n){
//       result ++;
//      }
//   }
//   }

//   return result;
// }



// ======== Find the divisors! ========
// Create a function named divisors / Divisors that takes an integer n > 1 
// and returns an array with all of the integer's divisors(except for 1 and the number itself), 
// from smallest to largest.If the number is prime return the string '(integer) is prime'(null in C#)
// (use Either String a in Haskell and Result < Vec < u32 >, String > in Rust).

// function divisors(integer) {
//   let arr = [];
//   let count = 0;

//   for (let i = 1; i < 10 || i < integer; i++) {
//     if (integer % i === 0){
//       if (i === 1 || i === integer) {
//         continue;
//       }
//       arr.push(i);
//       count ++;
//     }
//   }

//   if (count === 0) {
//     return  `${integer} is prime`;
//   }

//   return arr;
// }

// ======== Is this a triangle? ========
// Implement a method that accepts 3 integer values a, b, c.The method should return true
// if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

// function isTriangle(a,b,c) {
//   if (a + b > c && b + c > a && a + c > b){
//   return true;
// }
//    return false;
// }