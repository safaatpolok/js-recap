// // সাধারণ function
// function hello() {
//   return "হ্যালো";
// }

const { reject } = require("async");

// // async function
// async function helloAsync() {
//   return "হ্যালো";
// }

// console.log(hello());       // হ্যালো
// console.log(helloAsync());  // Promise {<fulfilled>: "হ্যালো"}

// // Promise হিসেবে ব্যবহার
// helloAsync().then((result) => {
//   console.log(result); // হ্যালো
// });

// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("data is here")
//     }, 2000);
//   })
// }
// getData().then((data) => {
//   console.log(data)
// })

// function getData(success) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         resolve("data is loading")
//       } else {
//         reject("added")
//       }
//     }, 2000)
//   });
// }
// async function fetchData() {
//   try {
//     console.log("Loading...");
//     let data = await getData(true);
//     console.log(data);
//   } catch (error) {
//     console.log("Error", error)
//   } finally {
//     console.log("Process complete")
//   }
// }

// function getData(success) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         resolve("ডাটা লোড হয়েছে!");
//       } else {
//         reject("এরর হয়েছে!");
//       }
//     }, 2000);
//   });
// }

// async function fetchData() {
//   try {
//     console.log("Loading...");

//     let data = await getData(true); // true = success
//     console.log(data);

//   } catch (error) {
//     console.log("Error:", error);
//   } finally {
//     console.log("Process complete!");
//   }
// }

// fetchData();

// // Success case:
// // Loading...
// // ডাটা লোড হয়েছে!
// // Process complete!

// // Error case (getData(false)):
// // Loading...
// // Error: এরর হয়েছে!
// // Process complete!


// function task1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 1 end");
//       resolve(10);
//     }, 1000);
//   })
// }

// function task2(num) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 2 শেষ");
//       resolve(num * 2);
//     }, 1000);
//   });
// }
// function task3(num) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Task 3 শেষ");
//       resolve(num + 5);
//     }, 1000);
//   });
// }
// async function runTasks() {
//   console.log("start")

//   let result1 = await task1();
//   let result2 = await task2(result1)
//   let result3 = await task3(result2)

//   console.log("final result:", result3)

// }
// runTasks();

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "সাফাত", age: 25 });
    }, 2000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["পোস্ট ১", "পোস্ট ২"]);
    }, 3000);
  });
}
function fetchComments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["কমেন্ট ১", "কমেন্ট ২"]);
    }, 1000);
  });
}

async function loadSequential() {
  let user = await fetchUser();       // 2 সেকেন্ড
  let posts = await fetchPosts();     // 3 সেকেন্ড
  let comments = await fetchComments(); // 1 সেকেন্ড

  console.log(user, posts, comments);
}

async function loadParallel() {
  let [user, post, comments] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments()
  ]);
  console.log(user, posts, comments)
}
loadParallel();