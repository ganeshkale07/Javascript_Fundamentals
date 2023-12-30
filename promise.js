let one = new Promise((res, rej) => {
  setTimeout(() => {
    res("one resolved");
  }, 600);
});

let two = new Promise((res, rej) => {
  setTimeout(() => {
    res("two resolved");
  }, 1000);
});

let three = new Promise((res, rej) => {
  setTimeout(() => {
    res("three resolved");
  }, 2000);
});

const arrow = [];
let allPromiser = arrow.map((item) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      item + 2;
      resolve(item + 2);
    }, 2000);
  });
});
console.log(allPromiser);
let allPromise = Promise.all(allPromiser);
allPromise
  .then((result) => {
    console.log("all promise done ", result);
  })
  .catch((error) => console.log(error));
