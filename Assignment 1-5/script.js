//Assignment 1

// let name = prompt("Enter your name:");
// let age = Number(prompt("Enter your age:"));
// let purchaseAmount = Number(prompt("Enter purchase amount:"));

// let discount = 0;

// // Discount Logic
// if (age < 18) {
//     discountPercent += 10;
// } else if (age >= 60) {
//     discountPercent += 20;
// }

// // Extra Discount
// if (purchaseAmount > 5000) {
//     discountPercent += 5;
// }

// // Calculate discount amount
// let discountAmount = purchaseAmount * discountPercent / 100;

// let finalAmount = purchaseAmount - discountAmount;

// console.log(
// `Hi ${name}! You received a total discount of ${discountPercent}%. Final amount: ₹${finalAmount}`
// );

// --------------------------------------------------------------------------------------

// Assignment 2 Login System

// let userName="Abhay-Padhiyar18"
// let Password="Abhay#4567";

// let userInput = prompt("Enter your Username");
// let userPassword =prompt("Enter Your Password");

// if (userName === userInput && Password === userPassword) {
//     console.log("Login Successfully")
// }else if (userName != userInput && Password != userPassword) {
//     console.log("Username and Password are incorrect")
// }else if (userName != userInput){
//     console.log("Username Invalid")
// }else if(Password != userPassword){
//     console.log("Invalid Password")
// }else{
// console.log("Invalid Crediatial")
// }

// --------------------------------------------------------------------------------------

// Assignment 3  Number Analyzer Tools

// let inputNumber = prompt("Enter Your Number");
// inputNumber = Number(inputNumber)

// let sign;
// let type;

// if (inputNumber > 0) {
//   sign = "This is a Positive Number ";
// } else if (inputNumber < 0) {
//   sign = "This is a Negative Number";
// } else {
//   sign = "This number is ZERO";
// }

// if (inputNumber % 2 == 0) {
//   type = "Even";
// } else {
//   type = "odd";
// }

// alert(`The number ${inputNumber} is ${sign} and ${type}`);

// --------------------------------------------------------------------------------------

// Assignment 4  Shopping Eligibility Checker

// let isMember = true
// let cartValue =1500;

// if(( isMember == true  && cartValue > 1000 )|| cartValue >2000 ){
//   console.log("You Eligible for free delivery!!")
// } else{
//   console.log('you are not eligible AND You pay the Delivery Charges')
// }

// --------------------------------------------------------------------------------------

// Assignment 5 Grade Evalution System

// let inputMarks = prompt("Enter Marks of Students");
// inputMarks = Number(inputMarks);

// let grade;

// if (inputMarks < 0 || inputMarks > 100) {
//   console.log("Invalid input");
// } 
// else if (inputMarks >= 90) {
//   grade = "A";
// } 
// else if (inputMarks >= 75) {
//   grade = "B";
// } 
// else if (inputMarks >= 50) {
//   grade = "C";
// } 
// else {
//   grade = "fail";
// }

// alert(`Your grade is ${grade}`);
