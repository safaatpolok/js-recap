// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (num) {
//   console.log(num * 2);
// });
// numbers.forEach(num => console.log(num * 2));

// let price =[30,20,45,15,50];
// let sum=0;

// price.forEach(price =>{
//   sum+=price;
// });
// console.log(sum);

// let students = [
//   { name: "আলী", marks: 85 },
//   { name: "রহিম", marks: 92 },
//   { name: "করিম", marks: 78 }
// ];
// students.forEach(student => {
//   let grade = student.marks >= 90 ? "A+" :
//     student.marks >= 80 ? "A" : "B";
//   console.log(student.name + ": " + student.marks + " (" + grade + ")");
// });

//map

// let name = ["ali", "mohid", "raka"];

// let upperCase = name.map(name => name.toUpperCase());
// console.log(upperCase);

// উদাহরণ ১: Price এ VAT যোগ
// let price = [100, 200, 250];

// let priceWithVat = price.map(price => price + (price * .15));
// console.log(priceWithVat);

//filter

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let oddNumber = numbers.filter(num => num % 2 !== 0);
// console.log(oddNumber)

//reduce()
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((total, num) => {
//   return total + num;
// }, 0);
// console.log(sum);

// let sum2 = numbers.reduce((total, num) => total + num, 0)
// console.log(sum2)

// ex:1 map

// let numbers = [10, 20, 30, 40, 50]

// let discount = numbers.map(num => num * 0.95);
// console.log(numbers);
// console.log(discount);
//ex:2 filter
// let products = [
//   { name: "মোবাইল", price: 15000 },
//   { name: "ল্যাপটপ", price: 50000 },
//   { name: "ইয়ারফোন", price: 500 },
//   { name: "ট্যাবলেট", price: 20000 }
// ];
// let availableProduct = products.filter(price => price.price > 10000);
// console.log(availableProduct);

// ex:3 reduce
// let expenses = [500, 1200, 800, 300, 1500];

// let total = expenses.reduce((total, num) => total + num, 0);
// console.log(total);

//object
//  
let students = [
  {
    name: "ali",
    age: 20,
    marks: 85
  },
  {
    name: "rohim",
    age: 22,
    marks: 92
  },
  {
    name: "karim",
    age: 21,
    marks: 78
  }
];

students.forEach(student => {
  console.log(student.name + ": " + student.marks);
});
let topStudent = students.filter(s => s.marks >= 85);
console.log(topStudent);
let names = students.map(s => s.name);
console.log(names)
let student = students.find(s => s.name === "karim")
console.log(student);