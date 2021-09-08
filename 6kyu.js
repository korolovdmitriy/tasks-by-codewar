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