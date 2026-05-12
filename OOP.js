// class ClassName{
//   constructor(parameters){
//     //
//   }
//   method(){

//   }
// }

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`hello ${this.name}`)
//   }
//   introduce() {
//     console.log(`my name ${this.name} and age ${this.age}`);
//   }
// }

// let person1 = new Person("safaat", 25);
// let person2 = new Person("ali", 30);

// console.log(person1.name);
// console.log(person1.name);

// person1.greet();
// person2.introduce();

// person2.greet();


// class Student {
//   constructor(name, roll, age) {
//     this.name = name;
//     this.roll = roll;
//     this.age = age;


//   }
//   displayInfo() {
//     console.log(`${this.name} welcome!`);
//     console.log(`name:${this.name}`);
//     console.log(`roll:${this.roll}`);
//     console.log(`age:${this.age}`);
//   }
// }
// let student1 = new Student("safaat", 101, 25);
// let student2 = new Student("safaatanzum", 102, 15);

// student1.displayInfo();
// student2.displayInfo();

// class Product {
//   constructor(name, price = 0, inStock = true) {
//     this.name = name;
//     this.price = price;
//     this.inStock = inStock;
//   }

//   display() {
//     let status = this.inStock ? "স্টকে আছে" : "স্টকে নেই";
//     console.log(`${this.name} - ${this.price} টাকা (${status})`);
//   }
// }

// let product1 = new Product("মোবাইল", 15000);
// let product2 = new Product("ল্যাপটপ", 50000, false);
// let product3 = new Product("ইয়ারফোন"); // price = 0, inStock = true

// product1.display(); // মোবাইল - 15000 টাকা (স্টকে আছে)
// product2.display(); // ল্যাপটপ - 50000 টাকা (স্টকে নেই)
// product3.display(); // ইয়ারফোন - 0 টাকা (স্টকে আছে)

// class BankAccount {
//   constructor(accountHolder, balance = 0) {
//     this.accountHolder = accountHolder;
//     this.balance = balance;

//   }
//   deposit(amount) {
//     if (amount > 0) {
//       this.balance += amount;
//       console.log(`${amount} money added`);

//       this.showBalannce();
//     } else {
//       console.log("incorrect amount")
//     }
//   }
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log("insufficent Balance")
//     } else if (amount <= 0) {
//       console.log("incorrect ammount!")
//     } else {
//       this.balance -= amount;
//       console.log(`${amount} money withdrow`)
//     }
//   }
//   showBalannce() {
//     console.log(`Current Balance  ${this.balance} taka`);
//   }
// }
// let account = new BankAccount("safaat", 1000);

// account.showBalannce();
// account.deposit(500);
// account.withdraw(300);

// class Circle {
//   constructor(radius) {
//     this._radius = radius;

//   }
//   get radius() {
//     return this._radius;
//   }
//   get diameter() {
//     return this._radius * 2;
//   }
//   get area() {
//     return Math.PI * this._radius * this._radius;
//   }
//   set radius(value) {
//     if (value > 0) {
//       this._radius = value;
//     } else {
//       console.log("Radius must be gatter then 0")
//     }
//   }
// }
// let circle = new Circle(5);

// console.log(circle.radius);
// console.log(circle.diameter);
// console.log(circle.area.toFixed(2));

// circle.radius = 10;
// console.log(circle.diameter);

// circle.radius = -5;

// class MathHelper {
//   static add(a, b) {
//     return a + b;
//   }
//   static subtract(a, b) {
//     return a - b;
//   }

//   static multiply(a, b) {
//     return a * b;
//   }

//   static divide(a, b) {
//     if (b === 0) {
//       return "০ দিয়ে ভাগ করা যায় না!";
//     }
//     return a / b;
//   }
// }
// console.log(MathHelper.add(10, 5));      // 15
// console.log(MathHelper.multiply(3, 4));  // 12
// console.log(MathHelper.divide(10, 2)); 

// class User {
//   constructor(username, email) {
//     this.username = username;
//     this.email = email;
//     this.id = User.generateId();

//   }
//   static generateId() {
//     return Date.now() + Math.random();
//   }
//   static validateEmail(email) {
//     return email.includes('@')
//   }
//   displayInfo() {
//     console.log(`Username: ${this.username}`);
//     console.log(`Email: ${this.email}`);
//     console.log(`ID: ${this.id}`);
//   }
// }
// console.log(User.validateEmail("safaat@gmail.com")); // true
// console.log(User.validateEmail("safaat.com"));       // false

// // User তৈরি
// let user1 = new User("safaat", "safaat@gmail.com");
// user1.displayInfo();

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     console.log(`${this.name} eating`);
//   }
//   sleep() {
//     console.log(`${this.name} sleepping`)
//   }
// }
// class Dog extends Animal {
//   constructor(name, age, breed) {
//     super(name, age); // Parent constructor call
//     this.breed = breed;
//   }

//   bark() {
//     console.log(`${this.name} gheu gheu`);
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, color) {
//     super(name, age);
//     this.color = color;
//   }

//   meow() {
//     console.log(`${this.name} মিয়াও মিয়াও করছে!`);
//   }
// }

// let dog = new Dog("টমি", 3, "জার্মান শেফার্ড");
// dog.eat();   // টমি খাচ্ছে (Animal থেকে)
// dog.sleep(); // টমি ঘুমাচ্ছে (Animal থেকে)
// dog.bark();  // টমি ঘেউ ঘেউ করছে! (Dog এর নিজস্ব)

// let cat = new Cat("মিনি", 2, "সাদা");
// cat.eat();   // মিনি খাচ্ছে
// cat.meow();

// class Vehicle {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.brand = brand;
//   }
//   start() {
//     console.log(`${this.brand} ${this.model} starting...`);

//   }
//   stop() {
//     console.log(`${this.brand} ${this.model} closing...`);

//   }
// }

// class Car extends Vehicle {
//   constructor(brand, model, doors) {
//     super(brand, model);
//     this.doors = doors;
//   }
//   start() {
//     console.log(`vechale startind..`);
//     console.log(`${this.brand} ${this.model} starting..`);

//   }
// }

// class Bike extends Vehicle {
//   constructor(brand, model, type) {
//     super(brand, model);
//     this.type = type;
//   }

//   // Override start method
//   start() {
//     console.log(`kiking bike...`);
//     console.log(`${this.brand} ${this.model} start 🏍️`);
//   }
// }
// let car = new Car("Toyota", "Corolla", 4);
// car.start();

// let bike = new Bike("Honda", "CBR", "Sports");
// bike.start();

// class Product {
//   constructor(id, name, price) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//   }
//   displayInfor() {
//     console.log(`ID:${this.id}`);
//     console.log(`name:${this.name}`);
//     console.log(`price:${this.price}`);
//   }
// }
// class Electronics extends Product {
//   constructor(id, name, price, warranty) {
//     super(id, name, price);
//     this.warranty = warranty;
//   }
//   displayInfo() {
//     super.displayInfor();
//     console.log(`warrenty:${this.warranty} year`)
//   }
// }
// class Clothing extends Product {
//   constructor(id, name, price, size, color) {
//     super(id, name, price);
//     this.size = size;
//     this.color = color;
//   }

//   displayInfo() {
//     super.displayInfo();
//     console.log(`size: ${this.size}`);
//     console.log(`color: ${this.color}`);
//   }
// }
// class ShoppingCart {
//   constructor() {
//     this.items = [];
//   }
//   addItem(product, quantity = 1) {
//     this.items.push({ product, quantity });
//     console.log(`${product.name} add to cart`)
//   }
//   removeItem(productId) {
//     this.items = this.items.filter(item => item.product.id !== productId);
//     console.log("product removed")
//   }
//   getTotal() {
//     return this.items.reduce((total, item) => {
//       return total + (item.product.price * item.quantity);

//     }, 0);
//   }
//   displayCart() {
//     console.log("\n🛒 Shopping Cart:");
//     console.log("================");

//     this.items.forEach(item => {
//       console.log(`${item.product.name} x ${item.quantity} = ${item.product.price * item.quantity} taka`);
//     });

//     console.log("================");
//     console.log(`total: ${this.getTotal()} taka\n`);
//   }


// }
// let phone = new Electronics(1, "phone", 15000, 1);
// let laptop = new Electronics(2, "laptop", 50000, 2);
// let tshirt = new Clothing(3, "t-shirt", 500, "L", "blue");

// let cart = new ShoppingCart();

// cart.addItem(phone, 2);
// cart.addItem(laptop, 1);
// cart.addItem(tshirt, 3);
// cart.displayCart();


//p1

// class Book {
//   constructor(title, author, isbn) {
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//   }
//   displayInfo() {
//     console.log(`Title: ${this.title}`)
//     console.log(`Author: ${this.author}`)
//     console.log(`ISBN: ${this.isbn}`)
//   }
// }

// class Library {
//   constructor(name) {
//     this.name = name;
//     this.books = [];
//   }

//   // Methods Library class এর ভিতরে থাকতে হবে
//   addBooks(book) {
//     if (book instanceof Book) {
//       this.books.push(book);
//       console.log(`${book.title} book added`)
//     } else {
//       console.log(`please add books`)
//     }
//   }

//   removeBook(isbn) {
//     const index = this.books.findIndex(book => book.isbn === isbn);
//     if (index !== -1) {
//       const removedBook = this.books.splice(index, 1)[0]; // removedBook (d যোগ করা হয়েছে)
//       console.log(`"${removedBook.title}" book removed`);
//     } else {
//       console.log("not found")
//     }
//   }

//   searchBooks(searchTerm) {
//     const foundBooks = this.books.filter(book => // this.books (title.books ভুল ছিল)
//       book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.isbn.includes(searchTerm)
//     );
//     if (foundBooks.length > 0) {
//       console.log('found')
//       foundBooks.forEach(book => book.displayInfo()); // বইগুলো দেখানোর জন্য
//     } else {
//       console.log('not found')
//     }
//     return foundBooks;
//   }

//   displayAllBooks() {
//     if (this.books.length === 0) {
//       console.log('no book')
//     } else {
//       console.log(`${this.name} all books:`);
//       this.books.forEach((book, index) => {
//         console.log(`\n${index + 1}.`)
//         book.displayInfo();
//       })
//     }
//   }
// } // Library class এর closing bracket

// // ব্যবহার
// const myLibrary = new Library("my library");

// const book1 = new Book("mishir ali", "humaiyon", "123456789");
// const book2 = new Book("zero", "abal", "987654321");
// const book3 = new Book("html", "robin", "456789123");

// myLibrary.addBooks(book1);
// myLibrary.addBooks(book2);
// myLibrary.addBooks(book3);

// // Test করি
// myLibrary.displayAllBooks();
// myLibrary.searchBooks("mishir");
// myLibrary.removeBook("123456789");
// myLibrary.displayAllBooks();

//p2
class Person {
  constrictor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  constructor(roll, grade) {
    super(name, age)
    this.roll = roll;
    this.grade = grade
  }
}