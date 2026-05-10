// let name = "safaat"
// let age = 25;
// let message = "my name " + name + "my age " + age;
// console.log(message);

// let message2 = `my name ${name} and age ${age}`
// console.log(message2);

// let products = [
//   { name: "mobile", price: 15000 },
//   { name: "laptop", price: 50000 }
// ];
// let html = products.map(product =>
//   `<div class="product">
//     <h3>${product.name}</h3>
//     <p> price:${product.price}</p>

//   </div>`
// ).join('');

// console.log(html)


// let user = { name: "সাফাত", score: 85 };
// let grade = user.score >= 80 ? "A" : "B";
// let resultMessage = `${user.name}, আপনার স্কোর ${user.score} এবং গ্রেড ${grade}`;
// console.log(resultMessage);

// Destructuring

// let fruits = ["mango", "banana", "apple"];
// let fruit1 = fruits[0];
// let fruit2 = fruits[1];
// let fruit3 = fruits[2];

// let [first, second, third] = fruits;
// console.log(first);  // আম
// console.log(second); // কলা
// console.log(third);

// Object
// let person = {
//   name: "সাফাত",
//   age: 25,
//   city: "ঢাকা"
// };

// // পুরাতন পদ্ধতি
// let name = person.name;
// let age = person.age;

// // নতুন পদ্ধতি - Destructuring ✅
// let { name, age, city } = person;
// console.log(name); // সাফাত
// console.log(age);  // 25
// console.log(city); // ঢাকা

// // নতুন নাম দেওয়া
// let { name: userName, age: userAge } = person;
// console.log(userName); // সাফাত
// console.log(userAge);  // 25

// // Default value
// let { name, age, country = "বাংলাদেশ" } = person;
// console.log(country); // বাংলাদেশ

// // Nested destructuring
// let student = {
//   name: "আলী",
//   marks: {
//     math: 85,
//     english: 90
//   }
// };

// let { name, marks: { math, english } } = student;
// console.log(math);    // 85
// console.log(english); // 90

// let fruits = ["আম", "কলা", "আপেল"];
// let fruitsCopy = [...fruits];
// console.log(fruitsCopy);

// let fruits1 = ["আম", "কলা"];
// let fruits2 = ["আপেল", "কমলা"];
// let allFruits = [...fruits1, ...fruits2];
// console.log(allFruits);

// let person = { name: "সাফাত", age: 25 };
// let personCopy = { ...person };
// console.log(personCopy);


// let user = {
//   name1: "সাফাত",
//   age: 25,
//   city: "ঢাকা"
// };
// function userInfo({ name1, age, city }) {
//   return `${name},${age},${city}`
// }
// console.log(userInfo.apply(user));

// let numbers = [10, 20, 30, 40, 50];

// let [first, second, ...rest] = numbers;

// console.log(first);
// console.log(second);
// console.log(rest);
// setTimeout(() => {
//   console.log("2 sec delay");

// }, 2000);
// console.log("print it first")

// function greet(name) {
//   console.log(`hello,${name}`);
// }
// setTimeout(greet, 2000, "safaat");

// Timer সংরক্ষণ করা
// let timerId = setTimeout(() => {
//   console.log("এটা চলবে না!");
// }, 3000);

// // বাতিল করা
// clearTimeout(timerId);
// console.log("Timer বাতিল হয়েছে");

// console.log("loading...");
// setTimeout(() => {
//   console.log("data loaded!")
// }, 5000);

// let count = 3;
// console.log(count);

// setTimeout(() => {
//   count--;
//   console.log(count);
//   setTimeout(() => {
//     count--;
//     console.log(count);

//     setTimeout(() => {
//       count--;
//       console.log(count);
//       console.log("hj");
//     }, 1000);
//   }, 1000);
// }, 1000);

// setInterval(() => {
//   console.log("Tick...");
// }, 1000);

// let count = 0;
// let intervalID = setInterval((name) => {
//   count++;
//   console.log(`হ্যালো, ${name}!`);

//   if (count === 3) {
//     clearInterval(intervalID)
//     console.log("stop");
//   }
// }, 2000, "সাফাত");

// localStorage.setItem("name", "সাফাত");
// localStorage.setItem("age", "25");
// localStorage.setItem("city", "ঢাকা");

// console.log("Data saved!");

// let name = localStorage.getItem("name");
// let age = localStorage.getItem("age");

// console.log(name);
// console.log(age);


// let phone = localStorage.getItem("phone")
// console.log(phone)


// Theme save করা
function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("theme", theme);
}

// Page load এ theme apply
window.addEventListener("load", () => {
  let savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
});

// Button click
document.querySelector("#darkBtn").addEventListener("click", () => {
  setTheme("dark");
});

document.querySelector("#lightBtn").addEventListener("click", () => {
  setTheme("light");
});