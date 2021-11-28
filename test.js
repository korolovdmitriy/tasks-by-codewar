// Пусть функция RunLength(str) принимает передаваемый параметр str и 
// возвращает сжатую версию строки с использованием алгоритма кодирования длины прогона.
// Этот алгоритм работает, принимая вхождение каждого повторяющегося символа и выводя 
// это число вместе с одним символом повторяющейся последовательности.
    
//     Например: wwwggopp вернет 3w2g1o2p.Строка не будет содержать цифр, знаков препинания или символов.
// Примеры
// Ввод: «aabbcde».
// Выход: 2a2b1c1d1e.
// Вход: «wwwbbbw».
// Выход: 3w3b1w.


// function RunLength(str) {

//     let count = 0;
//     let strResult = '';
// 	let char = str[0];

// 	for(let i=0; i < str.length; i++)
// 	{
// 		if(str[i] == char)
// 		{
// 			count ++;
// 		}
// 		else
// 		{
// 			strResult += count + char;
// 			char = str[i];
// 			count = 1;
// 		}
// 	}

//     strResult += count + char;
//     str = strResult;
// 	return str;

// }
   
// // keep this function call here 
// console.log(RunLength('wwwggopp'));



// ========

function getMaxSubSum(arr) {
  let maxSum = 0; // если элементов не будет - возвращаем 0

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }
  return maxSum;
}

console.log( getMaxSubSum([-1, 2, 3, -9]) ); // 5
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ); // 3
console.log( getMaxSubSum([1, 2, 3]) ); // 6
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100