//what is promises
//promise is an object which repesents eventuall completionof asynchronous operation
//why promises are important
// inversion of comtrol - better control over calling callback function
// promise chaning call back hell - pyramid of doom

let car = "ganesh";

function foo(a, fun) {
  fun();
}

foo(car, function () {
  console.log("Hiiiiiiiii");
  //foo2();
});
