////////CAB with object
const objectOne = {
  name: "GANESH",
  age: 23,
  getDetails: function (message) {
    return console.log(
      `${this.name} and age is ${this.age} and message ${message}`
    );
  },
};

const objectTwo = {
  name: "Ravina",
  age: 22,
};
//apply ,call ,  bind (second parameter it received in array format)

// Using call to invoke the fullName method of objectOne with the context of objectTwo
objectOne.getDetails.call(objectTwo);

objectOne.getDetails.apply(objectTwo, ["boy"]);

let holdResult = objectOne.getDetails.bind(objectTwo, ["girl"]);

holdResult();

/////////CAB with function
function sayHello(message) {
  console.log(`Hey hello ${this.name} Good ${message}`);
}

const ravi = {
  name: "Ravi Teja",
};

sayHello.call(ravi, "Morning");
sayHello.apply(objectOne, ["Morning"]);

const knowYourAge = function (born) {
  console.log(`Your age is ${new Date().getFullYear() - born} -- ${this.name}`);
};

knowYourAge.call(ravi, 1997);
knowYourAge.apply(objectOne, [1997]);
