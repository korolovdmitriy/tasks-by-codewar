// ======= Moving Zeros To The End =======
// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

// moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]) // returns[false,1,1,2,1,3,"a",0,0]

// var moveZeros = function (arr) {
//     for (let i = arr.length -1; i >= 0; i -= 1) {
//       if (arr[i] === 0) {
//       arr.push(arr[i]);
//       arr.splice(i, 1);
//         }
//     };
//    return arr;
// }

// console.log("result", moveZeros([1,2,0,1,0,1,0,3,0,1]));



// ======= Human Readable Time =======
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// function humanReadable(seconds) {
//     const hours = Math.floor(seconds / 3600);
//     const modHours = String(hours).padStart(2, 0);

//     const minutesInSeconds = (seconds - hours * 3600);
//     const minutes = Math.floor(minutesInSeconds / 60);
//     const modMinutes = String(minutes).padStart(2, 0);

//     const second = minutesInSeconds % 60;
//     const modSeconds = String(second).padStart(2, 0);

//     return `${modHours}:${modMinutes}:${modSeconds}`
// }

// console.log(humanReadable(0));
// console.log(humanReadable(5));
// console.log(humanReadable(60));
// console.log(humanReadable(86399));
// console.log(humanReadable(359999));



// ======= Simple Pig Latin =======
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
// Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// function pigIt(str){
//     let arrayOfStr = str.split(" ");
//     console.log(arrayOfStr);
//     for (let i = 0; i < arrayOfStr.length; i++) {
//         if (/[,.?!\-]/.test(arrayOfStr[i])) {
//             continue;
//         };
//         let arrayOfWord = arrayOfStr[i].split("");
//         arrayOfWord.push(arrayOfWord[0], "ay");
//         arrayOfWord.shift();
//         arrayOfStr[i] = arrayOfWord.join("");
//         console.log(arrayOfWord);
//     };

//     return arrayOfStr.join(" ");
// }

// console.log(pigIt('Hello world !'));

// Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
// Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')




// ======= First non-repeating character =======
// Write a function named first_non_repeating_letter that takes a string input,
// and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't',
// since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper - and lowercase letters are considered the same character,
// but the function should return the correct case for the initial letter.For example,
// the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.


// === FIRST SOLUTION ===
// function firstNonRepeatingLetter(s) {
//     const array = s.split("");

//     for (let i = 0; i < array.length; i++) {
//         let count = 0;
//         for (let x = 0; x < array.length; x++) {
//             if (array[i].toLowerCase() === array[x].toLowerCase() && i !== x) {
//                 count ++;
//             };            
//         };

//         if (count === 0) {
//             return array[i];
//         }
//     };
// return "";
// }


// === BEST SOLUTION ===
// function firstNonRepeatingLetter(s) {
//     for (const i in s) {
//         if (s.match(new RegExp(s[i], "gi")).length === 1) {
//             return s[i];
//         }
//     }
//    return ""; 
// }


// console.log(firstNonRepeatingLetter('a'));
// console.log(firstNonRepeatingLetter('streSS'));
// console.log(firstNonRepeatingLetter('moonmen'));

// Test.assertEquals(firstNonRepeatingLetter('a'), 'a');
// Test.assertEquals(firstNonRepeatingLetter('stress'), 't');
// Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e');


// ======= Pete, the baker =======
// Pete likes to bake some cakes. He has some recipes and ingredients. 
// Unfortunately he is not good in maths.Can you help him to find out, 
// how many cakes he could bake considering his recipes ?
// Write a function cakes(), which takes the recipe (object)
//  and the available ingredients(also an object) and returns the 
// maximum number of cakes Pete can bake(integer).
// For simplicity there are no units for the amounts(e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
// Ingredients that are not present in the objects, can be considered as 0.
// Examples:
// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
// ALGORITHMS




// ======= Valid Parentheses =======
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. 
// The function should return true if the string is valid, and false if it's invalid.
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// function validParentheses(parens){
//     let count = 0;
//     for (let i = 0; i < parens.length; i++) {
//         if (parens[i] === "(") {
//             count ++;
//         } else {
//             count--;
//         };
//         if (count < 0) {
//             return false;
//         };
//     };
//     if (count === 0) {
//         return true;
//     };
//     return false;
// }

// console.log(validParentheses("()"));
// console.log(validParentheses( "())" ));

// Test.assertEquals(validParentheses( "()" ), true);
// Test.assertEquals(validParentheses( "())" ), false);