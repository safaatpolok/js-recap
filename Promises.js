// console.log("১ম কাজ");
// setTimeout(() => {
//   console.log("২য় কাজ");
// }, 2000)

// console.log("৩য় কাজ");

// function orderFood(callback) {
//   console.log("order the food");
//   setTimeout(() => {
//     console.log("Food is preparing")
//     callback();
//   }, 2000)
// }
// function eatFood() {
//   console.log("খাবার খাচ্ছি!");
// }

// orderFood(eatFood);

// একের পর এক async কাজ
// setTimeout(() => {
//   console.log("১ম কাজ");

//   setTimeout(() => {
//     console.log("২য় কাজ");

//     setTimeout(() => {
//       console.log("৩য় কাজ");

//       setTimeout(() => {
//         console.log("৪র্থ কাজ");
//         // আরো nested... 😫
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// // এটাকে "Callback Hell" বা "Pyramid of Doom" বলে
// // কোড পড়তে এবং maintain করতে কঠিন!

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success");
//   }, 2000)
// });
// console.log(promise1);

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("failed")
//   }, 2000);
// }) 

// function checkAge(age) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (age >= 18) {
//         resolve("adult")
//       } else {
//         reject("child")
//       }
//     }, 1000)
//   })
// }
// let agePromise = checkAge(20);
// console.log(agePromise);

// let promise = new Promise((resolve, reject) => {
//   let success = false;

//   setTimeout(() => {
//     if (success) {
//       resolve("success")
//     } else {
//       reject("failed")
//     }
//   }, 2000)
// });

// promise
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => {
//     console.log("end success")
//   })

// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {

//       resolve(10);
//     }, 1000);
//   });
// }

// function step2(num) {
//   return new Promise((resolve) => {
//     setTimeout(() => {

//       resolve(num * 2);
//     }, 1000);
//   });
// }

// function step3(num) {
//   return new Promise((resolve) => {
//     setTimeout(() => {

//       resolve(num + 5);
//     }, 1000);
//   });
// }
// step1()
//   .then((result) => {
//     console.log("Step 1:", result);
//     return step2(result)
//   })
//   .then((result) => {
//     console.log("Step 2:", result); // 20
//     return step3(result);
//   })
//   .then((result) => {
//     console.log("Step 3:", result); // 25
//     console.log("final result:", result);
//   });

// function checkUsername(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (username === "safaat") {
//         resolve("Username is correct")
//       } else {
//         reject("Username is incorrect")
//       }
//     }, 1000);
//   });
// }

// function checkPassword(password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (password === "12345") {
//         resolve("password is corrsct")
//       }
//       else {
//         reject("password is incorrect")
//       }
//     }, 1000)
//   })
// }
// function login() {
//   console.log("Try to login");

//   checkUsername("safaat")
//     .then((message) => {
//       console.log(message);
//       return checkPassword("12345")
//     })
//     .then((message) => {
//       console.log(message);
//       console.log("Login Success! 🎉");
//     })
//     .catch((error) => {
//       console.log(error);
//       console.log("Login ব্যর্থ! 😞");
//     });
// }
// login();

// function loadUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "সাফাত" });
//     }, 1000);
//   });
// }

// function loadPosts(userId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, title: "পোস্ট ১" },
//         { id: 2, title: "পোস্ট ২" }
//       ]);
//     }, 1000);
//   });
// }

// function loadComments(postId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, text: "দারুণ!" },
//         { id: 2, text: "ভালো লাগলো" }
//       ]);
//     }, 1000);
//   });
// }

// console.log("Loading...");

// loadUser()
//   .then((user) => {
//     console.log("User:", user);
//     return loadPosts(user.id);
//   })
//   .then((posts) => {
//     console.log("Posts:", posts);
//     return loadComments(posts[0].id);
//   })
//   .then((comments) => {
//     console.log("Comments:", comments);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   })
//   .finally(() => {
//     console.log("Loading complete!");
//   });

// function getRandomNumber() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNum = Math.random() * 10;

//       if (randomNum > 5) {
//         resolve(randomNum);
//       } else {
//         reject(randomNum)
//       }
//     }, 2000);
//   });
// }
// getRandomNumber()
//   .then(result => {
//     console.log(`Success! Random number: ${result.toFixed(2)}`);
//   })
//   .catch(error => {
//     console.log(`Failed! Random number was too small: ${error.toFixed(2)}`);
//   });

// async function testPromise() {
//   try {
//     const result = await getRandomNumber();
//     console.log(`Success! Random number: ${result.toFixed(2)}`);
//   } catch (error) {
//     console.log(`Failed! Random number was too small: ${error.toFixed(2)}`);
//   }
// }

// testPromise();



// Function 1: সংখ্যাকে 2 দিয়ে গুণ করে
function multiplyByTwo(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = number * 2;
      console.log(`Step 1: ${number} × 2 = ${result}`);
      resolve(result);
    }, 1000);
  });
}

// Function 2: সংখ্যায় 10 যোগ করে
function addTen(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = number + 10;
      console.log(`Step 2: ${number} + 10 = ${result}`);
      resolve(result);
    }, 1000);
  });
}

// Function 3: সংখ্যাকে 3 দিয়ে ভাগ করে
function divideByThree(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = number / 3;
      console.log(`Step 3: ${number} ÷ 3 = ${result.toFixed(2)}`);
      resolve(result);
    }, 1000);
  });
}

// Method 1: Promise chaining দিয়ে
function calculateWithChaining(initialNumber) {
  console.log(`Starting with: ${initialNumber}`);

  multiplyByTwo(initialNumber)
    .then(result1 => addTen(result1))
    .then(result2 => divideByThree(result2))
    .then(finalResult => {
      console.log(`Final result: ${finalResult.toFixed(2)}`);
    })
    .catch(error => {
      console.error('Error occurred:', error);
    });
}

// Method 2: async/await দিয়ে
async function calculateWithAsync(initialNumber) {
  try {
    console.log(`Starting with: ${initialNumber}`);

    const step1 = await multiplyByTwo(initialNumber);
    const step2 = await addTen(step1);
    const finalResult = await divideByThree(step2);

    console.log(`Final result: ${finalResult.toFixed(2)}`);
    return finalResult;
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

// Method 3: Promise.resolve() chain দিয়ে
function calculateWithResolve(initialNumber) {
  console.log(`Starting with: ${initialNumber}`);

  Promise.resolve(initialNumber)
    .then(multiplyByTwo)
    .then(addTen)
    .then(divideByThree)
    .then(result => {
      console.log(`Final result: ${result.toFixed(2)}`);
    })
    .catch(error => {
      console.error('Error occurred:', error);
    });
}

// ব্যবহারের উদাহরণ:
console.log("=== Promise Chaining ===");
calculateWithChaining(5);

setTimeout(() => {
  console.log("\n=== Async/Await ===");
  calculateWithAsync(5);
}, 4000);

setTimeout(() => {
  console.log("\n=== Promise.resolve Chain ===");
  calculateWithResolve(5);
}, 8000);
