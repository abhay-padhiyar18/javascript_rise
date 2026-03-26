// 1.Student Report System

// const Students = [
//   { name: "Abhay", marks: [98, 85, 50, 68, 100] },
//   { name: "Shakti", marks: [50, 61, 45, 48, 60] },
//   { name: "Kushal", marks: [60, 52, 50, 45, 29] },
// ];

// const studentAvg = Students.map((student) => {
//   const totalMarks = student.marks.reduce((num, res) => num + res, 0);
//   const avgMarks = totalMarks / student.marks.length;
//   return { ...student, average: avgMarks };
// });

// const studentResult = studentAvg.map((student) => {
//   let result;
//   if (student.average >= 75) {
//     result = "Distiction";
//   } else if (student.average >= 50) {
//     result = "Pass";
//   } else {
//     result = "fail";
//   }
//   return { ...student, result };
// });

// console.log(studentResult);


//---------------------------------------------------------------------------------

//2.Shopping Cart Analyzer

// const items = [
//   { name: "Mobile", price: 10000, qty: 2 },
//   { name: "Powerbank", price: 1000, qty: 5 },
//   { name: "Laptop", price: 20000, qty: 4 },
// ];

// function calculateTotal(...items) {
// //...item rest operator -> sabhi values ko array me lega

//   let totalAmt = 0;
//   let totalQty = 0;

//   totalAmt = items.reduce((total, item) => total + item.price * item.qty, 0);

//   totalQty = items.reduce((total, item) => total + item.qty, 0);
//   return { totalAmt, totalQty };
// }

// const total = calculateTotal(...items)
// console.log(total);

//---------------------------------------------------------------------------------

//3.User Profile Updater

// let user = {
//     name: "Abhay",
//     age:25,
//     city:"Vadodara"
// };

// function updatedUser(updatedUser) {
//     let newUser ={
//         ...updatedUser,
//         city:"Mumbai",
//         profession: "Engineer"
//     };
//     return newUser;

// }

// let updated = updatedUser(user);
// console.log(user);
// console.log(updated);

//---------------------------------------------------------------------------------

//4. Product Filter & Transform

// const products =[

//   { name: "Mobile", price: 1200},
//   { name: "Powerbank", price: 900},
//   { name: "Laptop", price: 2500},
//   { name: "Keyboard", price: 1700}
// ]

// const filterProduct =products.filter(p => p.price > 1000);

// const discountProducts = filterProduct.map((products) => {
// const discountPrice = products.price - products.price * 0.1;

// return{...products,discountPrice};

// });

// console.log (discountProducts);

//---------------------------------------------------------------------------------

//5. Dynamic Number Processor

// const numbers = [23, 56, 15, 85, 67, 90, 34, 45];

// function dynamicNumberProcessor(...numbers) {
//   const evenNumbers = numbers.filter((num) => num % 2 === 0);
//   const oddNumbers = numbers.filter((num) => num % 2 !== 0);

//   const sumEven = evenNumbers.reduce((total, num) => total + num, 0);
//   const sumOdd = oddNumbers.reduce((total, num) => total + num, 0);

//   return { evenNumbers, oddNumbers, sumEven, sumOdd };
// };
// //using spread operator
// const result = dynamicNumberProcessor(...numbers);

// console.log(result);
