// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// let propValues = [];
  
//     for (const product of products) {
//         let props = Object.keys(product);
//         console.log(props);

//     if (props.includes(propName)) {
//         propValues.push(product[propName]);
//         console.log(propValues);
//         continue;
//     };
//     };
  
// return propValues;

//   // Change code above this line
// }

// console.log(getAllPropValues("category"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("name"));


// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//       console.log(this.books, oldName);
//        if (this.books.includes(oldName)) {
//          this.books.splice(this.books.indexOf(oldName), 1, newName);
//             };
//            console.log(this.books);
//     },
// };
// bookShelf.updateBook("Haze", "Dungeon chronicles");
// console.log(bookShelf.books);


//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение «Блюз» на «Классика».
//Удалите первый элемент массива и выведите его в консоль.
//Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");

// console.log(styles.shift());
// styles.unshift("Рэп", "Регги");

// console.log(styles);

// function min(a, b) {
//     console.log(typeof(a));
//     if (typeof a === "number" && typeof b === "number") {
//         return Math.min(a, b);
        
//     };
//     return "Вы ввели не число";
// };

// console.log(min("5", 2));



// function min(a, b) {
    
//     if (typeof a !== "number" || typeof b !== "number") {
//         return "Вы ввели не число";
                
//     };
//     return a < b ? a : b;
// };

// console.log(min(5, 2));

//Напишите функцию logItems(array) которая принимает
//массив и использует цикл for, который для каждого
//элемента массива будет выводить сообщение в формате
//<номер элемента> - <значение элемента>
//Нумерация элементов должна начинаться с 1.
//['Джаз', 'Блюз', 'Рок-н-ролл', 'Регги', 'Рэп']

// function logItems(array) {
//     for (let i = 1; i < array.length; i++) {
//         console.log(i+1, array[i]);
//     }
// };

// logItems(['Джаз', 'Блюз', 'Рок-н-ролл', 'Регги', 'Рэп'])





// function logItems(music) {
//    music.forEach
// };

// logItems([{ name: 'Джаз', engl: "jazz", number: 1 },
// { name: 'Блюз', engl: "blues", number: 2 },
// { name: 'Рок-н-ролл', engl: "rock 'n' roll ", number: 3 },
// { name: 'Регги', engl: "reggae", number: 4 },
// { name: 'Рэп', engl: "rap", number: 5 }]);

//Напиши функцию findSmallerNumberfindSmallerNumber(numbers)
//которая ищет самое маленькое число в массиве
//Добавь проверку что функция получает массив
//const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// const findSmallerNumber = numbers => {
//     console.log(Math.min(...numbers));
// };

// const findSmallerNumber = numbers => {
//     let result = numbers[0];
//     for (const number of numbers) {
//         if (number < result) {
//             result = number;
//         }
//     }
//     console.log(result);
// };

// findSmallerNumber([2, 5, 35, 56, 12, 24, 7, 80, 3]);


//Напиши функцию findLongestWord(string)
//которая принимает произвольную строку
//состоящую только из слов разделенных
//пробелом (параметр string)
//и возвращает самое длинное слово в этой строке

// const findLongestWord = str => {
//     const words = str.split(" ")
//     let result = words[0];
//     for (const word of words) {
//         if (word.length > result.length) {
//             result = word;
//         }
//     }
//     console.log(result);
// };

// findLongestWord("ghjgjh jhj hjlkh aaaaaaaaaaaa");


//Напишите функцию caculculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.

// const caculculateAverage = (...numbers) => {
//     let result = 0;
//     let count = 0;
// for (const num of numbers) {
//     if (typeof num !== "number") {
//         console.log(`Вы ввели не число ${num}`);;
//         continue;

//     };
//     count++;
//     result += num;
//     };
//     return result / count;
// }

// console.log(caculculateAverage(1, 2, 2, 1, "hjkh"));;


//Напишите функцию findTheColor()
//которая принимает название цвета
//определяет его наличие в массиве
//если цвет есть, усталавливет его как фон документа
//если цвета нет выводит console.error('Такой цвет не найден');
//и устанавливает цвет документа красный
// document.body.style.background = 'red';
//const colors = ['blue', 'yellow', 'olive', 'fuchsia', 'lime', 'aqua', 'maroon']


// const findTheColor = color => {
//     const colors = ['blue', 'yellow', 'olive', 'fuchsia', 'lime', 'aqua', 'maroon']
//     if (colors.includes(color)) {
//         // return console.error('Такой цвет найден'); 
//         document.body.style.background = color;
//         return;
//     }
    
//     console.error('Такой цвет не найден');
//     document.body.style.background = 'red';
// }


// const findTheColor = color => {
//     const colors = ['blue', 'yellow', 'olive', 'fuchsia', 'lime', 'aqua', 'maroon']
//     document.body.style.background = colors.includes(color) ?
//         color : 'red';
// }

// findTheColor('ffw');

//Напишите скрипт который заменяет регистр каждого символа
//в стороке на противоположный
//Например 'JavaScript' должен вернуть 'jAVAsCRIPT'

// const changeUpperCase = word => {    
//     let result = "";
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === word[i].toUpperCase()) {
//             result += word[i].toLowerCase();
//             continue;
//         };        
//         result += word[i].toUpperCase();
//     }
//     return result;    
// };

// console.log(changeUpperCase("JavaScrip"));


// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//   if (!this.pizzas.includes(pizzaName)) {
    
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   }
      
//       return onSuccess(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks

// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей 
// всех пользователей(свойство friends).У нескольких пользователей могут 
// быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал
// повторений.

const users = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male",
        age: 37
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
        age: 34
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
        age: 24
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female",
        age: 21
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male",
        age: 27
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male",
        age: 38
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female",
        age: 39
    }
];

// Список друзей
// const getFriends = (users) => {
//   const usersFriends = users.flatMap(user => user.friends);
//   const usersUniqueFriends = usersFriends.filter((user, index, array) => array.indexOf(user) === index);
//   return usersUniqueFriends;
// };
// console.log(getFriends(users));


// Задача. Активные пользователи

// const getActiveUsers = (users) => {
//     return users.filter(user => user.isActive);
// };

// console.log(getActiveUsers(users));


// Задача. Неактивные пользователи

// const getInactiveUsers = (users) => {
//    return users.filter(user => !user.isActive);
// };
// console.table(getInactiveUsers(users));



// Задача.Пользователи и друзья
// Дополни функцию getNamesSortedByFriendCount(users) так,
// чтобы она возвращала массив имён пользователей отсортированный 
// по возрастанию количества их друзей(свойство friends).


// const getNamesSortedByFriendCount = users => {
//     return [...users]
//         .sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length)
//         .map(user => user.name);
// };

// console.log(getNamesSortedByFriendCount(users));