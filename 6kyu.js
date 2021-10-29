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

// ======== Multiples of 3 or 5 ========
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0(for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

// function solution(number){
//   let sum = 0;

//   if (number < 0) {
//     return 0;
//   }

//   for (let i = 1; i < number; i++) {

//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// ======== Stop gninnipS My sdroW! ========
// Write a function that takes in a string of one or more words, and returns the same string,
// but with all five or more letter words reversed(like the name of this kata).
// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
// Examples:
// spinWords("Hey fellow warriors") => "Hey wollef sroirraw"
// spinWords("This is a test") => "This is a test"
// spinWords("This is another test") => "This is rehtona test"

// function spinWords(string){
//     let array = string.split(" ");
//     let result = [];

//     for (const element of array) {

//     if (element.length >= 5) {
//         result.push(element.split("").reverse("").join(""));
//         continue;
//         }
//         result.push(element);
//     }

//     return result.join(" ");
// }

// console.log(spinWords("Welcome"));

// ======== Find The Parity Outlier ========
// You are given an array(which will have a length of at least 3,
// but could be very large) containing integers.The array is either entirely
// comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// function findOutlier(integers) {
//     let evenNumbers = 0;
//     let oddNumbers = 0;
//     let resultEven = 0;
//     let resultOdd = 0;

//     for (const element of integers) {

//         if (element % 2 === 0) {
//             evenNumbers++;
//             resultEven = element;
//             continue;
//         }

//         oddNumbers++;
//         resultOdd = element;
//     }

//     if (evenNumbers > oddNumbers) {
//         return resultOdd;
//     }

//     return resultEven;
// }

// console.log(findOutlier([0, 1, 2])); //1
// console.log(findOutlier([1, 2, 3])); //2
// console.log(findOutlier([2,6,8,10,3])); //3

// ======== Count the number of Duplicates ========
// Count the number of Duplicates
// Write a function that will return the count of distinct case -insensitive alphabetic characters and numeric digits that occur more than once in the input string.
// The input string can be assumed to contain only alphabets(both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// function duplicateCount(text) {
//     let array = text.toLowerCase().split("");
//     let count = 0;
//     let control = "";

//     for (let i = 0; i < array.length; i++) {

//         for (let x = i + 1; x < array.length; x++) {

//             if (array[i] === array[x]) {
//                 array.splice(x, 1);
//                 x--;
//                 control = array[i];
//             }
//         }

//         if (array[i] === control) {
//             count++;
//         }
//     }

//     return count;

// }

// console.log(duplicateCount("")); //0
// console.log(duplicateCount("abcde")); //0
// console.log(duplicateCount("aabbcde")); //2
// console.log(duplicateCount("aabBcde")); //2
// console.log(duplicateCount("Indivisibility")); //1
// console.log(duplicateCount("Indivisibilities")); //2

//  ======= Bit Counting =======
// Write a function that takes an integer as input,
// and returns the number of bits that are equal to one in the binary
// representation of that number.You can guarantee that input is non -
// negative.
// Example: The binary representation of 1234 is 10011010010,
// so the function should return 5 in this case

// var countBits = function(n) {
//   if (n === 0) {return 0};
//   return n.toString(2).match(new RegExp("1", "gi")).length;
// };

// console.log(countBits(10));

// ====== Duplicate Encoder ======
// The goal of this exercise is to convert a string to a new string
// where each character in the new string is "(" if that character
// appears only once in the original string, or ")" if that character
// appears more than once in the original string.Ignore capitalization
// when determining if a character is a duplicate.
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// function duplicateEncode(word) {
//     let result = "";
//     for (const char of word) {
//         if (word.match(new RegExp(char, "gi")).length === 1) {
//             result += "(";
//             continue;
//         };
//         result += ")";
//     };
//     return result;
// }

// console.log(duplicateEncode("Success"));

// ====== Persistent Bugger =======
// Write a function, persistence, that takes in a positive parameter num
// and returns its multiplicative persistence, which is the number of times
// you must multiply the digits in num until you reach a single digit.
// For example:
//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                       // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

// function persistence(num) {
//     let count = 0;
//     while (num.toString().length > 1) {
//     let result = num
//         .toString()
//         .split("")
//         .reduce((total, number) => total * Number(number), 1);
//         num = result;
//         count++;
//     };
//      return count;
// }

// console.log(persistence(39)); //3
// console.log(persistence(4)); //0
// console.log(persistence(25)); // 2
// console.log(persistence(999)); // 4

// ======== Extract Nested Object Reference =========
// You are given a complex object that has many deeply nested variables.You don't want to go
// the usual if obj.property == null route.
// Create a prototype method that given a nested path, either return the value or undefined.

// var obj = {
//   person: {
//     name: 'joe',
//     history: {
//       hometown: 'bratislava',
//       bio: {
//         funFact: 'I like fishing.'
//       }
//     }
//     },

//     hash(string) {
//         return eval(`this.${string}`);
//     }

// };

// Object.prototype.hash = function(string) {
//   try {
//   return eval(`this.${string}`)
//   }
//   catch(e){
//   return undefined
//   }
// }

// console.log(obj.hash('person.name')); // 'joe'
// console.log(obj.hash('person.history.bio')); // { funFact: 'I like fishing.' }
// console.log(obj.hash('person.history.homeStreet')); // undefined
// console.log(obj.hash('person.animal.pet.needNoseAntEater')); // undefined




// ======= Who has the most money? =======

// You're going on a trip with some students and it's up to you to keep track of
// how much money each Student has.A student is defined like this:

// class Student {
//   constructor(name, fives, tens, twenties) {
//     this.name = name;
//     this.fives = fives;
//     this.tens = tens;
//     this.twenties = twenties;
//   }
// }

// const andy = new Student("Andy", 0, 0, 2);
// const stephen = new Student("Stephen", 0, 4, 0);
// const eric = new Student("Eric", 8, 1, 0);
// const david = new Student("David", 2, 0, 1);
// const phil = new Student("Phil", 0, 2, 1);
// const cam = new Student("Cameron", 2, 2, 0);
// const geoff = new Student("Geoff", 0, 3, 0);

// function mostMoney(students) {
//     let arrayTotal = [];
//     students.forEach(studet => {
//         const total = studet.fives * 5 + studet.tens * 10 + studet.twenties * 20;
//         arrayTotal.push([total, studet.name]);
//     });
//     const result = arrayTotal.sort((a, b) => b[0] - a[0]);
//     if (result.every((element, index ,array) => element[0] === array[0][0] && array.length !==1)) {
//         return "all";
//     }
//     return result[0][1];
// }

// console.log(mostMoney([andy, stephen, eric, david, phil])); //"Eric
// console.log(mostMoney([cam, geoff, andy, stephen, eric, david, phil])); //"Eric
// console.log(mostMoney([andy]));
// console.log(mostMoney([cam, geoff]));



// ====== Image host filename generator ======
// You are developing an image hosting website.
// You have to create a function for generating random and unique image filenames.
// Create a function for generating a random 6 character string which will be used to access the photo URL.
// To make sure the name is not already in use, you are given access to an PhotoManager object.
// You can call it like so to make sure the name is unique
// // at this point, the website has only one photo, hosted on the 'ABCDEF' url
// photoManager.nameExists('ABCDEF'); // returns true
// photoManager.nameExists('BBCDEF'); // returns false
// Note: We consider two names with same letters but different cases to be unique.



// const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

// function generateName()
// {
//   const res = Array(6).fill(null)
//                       .map(e=>alpha[Math.floor(Math.random()*alpha.length)])
//                       .join('')
//   return photoManager.nameExists(res) ? generateName() : res                 
// }



//  ========== Unique In Order =========
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to 
// each other and preserving the original order of elements.
// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


// var uniqueInOrder = function (iterable) {
    // let arrayTemp = [];
 
    // if (Array.isArray(iterable)) {
    //     arrayTemp = iterable;
    // } else {
    //     arrayTemp = iterable.split('');
    //    }
        
    // for (let i = 0; i < arrayTemp.length; i++) {
    //     if (arrayTemp[i] === arrayTemp[i + 1]) {
    //         arrayTemp.splice(i + 1, 1);
    //         i--;        
    //     }
    // }
    // return arrayTemp;
// }


// second solution

// var uniqueInOrder = function (iterable) {
//     return [...iterable].filter((el, index, array) => el !==array[index +1])
// }


// console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A','B','C','D','A','B'])
// console.log(uniqueInOrder([1,2,2,3,3])); // [1,2,3]



// ========= Dubstep =======
// function songDecoder(song) {
//     return song.split('WUB').filter(el => el !== '').join(' ');
// };


// console.log(songDecoder("AWUBBWUBC"));//, "A B C","WUB should be replaced by 1 space");
// console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));//, "A B C","multiples WUB should be replaced by only 1 space");
// console.log(songDecoder("WUBAWUBBWUBCWUB"));//, "A B C","heading or trailing spaces should be removed");