let count = 10;
console.log(count);

let interval = setInterval(() => {
  count--;
  if (count > 0) {
    console.log(count)
  }
  else {
    console.log("start");
    clearInterval(interval)
  }
}, 1000)
