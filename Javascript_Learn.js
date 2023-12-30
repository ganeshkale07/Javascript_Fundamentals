// console.log(some); //some is uninitialised
// let some = "value";

// console.log(thing); //ReferenceError: Cannot access 'thing' before initialization
// let thing;

//console.log(thingTwo); //thingTwo is not defined

// let foo; //these is defining
// let foo1 = "something"; // defining and initializing

/*****************************/
// higher order function
function filterFunction(arr, callback) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]) ? filteredArr.push(arr[i]) : null;
  }
  return filteredArr;
}
function isOdd(x) {
  return x % 2 != 0;
}

const result = filterFunction([9, 43, 5, 1, 3, 7], (x) => x > 5);
console.log(result);

//create own polyfills
//to Find if number is prime or not

Array.prototype.getPrimeNumbers = function (callback) {
  let primeNumberArray = [];
  for (let i = 0; i < this.length; i++) {
    callback(this[i]) ? primeNumberArray.push(this[i]) : null;
  }

  return primeNumberArray;
};

function primeChecker(num) {
  if (num % 2 != 0) {
    return num;
  }
}

const primeNumber = [9, 43, 5, 12, 34, 7].getPrimeNumbers(primeChecker);
console.log(primeNumber);

//To get twice of number - similar to map function

Array.prototype.getBigger = function (callback) {
  let primeNumberArray = [];
  for (let i = 0; i < this.length; i++) {
    primeNumberArray.push(callback(this[i]));
  }

  return primeNumberArray;
};

function bigger(num) {
  const c = num * 2;
  return c;
}

const bigNumber = [9, 43, 5, 12, 34, 7].getBigger(bigger);
console.log(bigNumber);
