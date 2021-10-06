// ====== Sum Strings as Numbers =====
// Given the string representations of two integers, return the string representation of the sum 
// of those integers.
// For example:
// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".


// function sumStrings(a, b) {
    
//     if (a < 9007199254740992 - 1 || b < 9007199254740992 - 1)
//     { return (a * 1 + b * 1) + '' };

//     const zeroString = new Array(Math.abs(a.length - b.length) + 1).join("0");
//     a.length > b.length ? b = zeroString + b : a = zeroString + a;
//     const aArray = a.split("").reverse();
//     const bArray = b.split("").reverse();
    
//     let d = 0;
//     let num = 0;
   
//     const result = aArray.reduce((resultArray, element, index) => {
//         num = element * 1 + bArray[index] * 1 + d;
        
//         if (num >= 10) {
//             d = 1;
//             num = num - 10;
//         } else {
//             d = 0;
//         }
//         return [...resultArray, num];
//     }, [])
    
    
//    return d > 0 ? d + result.reverse().join("") : result.reverse().join("");
// }


// console.log(sumStrings('123', '456')); // 579
// console.log(sumStrings('00103', '08567'));
// console.log(sumStrings('712569312664357328695151392',
//     '8100824045303269669937'));



// ====== Next bigger number with the same digits =======
// We need to sum big numbers and we require your help.
// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

// function add(a, b) {
//    if (a < 9007199254740992 - 1 || b < 9007199254740992 - 1)
//     { return (a * 1 + b * 1) + '' };

//     const zeroString = new Array(Math.abs(a.length - b.length) + 1).join("0");
//     a.length > b.length ? b = zeroString + b : a = zeroString + a;
//     const aArray = a.split("").reverse();
//     const bArray = b.split("").reverse();
    
//     let d = 0;
//     let num = 0;
   
//     const result = aArray.reduce((resultArray, element, index) => {
//         num = element * 1 + bArray[index] * 1 + d;
        
//         if (num >= 10) {
//             d = 1;
//             num = num - 10;
//         } else {
//             d = 0;
//         }
//         return [...resultArray, num];
//     }, [])
    
    
//    return d > 0 ? d + result.reverse().join("") : result.reverse().join("");
// }

// console.log(add("1", "1"));// "2";
// console.log(add("123", "456")); // "579";
//     console.log(add("888", "222")); // "1110";
//     console.log(add("1372", "69")); //"1441");
//     console.log(add("12", "456")); // "468";


// ======== Most frequently used words in a text =======
// Write a function that, given a string of text(possibly with punctuation and line - breaks), 
// returns an array of the top - 3 most occurring words, in descending order of the number of occurrences.
// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top - 2 or top - 1 words should be returned,
// or an empty array if a text contains no words.

// function topThreeWords(text) {
//         let resultObj = [];
//     let sortArray = text
//         .replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "")
//         .toLowerCase()
//         .split(" ")
//         .filter(str => str !== "");
//     if (sortArray[0] === "'") return [];

//     for (let i = 0; i < sortArray.length;) {
//         resultObj.push({
//             word: sortArray[0],
//             count: sortArray.filter((str, i, array) => str === array[0]).length
//         });
//         sortArray = sortArray.filter((str, i, array) => str !== array[0]);
//     };

//     resultObj = resultObj.sort((a, b) => b.count - a.count).slice(0, 3);
//     const resultArray = resultObj.reduce((total, element) => {
//         return [...total, element.word]
//     }, [])
    
//     return resultArray;
// }

// console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); //['e','ddd','aa'])
// console.log(topThreeWords("  //wont won't won't ")); // ["won't", "wont"])
// console.log(topThreeWords("  , e   .. ")); //["e"])
// console.log(topThreeWords("'")); //[])


//========= Remove Zeros ==========
// Write a function that takes an array of values and moves all elements that are zero to the end of the array,
// otherwise preserving the order of the array.The zero elements must also maintain the order in which they occurred.
// For example, the following array
// [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]
// is transformed into
// [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
// Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.
// You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any 
// Array.prototype or Object.prototype methods such as .shift(), .push(), etc

// function removeZeros(array) {
//     let temp;
//     for (let i = array.length; i >= 0; i--) {
//         if (array[i] === 0 || array[i] === "0") {
//             for (let x = i; x < array.length-1; x++) {
//                 if (array[x + 1] !== 0 && array[x + 1] !== "0") {
//                     temp = array[x];
//                     array[x] = array[x + 1];
//                     array[x + 1] = temp;
//                 };
//             };
//         };
//     };
//   return array;
// }



// console.log(removeZeros([7, 2, 3, 0, 4, 6, "0", 0, 13, 0, 78, 0, 0, 19, 14]));
// console.log(removeZeros([ 0, 0, 0, 1, 2, 3 ]));
// console.log(removeZeros([ 1, null, '5', '0', '2', 0, 8, 6, null, false ]));