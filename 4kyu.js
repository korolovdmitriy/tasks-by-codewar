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