let counter = 1;

const getData = function (context, arg) {
  //call API
  //console.log(`you called me ${this.name}`, counter++);
  console.log("context::", context);
  console.log("arg::", arg);
};

function debounceMagic(getData, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    let context = this;
    timer = setTimeout(() => {
      getData.call(context, args);
    }, delay);
  };
}

//Throttle function
function callAPI() {
  console.log("throttle callled!");
}

function throttlingFun(func, delay) {
  let isThrottle = false;

  return function () {
    if (!isThrottle) {
      func();
      isThrottle = true;
      setTimeout(() => {
        isThrottle = false;
      }, delay);
    }
  };
}

const doSomething = debounceMagic(getData, 1000);

const doThrottle = throttlingFun(callAPI, 1000);
