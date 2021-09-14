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