let carObject = {
  name: "TIAGO",
  company: "TATA",
  year: 1997,
};

console.log(carObject.isPrototypeOf());
console.log(carObject);

class Com {
  name = "";
  year = "";
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  getNameOfCompany() {
    console.log(`${this.name} is name of company`);
  }
}

console.log(Com);

let tcs = new Com("TCS", 2003);
tcs.getNameOfCompany();
