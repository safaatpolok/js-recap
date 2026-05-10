// let fruits = ["s", "e", "d", "p", "j"];

// console.log(fruits.length);
// fruits[1] = "a";
// console.log(fruits);
// fruits.push("k");
// console.log(fruits);
// fruits.pop("k");
// console.log(fruits);
// fruits.unshift("k");
// console.log(fruits);
// fruits.shift("k");
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// console.log(fruits.indexOf("d"));
// console.log(fruits.includes("d"));

// let some = fruits.slice(0, 2);
// console.log(some)

// let remove = fruits.splice(1, 2)
// console.log(remove);

// //join ,revers,sort


// function printArray(arr) {
//   for (let item of arr) {
//     console.log(item);
//   }
// }
// let fruits = ["mango", "banana", "apple"];
// printArray(fruits);

// function getEvenNumbers(max) {
//   let evens = [];
//   for (let i = 2; i <= max; i += 2) {
//     evens.push(i);
//   }
//   return evens;
// }
// let evenNums = getEvenNumbers(10);
// console.log(evenNums); // [2, 4, 6, 8, 10]

// function sumArray(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     sum += num;
//   }
//   return sum;
// }
// let numbers = [10, 20, 30, 40];
// console.log(sumArray(numbers));

//example-1

// let cart = [];
// let prices = [];

// cart.push("mobile");
// prices.push(15000);
// cart.push("yearphone");
// prices.push(500);

// cart.push("covetr");
// prices.push(200);

// console.log("cart:")

// for (let i = 0; i < cart.length; i++) {
//   console.log((i + 1) + ". " + cart[i] + " - " + prices[i] + " taka");
// }
// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log("total" + total + "taka");

//example 2
// let students = ["souvo", "polok", "kamrul", "murad"];

// let marks = [85, 92, 78, 88]
// console.log("result:");
// for (let i = 0; i < students.length; i++) {
//   let grade;
//   if (marks[i] >= 90) {
//     grade = "A+";
//   }
//   else if (marks[i] >= 80) {
//     grade = "A";
//   } else if (marks[i] >= 70) {
//     grade = "B";
//   } else {
//     grade = "C";
//   }
//   console.log(students[i] + ": " + marks[i] + " (" + grade + ")");
// }
// let sum = 0;
// for (let mark of marks) {
//   sum += mark;
// }
// let avarage = sum / marks.length;
// console.log("avarage" + avarage);

// let todos = [];
// function addTodo(task) {
//   todos.push(task);
//   console.log("adding:" + task);
// }

// function showTodos() {
//   console.log("\n Todo list")
//   if (todos.length === 0) {
//     console.log("no work added");

//   } else {
//     todos.forEach((task, index) => {
//       console.log((index + 1) + " ." + task)

//     });
//   }
// }
// function removeTodo(index) {
//   if (index >= 0 && index < todos.length) {
//     let removed = todos.splice(index, 1);
//     console.log("❌ সরানো হয়েছে: " + removed[0]);
//   }
// }

// addTodo("পড়াশোনা করা");
// addTodo("বাজার করা");
// addTodo("কোড লেখা");
// showTodos();
// removeTodo(1);
// showTodos();

// let town = ["d", "r", "c", "n", "b"];

// for (let i = 0; i <= town.length; i++) {
//   console.log(town[i]);
// }
// ex:2
// let number = [10, 20, 30, 40, 50];
// let total = 0;
// for (let num of number) {
//   total += num;
// }
// console.log(total)

// function searchArray(arr, value) {
//   return arr.includes(value);
// }

// // Example
// console.log(searchArray([10, 20, 30, 40], 30)); // true
// console.log(searchArray([10, 20, 30, 40], 50));

function findmax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num
    }
  }
  return max;
}
let nums = [45, 23, 78, 12, 99, 34];
console.log(findmax(nums));