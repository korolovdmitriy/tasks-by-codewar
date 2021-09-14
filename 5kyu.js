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

// Test.assertEquals(humanReadable(0), '00:00:00', 'humanReadable(0)');
//     Test.assertEquals(humanReadable(5), '00:00:05', 'humanReadable(5)');
//     Test.assertEquals(humanReadable(60), '00:01:00', 'humanReadable(60)');
//     Test.assertEquals(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
//     Test.assertEquals(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
  