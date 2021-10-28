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


// function cakes(recipe, available) {
//     const recipeIngredients = Object.keys(recipe);
//     const recipeAmounts = Object.values(recipe);
//     const availableIngredients = Object.keys(available);
//     const availableAmouts = Object.values(available);
//     let count = 0;
//     let totalCount = 0;

//     for (const ingredient of recipeIngredients) {
//         if (availableIngredients.includes(ingredient)) {
//             count = Math.floor(availableAmouts[availableIngredients.indexOf(ingredient)] /
//                 recipeAmounts[recipeIngredients.indexOf(ingredient)]);
            
//             if ((count >=1 && count < totalCount) || (count >=1 && totalCount === 0)) {
//                 totalCount = count;
                
//             };
//             if (count === 0) {
//                 return 0;
//             };
//             continue;
//         };
//         return 0;
//     };
    
//     return totalCount;
// }


// ======= SECOND SOLUTION ======

// function cakes(recipe, available) {
//     let result = [];
//     for (const key in recipe) {
//         if (available.hasOwnProperty(key)) {
//             result.push(Math.floor(available[key] / recipe[key]));
//             continue;
//         };
//         return 0;
//     };

//     return Math.min(...result);
// }


// console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }));
// console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }));
// console.log(cakes({ "apples": 3, "flour": 300, "sugar": 150, "milk": 100, "oil": 100 },
//     { "sugar": 500, "flour": 2000, "milk": 2000, "apples": 15, "oil": 20 }));



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


// ======= Where my anagrams at? =======
// What is an anagram ? Well, two words are anagrams of each other
// if they both contain the same letters.For example:
// 'abba' & 'baab' == true
// 'abba' & 'bbaa' == true
// 'abba' & 'abbba' == false
// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []


// function anagrams(word, words) {
//     const result = [];
//     for (const element of words) {
//         if (element.length === word.length) {
//             let flag = true;
//             for (let i = 0; i < word.length; i++) {
                            
//                 if (element.match(new RegExp(word[i], "g")) === null) {
//                     flag = false;
//                     continue;
//                 }
    
//                 if (word.match(new RegExp(word[i], "g")).length !== element.match(new RegExp(word[i], "g")).length) {
//                 flag = false;
//                 };
                
//             };

//             if (flag) { result.push(element); };
                    
//         };
//     };
//     return result;
// }


// console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));
// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));


// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) //=> ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) //=> ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer'])//=> []



// ======= Extract the domain name from a URL ===========
// Write a function that when given a URL as a string, parses out just the domain name and returns
// it as a string.For example:
// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"


// function domainName(url) {
//     let resultStr = [];
//     const str = url.replace("http://", "").replace("www.", "").replace("https://", "");

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === ".") {
//             return resultStr.join("");
//         }

//         resultStr.push(str[i]);
//     };

// }

//========== Best Solutin =========

// function domainName(url) {
//     const str = url.replace("http://", "")
//                    .replace("www.", "")
//                    .replace("https://", "");
//     return str.split(".")[0];
    

// }

// console.log(domainName("http://google.com"));
// console.log(domainName("http://google.co.jp"));
// console.log(domainName("www.xakep.ru"));
// console.log(domainName("https://youtube.com"));

// Test.assertEquals(domainName("http://google.com"), "google");
// Test.assertEquals(domainName("http://google.co.jp"), "google");
// Test.assertEquals(domainName("www.xakep.ru"), "xakep");
// Test.assertEquals(domainName("https://youtube.com"), "youtube");


// ====== Scramblies =======

// Complete the function scramble(str1, str2) that returns true if a portion 
// of str1 characters can be rearranged to match str2, otherwise returns false.
// Notes:
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// function scramble(str1, str2) {
//     let array = str1.split("");
//     for (const char of str2) {
//         if (!array.includes(char)) {
//             return false;
//         };
//         array.splice(array.indexOf(char), 1);
//     };
//     return true;
// }


// function scramble(str1, str2) {

//     const getCharFrequencies = str => 
//     str.split("").reduce((container, char) => {
//             (container[char] += 1) || (container[char] = 1);
//             return container;
//         }, 
//         {});
    
//     const obj1 = getCharFrequencies(str1);
//     const obj2 = getCharFrequencies(str2);

//     return (  
//          Object.entries(obj2).every((char) => obj1[char[0]] >= char[1])
//     );

// };

// console.log(scramble('scriptjavx', 'javascript')); //false)
// console.log(scramble('rkqodlw', 'world')); //true)
// console.log(scramble('cedewaraaossoqqyt', 'codewars')); //true)
// console.log(scramble('katas', 'steak')); //false);
// console.log(scramble('scriptjava', 'javascript')); //true)
// console.log(scramble('scriptingjava', 'javascript')); //true)
// console.log(scramble('scriptsjava', 'javascripts')); //true)
// console.log(scramble('jscripts', 'javascript')); //false)
// console.log(scramble('aabbcamaomsccdd', 'commas')); //true)



// ========= Regex Password Validation ===========
// You need to write regex that will validate a password to make sure it meets 
// the following criteria:
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

// function validate(password) {
//   return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z]{6,}(?!.*[!@#$%^&*.,])/g.test(password);
// }

// console.log(validate('abc'));


// ========== String incrementer =========
// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Attention: If the number has leading zeros the amount of digits should be considered.

// function incrementString(strng) {
//     const numbers = strng.match(/\d+/, "g");
//     const string = strng.match(/[^\d]+/, "g");
 
//     if (numbers === null && string === null) {
//         return "1";
//     };
//     if (numbers === null) {
//         return strng + "1";
//     };

//     const resNumber = numbers => {        
//         for (let i = numbers.length - 1; i >= 0; i--) {
    
//             if (Number(numbers[i]) !== 9) {
//                 numbers[i] ++;
//                 return numbers;
//             };

//             if (Number(numbers[i]) === 9 && i !== 0) {
//                  numbers[i] = 0;
//             };
            
//             if (Number(numbers[i]) === 9 && i === 0) {
//                numbers[i] = 0;
//                  numbers.unshift(1);
//                  return numbers;
//             };
//         };
//     };

//     if (string === null) {
//         return resNumber(numbers[0].split("")).join("");
//     };

//     return string.join("") + resNumber(numbers[0].split("")).join("");
// }

// console.log(incrementString("foobar000")); // "foobar001"
// console.log(incrementString("foo")); // foo1");
// console.log(incrementString("foobar001")); // foobar002");
// console.log(incrementString("foobar99")); // foobar100");
// console.log(incrementString("foobar099")); // foobar100");
// console.log(incrementString("")); // 1");
// console.log(incrementString("55")); // 56");



// ======= Number of trailing zeros of N! ======
// Write a program that will calculate the number of trailing zeros
// in a factorial of a given number.
// N! = 1 * 2 * 3 * ... * N
// Be careful 1000! has 2568 digits...
// For more info, see: http://mathworld.wolfram.com/Factorial.html
// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros
// Hint: You're not meant to calculate the factorial. 
// Find another way to find the number of zeros.

// function zeros (n) {
//     let result = 0;
//     let x = 1;

// while(n < 5**x) {
//   n /= 5**x;
//     result += Math.floor(n);
//     console.log(n);
//     console.log(result);
//     }
//     return result;
// }

// // console.log(zeros(0)); //0, "Testing with n = 0")
// // console.log(zeros(5)); //1, "Testing with n = 5")
// // console.log(zeros(6)); //1, "Testing with n = 6")
// console.log(zeros(30)); //7, "Testing with n = 30")


// ======= Weight for weight ======
// My friend John and I are members of the "Fat to Fit Club (FFC)".John is worried because each month a list with the weights of members is published 
// and each month he is the last on the list which means he is the heaviest.
// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list".It was decided to attribute a "weight" to numbers. 
// The weight of a number will be from now on the sum of its digits.
// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 
// "100 180 90 56 65 74 68 86 99"
// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:
// 180 is before 90 since, having the same "weight" (9), it comes before as a string.
// All numbers in the list are positive numbers and the list can be empty.
// Notes
// it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
// For C: The result is freed.


function orderWeight(strng) {

    ////// 1st solition
    // let result = [];
    // let sortRes = []
    // let strArrayOfNum = strng.split(' ');   

    // strng.split(' ').map(el => {
    //     const numOfEl = el.split('').reduce((acc, num) => acc += num * 1, 0);
    //     result.push({ num: numOfEl, value: el });
    
    // });
    // result.sort((a, b) => a.num - b.num || a.value - b.value || -(a.value - b.value)).map(el => sortRes.push(el.value));
    // return sortRes.join(' ');


    ////// 2nd solition
    function sumOfNumber(num) {
        return num.split('').reduce((acc, num) => acc += num * 1, 0);
    }
   
    return strng.split(' ').sort((a, b) => sumOfNumber(a) - sumOfNumber(b) || a - b || -(a - b)).join(' ')
};

console.log(orderWeight("103 123 4444 99 2000")) //, "2000 103 123 4444 99")
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")) //, "11 11 2000 10003 22 123 1234000 44444444 9999")


console.log(10003 > 22);
console.log(2000 >  11);
