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


function RunLength(str) {

    let count = 0;
    let strResult = '';
	let char = str[0];

	for(let i=0; i < str.length; i++)
	{
		if(str[i] == char)
		{
			count ++;
		}
		else
		{
			strResult += count + char;
			char = str[i];
			count = 1;
		}
	}

    strResult += count + char;
    str = strResult;
	return str;

}
   
// keep this function call here 
console.log(RunLength('wwwggopp'));