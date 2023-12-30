function parent (name) {
    this.name = name;
    this.greet = () =>   {
        console.log("Hi");
    }
}

const childOne = new parent("Ganesh");
console.log(childOne);


class Car{
    color = "red";
    hello = () => {
        console.log("hello")
    }
  }
  
class Tata extends Car{
    constructor(year){
        super();
        this.year = year
    }
}


let oneCar =  new Tata(2333);
console.log(oneCar.hasOwnProperty("year"));
const foo = () =>  {
    console.log("DONE");
}

console.log(foo)

let x = 5;
try {
  x.toLowerCase();
}
catch(err) {
    console.log(err)
}
