//vvvimp
//FrontEnd intervoew questions
//https://rahuulmiishra.medium.com/frequently-asked-frontend-programming-interview-questions-1b77c3dbb96


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
    givenArr.sort((a,b) => (b>a ? 1 : b < a ? -1 : 0));
    return givenArr[position - 1];
}

//Q - Pollyfill of Promise.all()
const promiseOne = () => new Promise((res,rej) => {
    setTimeout(() => {
        console.log("into first promise");
        res("promiseOne Resolved");} , 2000)
})

const promiseTwo = () => new Promise((res,rej) => {
    setTimeout(() => res("promiseOne Resolved") , 5000)
})
//Promise.all([promiseOne(),promiseTwo()]).then(() => alert("Resolved")).catch(() => alert("Reject"))

function customAllMethod (promiseArray) {
    let result = [];
    let totalPromiseResolved = 0;
    return new Promise((resolve,rej) => {
        promiseArray.forEach((eachProm) => {
            eachProm.then(res => {
                result.push(res);
                totalPromiseResolved++;
                if(totalPromiseResolved === promiseArray.length){
                    resolve(result);
                }

            }).catch(error => {
                rej(error)
            })
        })
    })
    
    
}

//customAllMethod([promiseOne(),promiseTwo()]).then((val) => console.log(val)).catch(() => alert("Reject"))

//Q Flat a given array with and without level control

function flatNestedArray(complexArray){
    // let result = [];
    // complexArray.forEach((ele) => {
    //     if(Array.isArray(ele)){
    //         ele.forEach()
    //     }else{
    //        result.push(ele); 
    //     }
    // })

    return complexArray.flat(Infinity);
}
//console.log(flatNestedArray([2,3,[4,5,6,7], [4,6, [7,8,9]]]))
//[2,3,[3,4,5],[7,77,[8,9,[33,44,55],10]]]

//VVVIMP
// Flat a given array with and without level control
function flatGivenArray(givenArr, level = Infinity){
    let result = [];
    givenArr.forEach((ele)=>{
        if(Array.isArray(ele) && level > 0){
            result.push(...flatGivenArray(ele , level - 1));
        }else{
            result.push(ele);
        }
    })
    return result;
}
//console.log(flatGivenArray([2,3,[4,5,[33,44,55,66]],6,7,8],2));

//Infinite currying
//infinite because sum function can take infinite arguments - sum(2)(3)(2)(5)(7)()
function sum(num1){
    return (num2) => {
        if(num2){
            return sum(num1 + num2);
        }else{
            return num1;
        }
    }
}
//console.log(sum(2)(3)(2)(5)(7)())

//Q Check if String is palindrome
function palindromeChecker(givenStr){
    //trimming it in order to remove unwanted characters from string
    const trimmedStr = givenStr.replace(/[^a-zA-Z]/g, '');
    const strLength = trimmedStr.length - 1;
    for(let i = 0 ; i <= strLength / 2 ; i++){ 
        if(trimmedStr.charAt(i) !== trimmedStr.charAt(strLength - i)){
            return false;
        }
    }
    return true;
}

//console.log(palindromeChecker("foo of"))

//Q Fibonacci series with Memoization
//Inefficient way of calculating
//Give me nth digit fibonacci series
function fibonacciSeriesTillNthDigit(nth){
    let result = [0]
    if(nth == 1){
        return result;
    }else if(nth == 2){
        return result.push(1);
    }else{
        result.push(1);
        for(let i = 2; i < nth; i++){
            result.push((result[i-1] + result[i-2]));
        }
    }
    return result;
}
// console.time();
// console.log(fibonacciSeriesTillNthDigit(4))
// console.timeEnd()

//Elegant and efficient method 
//To calculate Nth term of fibonacci series
function memoize(cb){
    let cache ={};
    return function(){
        let num = arguments[0];
        if(cache[num]){
            return cache[num];
        }else{
            let s = cb(num);
            cache[num]= s;
            console.log(cache)
            return s;
        }
    }
}

function fibonacci(num){
    if(num < 2){
        return num;
    }
    return fibonacci(num - 1) +  fibonacci(num - 2);
}
const res = memoize(fibonacci);

// console.time();
// console.log(res(22));
// console.timeEnd();

//Q implement throttle
//do not trigger function unnecessary if already execution going on in first call
//After some time call if necessary
function throttleFunction(actualFunCall, dealy){
    let isThrottle = false;
    return function(){
        if(!isThrottle){
            actualFunCall();
            isThrottle = true;
            setTimeout(()=>{
                isThrottle =false;
                console.log("U CAN CLICK");
            },dealy)
        }
    }
}
function actualFunCall(){
    console.log("U called throttle function!");
}
//const throttle = throttleFunction(actualFunCall,  2000);

//VVVIMP - Difficult approach need to understand
//Q Check if pair with given sum exists in an array
function checkPairWithGivenSumExist(givenArr,givenSum){
        let result = [];
        givenArr.forEach((ele,i) => {
            givenSum === ele + givenArr[i+1] ? result.push([ele ,givenArr[i+1]]) : false;
        })
        return result;
}
//console.log(checkPairWithGivenSumExist([1,3,4,7,8,9,6,9],15));

//Q Square each digit of number without using any string function
function sqEachDigitOfNumber(num){
    //converted number into string
    // let result = '';
    // for(let ele of num.toString()){
    //     result += (parseInt(ele)* parseInt(ele));
    // }
    // return result;
    //Elegant way without converting into String
    let result = 0;
    let reveresedNumber = reveresedNumberFun(num);
    while(reveresedNumber > 0){
        let remainder  = reveresedNumber % 10 ;
        reveresedNumber = Math.floor(reveresedNumber / 10);
        const factor = getNumberOfZeros(remainder ** 2);
        result = result * factor + remainder ** 2;
    }
    return result;

}
function reveresedNumberFun(num){
    let result  = 0;
    while(num > 0 ){
        let remainder = num % 10;
        num = Math.floor(num / 10);
        result = result * 10 + remainder;
    }
    return result;
}

//These function tells how many places are present in given number
//like 81 - unit and tenth place - 100
function getNumberOfZeros(num){
    let n = 1;
    while(num > 0){
        n = n * 10;
        num = Math.floor(num / 10);
    }    
    return n;
}
//console.log(sqEachDigitOfNumber(9191))

/***********PART 1**********/ 
//https://rahuulmiishra.medium.com/javascript-interview-questions-that-made-me-think-do-i-really-know-javascript-2904588ebd5a

const someObject = {
    name : "Ganesh"
}
//Property added with defineProperty has special beahaviour
//we can define attribute on these property
//Value: The actual value of the property.
//Writable: Indicates whether the property's value can be changed.
//Enumerable: Specifies whether the property should be included in the iteration of the object's properties.
//Configurable: Determines whether the property can be deleted or its attributes can be modified.

Object.defineProperty(someObject, "age" , {
        value: 42,
        writable: true,
        enumerable: false,  // This property is non-enumerable
        configurable: true
})
// console.log(someObject.age);
// console.log(Object.keys(someObject));
someObject.age = 37;

// console.log(someObject.age);

//******************
const name = "Ganesh Kale";
age  = 21;//VVIMP varibale without var let const get attached to window object - so it become proprty of window object that is why we able to delete
let b;
// console.log(delete name);//we can only delete properties from object
// console.log(delete age);
// console.log(age , b);
//     O/P - age is not define error
//age is not define as we delete from window object 
// console.log(typeof age , b);
//     O/P - undefined undefined
//     but typeOf age is undefined WTF 

//*************************** */
let human = {name : "GANESH"};//X01 - initial reference
let member = [human];
human = null;//X02 - we are only setting new reference to person variable

//console.log(member);

//*************************** */
const exStr = "Silver surfer";
// console.log(exStr.padStart(14));
// console.log(exStr.padStart(2));

//*************************** */
// [1,2,3,4].reduce((x,y) => console.log(x,y), 300);
// [1,2,3,4].reduce((x,y) => console.log(x,y));
//by default x y will be first and second element of array
//*************************** */
function tellSomethingAboutHero(one, two, three){
    console.log(one);
    console.log(two);
    console.log(three);
}
const heroName = "Black panther";
const Heroage = 1000;
// tellSomethingAboutHero `${heroName} is ${Heroage} old`;
// tellSomethingAboutHero `Did you noticed how value get passed`;

//*************************** */

(() =>{
    let x,y;
    try{
        throw new Error();
    }catch(x){
        (x = 1) , (y = 2);//HOW these part work - syntactically it is not right
        console.log(x)
    }
    console.log(x);
    console.log(y);
});
//*************************** */
function foothree(){

}
// console.log(typeof foothree);

class People{

}
// console.log(typeof People);
//classes are funtion in javascript
//*************************** */
let someArr = [2,34,[7,8,9],[99]];
//console.log(someArr.toString());
//O/P - [2,34,7,8,9,99] it will flatten the array
//*************************** */
//TODO
let Obj = {
    lang : "Marathi",
    showYourLang : () => {
        console.log(`I Know ${this.lang}`);
    }
}
function show(){
    this.lang = 'Vue';
    this.showLang = () => {
        console.log(this.lang);
    }
}
Obj.showYourLang();
const x = new show();
x.showLang();
//O/P - I know undefined
//because arrow function do not get attached to object where it is defined
//This Keyword depend upon where it is invoked 

//*************************** */

let rt = Promise.resolve(1);
let rt2 = Promise.resolve(2);

rt.then(console.log);
rt.then(console.log);

rt2.then((e) => {
    console.log(e);
    resolve(e);
}).then(console.log);

//*************************** */
//.length property on function

function makeIce(flavor ,temp){

}

function makeCream(flavor , color , temp , price =9){

}

// console.log(makeCream.prototype);

// console.log(makeIce.length);
// console.log(makeCream.length);
//*************************** */

let objectOne = { 1 : "Ganesh"};
let setOfNum = new Set([1,2,3,4,5]);
//for normal object javascript store key as string
//so even if we pass objectOne[1] it will convert it into objectOne['1']
//console.log(objectOne.hasOwnProperty(1));
//console.log(objectOne.hasOwnProperty('1'));
//console.log(setOfNum.has(1));
//console.log(setOfNum.has('1'));
//console.log(setOfNum.has('1'));
//*************************** */
//*************************** */
//*************************** */
//*************************** */
//*************************** */
//*************************** */
//*************************** */
//*************************** */
//*************************** */
//*************************** */
//*************************** */
//*************************** */