// // function greet(naam) {
// //   console.log("hello ," + naam)
// // }
// // greet("Asha");
// // greet("polok");

// // // Parameter ছাড়া
// // function sayHello() {
// //   console.log("হ্যালো!");
// // }

// // sayHello(); // হ্যালো!
// // sayHello(); // হ্যালো!
// // sayHello(); // হ্যালো!

// // // Parameter সহ
// // function greet(naam) {
// //   console.log("হ্যালো, " + naam);
// // }

// // greet("সাফাত");  // হ্যালো, সাফাত
// // greet("জামাল");  // হ্যালো, জামাল

// // // একাধিক Parameter
// // function add(a, b) {
// //   console.log(a + b);
// // }

// // add(5, 3);   // 8
// // add(10, 20); // 30

// // function mul(a, b) {
// //   return a * b;
// // }
// // let result = mul(2 * 4);
// // console.log(result);
// // console.log(mul(4 * 2));

// function squere(num) {
//   return (num * num)
// }

// console.log(squere(5));
// console.log(squere(10));

// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   }
//   else {
//     return false;
//   }

// }
// console.log(isEven(5))

// function age(birthyear) {
//   let currentyear = 2026;
//   return currentyear - birthyear;
// }
// console.log(age(1998));


// function calculateDiscount(price, discountPercent) {
//   let discount = (price * discountPercent) / 100;
//   let finalPrice = price - discount;
//   return finalPrice;

// }
// console.log(calculateDiscount(1000, 10));

// function add (a,b){
//   return a+b;
// }

// const add = (a,b) =>{
//   return a+b;
// }
// const add =(a,b)=>a+b;

// const sqare =(num)=>num*num;
// console.log(squre(5))

// const isEven =(num)=> num%2===0;
// console.log(isEven(4

// function celsiusToFahrenheit(celsius) {
//   let fahrenheit = celsius * (9 / 5) + 32;
//   return fahrenheit;
// }
// console.log(celsiusToFahrenheit(34));

// p - 2
// function rectangleArea(length, width) {
//   let area = (length * width);
//   return area;
// }
// console.log(rectangleArea(4, 2));

// const rectabgleArea = (length, width) => length * width;
// console.log(rectabgleArea(5, 2));

// p-3
// function calculateVat(price, vatPercent) {
//   let vat = (price * vatPercent) / 100;
//   return vat;

// }
// console.log(calculateVat(1000, 8));

// const calCulateVat = (price, vatPercent) => (price * vatPercent) / 100;
// console.log(calCulateVat(1500, 8))


const isValidPassword = (password) => (password.length >= 8);
console.log(isValidPassword("asdfgjfhd"))