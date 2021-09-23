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


// =========== Descending Order ============
// Your task is to make a function that can take any non - negative integer as an argument 
// and return it with its digits in descending order.Essentially, rearrange the digits to create 
// the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

// function descendingOrder(n){
// return Number(String(n).split("").sort().reverse().join(""));
// }

// console.log(descendingOrder(111));
// console.log(descendingOrder(15));
// console.log(descendingOrder(1021));
// console.log(descendingOrder(123456789));



//  ====== Vowel Count =====
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//     const array = str.match(/[aeiou]/gi);
//     if (array !== null) {
//     return array.length;
//   };
//   return 0;
// }

// console.log(getCount("my pyx"));