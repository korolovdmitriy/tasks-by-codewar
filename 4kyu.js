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