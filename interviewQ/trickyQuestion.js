//1. Count the occurrence of characters in given string
function countOccurancesOnlyForCharacterInString(givenStr){
    //Remember - occurance
    //sol 1 - wrong - it is calculating total char count  
    // let count  = 0;
    // for(let i = 0 ; i < givenStr.length ; i++){
    //     /[a-zA-z]/g.test(givenStr[i]) ? count++ : count;
    // }
    // return count;
    //Sol 2
    return givenStr.split('').reduce((res,acc) => {
        res[acc] = res[acc] ? res[acc] + 1 : 1;
        return res;
    },{})
}
//console.log(countOnlyCharacterInString("Gan gan gan gan "));

//2. Shift all 0s to the right
function shiftAllZeroToright(givenArr){
    //return givenArr.sort((a,b) => b -a );
    //sol 2 
    const result  = [];
    givenArr.forEach((ele) => {
        ele === 0 ? result.push(ele) : result.unshift(ele);
    })
    return result;
}
//console.log(shiftAllZeroToright([2,0,8,0,99,77,0,12]));

///VVVIMP
//3.Create a Singleton instance from functions
const singletonInstance = (function(){
    function foo(){
        this.count = 10;

        this.increment = function(){
            this.count++;
        }
    }

    let instance; 
    return{
        getInstance(){
            //console.log(instance)
            if(!instance){
                instance = new foo();
                delete instance.constructor;
            }
            return instance;
        }
     }
})();

let human1 = singletonInstance.getInstance();
//console.log(human1)
human1.increment()
//console.log(human1.count);

let human2 = singletonInstance.getInstance();
//console.log(human2.count)


let human3 = singletonInstance.getInstance();
//console.log(human2.count)

let human4 = singletonInstance.getInstance();
//console.log(human2.count)


//4 . Polyfill of bind
const greet = function(message, news){
   alert(`Hi How are u ! ${this.name}. ${message}. ${news}`);
}

let person = {
    name : "Ganesh",
    color :"red"
}

//greet.call(person,"Kaisa lag raha hai javascript");
//greet.apply(person,["Kaisa lag raha hai javascript", "Atal setu"]);

let bindHolder = greet.bind(person);
//Bind the method for now in future will call it
// bindHolder();

//bind karycha ahe function to provide object
//with arguments 
//return definition back
Function.prototype.myFirstPolyFillForBindMethod = function (givenObject, ...arg) {
    const self = this;
    return function () {
        return self.apply(givenObject, [...arg]);
    }    
}

//greet.myFirstPolyFillForBindMethod(person)();

//Q Find nth Largest and Smallest number
function findNthLargestInteger(givenArr, position){
    givenArr.sort((a,b) => (b>a ? 1 :b < a ? -1 : 0));
    return givenArr[position - 1];
}

//Q - Pollyfill of Promise.all()
const promiseOne = () => new Promise((res,rej) => {
    setTimeout(() => {
        console.log("hI");
        res("promiseOne Resolved");} , 2000)
})



const promiseTwo = () => new Promise((res,rej) => {
    setTimeout(() => res("promiseOne Resolved") , 5000)
})


//Promise.all([promiseOne(),promiseTwo()]).then(() => alert("Resolved")).catch(() => alert("Reject"))


//https://rahuulmiishra.medium.com/frequently-asked-frontend-programming-interview-questions-1b77c3dbb96