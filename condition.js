// উদাহরণ ১: জোড়/বিজোড়
// let number = 7;

// if (number % 2 === 0) {
//   console.log(number + " জোড় সংখ্যা");
// } else {
//   console.log(number + " বিজোড় সংখ্যা");
// }
// // Output: 7 বিজোড় সংখ্যা

// // উদাহরণ ২: পাস/ফেল
// let marks = 55;

// if (marks >= 60) {
//   console.log("পাস! অভিনন্দন!");
// } else {
//   console.log("ফেল! আবার চেষ্টা করুন");
// }
// // Output: ফেল! আবার চেষ্টা করুন

// // উদাহরণ ৩: দোকান খোলা/বন্ধ
// let time = 22; // রাত ১০টা

// if (time < 20) {
//   console.log("দোকান খোলা আছে");
// } else {
//   console.log("দোকান বন্ধ");
// }
// // Output: দোকান বন্ধ

// // উদাহরণ ৪: ব্যালেন্স চেক
// let balance = 500;
// let price = 1000;

// if (balance >= price) {
//   console.log("কিনতে পারবেন");
// } else {
//   console.log("যথেষ্ট টাকা নেই");
// }
// // Output: যথেষ্ট টাকা নেই

// let day = "wednesday";

// switch (day) {
//   case "saturday":
//     console.log("1st day");
//     break;

//   case "sunday":
//     console.log("2nd day");
//     break;


//   case "monday":
//     console.log("3rd day");
//     break;

//   case "tuesday":
//     console.log("4th day");
//     break;

//   case "wednesday":
//     console.log("5th day");
//     break;

//   case "thursday":
//     console.log("6th day");
//     break;

//   case "friday":
//     console.log("7th day");
//     break;
//   default:
//     console.log("ddd");

// }

// let num1 = 10;
// let num2 = 5;
// let operator = "+";
// let result;

// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     console.log(num1 + " + " + num2 + " = " + result);
//     break;
//   case "-":
//     result = num1 - num2;
//     console.log(num1 + " - " + num2 + " = " + result);
//     break;
//   case "*":
//     result = num1 * num2;
//     console.log(num1 + " * " + num2 + " = " + result);
//     break;
//   case "/":
//     result = num1 / num2;
//     console.log(num1 + " / " + num2 + " = " + result);
//     break;
//   case "%":
//     result = num1 % num2;
//     console.log(num1 + " % " + num2 + " = " + result);
//     break;
//   default:
//     console.log("ভুল অপারেটর");
// }
// Output: 10 + 5 = 15

// let age = 17;
// let isBangladeshi = true;

// if (age >= 18 && isBangladeshi == true) {
//   console.log("eligable");
// } else {
//   console.log("not eligable")
// }


// let sum = 0;
// for (let i = 0; i < 100; i++) {
//   sum = sum + i;
//   console.log(sum);
// }
// let num = 5;
// let factorial = 1;

// for (let i = 1; i <= num; i++) {
//   factorial = factorial * i;
// }
// console.log(num + "! = " + factorial);
// for (let i = 1; i <= 5; i++) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += "*"
//   }
//   console.log(stars);
// }

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }

// let password = "";

// while (password !== "12345") {
//   password = prompt("পাসওয়ার্ড দিন:");
// }
// console.log("সঠিক পাসওয়ার্ড!");

// let balance = 1000;
// let withdrawal = 150;

// while (balance >= withdrawal) {
//   balance = balance - withdrawal;
//   console.log("উত্তোলন: " + withdrawal + " টাকা, বাকি: " + balance);
// }
// console.log("যথেষ্ট টাকা নেই!");

// p-2

// let sum = 0;
// let avrage = 0;

// for (let i = 1; i <= 50; i++) {
//   sum = sum + i;


// }
// avrage += sum / 50;
// console.log(sum, avrage);

//p-3


// let even = 0;
// let odd = 0;
// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 0) {
//     even = even + i + " ";

//   }
//   else {
//     odd = odd + i + " ";
//   }
// }
// console.log(even)
// console.log(odd)

