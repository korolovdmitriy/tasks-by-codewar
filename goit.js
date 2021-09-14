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


