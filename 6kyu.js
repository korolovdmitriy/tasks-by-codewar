// ======== Array.diff ========
// Your goal in this kata is to implement a difference function, 
// which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// function arrayDiff(a, b) {
//   let result = [];
//   if (b.length === 0) {
//     return a;
//   }

//   for (let i = 0; i < b.length; i++) {
//     for (let x = 0; x < a.length; x++) {
//       if (b[i] === a[x]) {
//         a.splice(x, 1);
//         x --;
//       }
//     }
//   }

//     return a;
// }


// ======== Sum of Digits / Digital Root ========
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n.If that value has more than one digit, 
// continue reducing in this way until a single - digit number is produced.The input will be a non - negative integer.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// function digital_root(n) {
//   let result = 0;

//   while (n > 9) {
//   let arrayNumber = n.toString().split("");
//   for (let digit of arrayNumber) {
//     result += Number(digit);
//   }
//   n = result;

// if (result > 9) {
//     result = 0;
// }
// }

//   return n;
// }


// ======== Who likes it? ========
// You probably know the "like" system from Facebook and other pages.People can "like" blog posts, pictures or other items. 
// We want to create the text that should be displayed next to such an item.
// Implement the function likes which takes an array containing the names of people that like an item. 
// It must return the display text as shown in the examples:

// likes [] -- must be "no one likes this"
// likes ["Peter"] -- must be "Peter likes this"
// likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
// likes["Alex", "Jacob", "Mark", "Max"]-- must be "Alex, Jacob and 2 others like this"

// For 4 or more names, the number in and 2 others simply increases.


// function likes(names) {
//  switch (names.length) {
//      case 0:
//      return "no one likes this";
     
//      case 1:
//      return `${names[0]} likes this`;
     
//      case 2:
//      return `${names[0]} and ${names[1]} like this`;
     
//      case 3:
//      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
     
//      default:
//      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//  }
// }


// ======== Find the odd int ========
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1] should return 4, because it appears 1 time(which is odd).

// function findOdd(A) {
//   let count = 0;
//   for (const element of A) {
    
//     for (let i = 0; i < A.length; i ++) {

//       if (element === A[i]) {
//           count ++;
//       }
//     }
    
//     if (count % 2 !== 0) {
//       return element;
//     }
    
//     count = 0;
    
//   }
  
//   return 0;
// }


// ======== Create Phone Number ========
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

// function createPhoneNumber(numbers){
//   return `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers.slice(6).join("")}`;
// }