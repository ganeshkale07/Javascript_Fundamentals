const givenStr = "Gan Gan Kale";

Array.from(givenStr).forEach((ele,index) => console.log(ele , index))

console.log('slice - ',givenStr.slice(0,3))

console.log('Substring Method - ',givenStr.substring(0,3))

console.log('Substr Method - ',givenStr.substr(6,3))
console.log('replace Method - ',givenStr.replace("Ganesh","Optimus"));
console.log('replace Method - ',givenStr.replaceAll("Ganesh","Optimus"));

//Implemented raplceAll with callBack Function
let whatToReplace = "Kale";
console.log('replace Method - ',givenStr.replaceAll(whatToReplace,replacerBasedOnCondition(whatToReplace)))
function replacerBasedOnCondition(ele){
    if(ele === "Kale"){
        return "Kulkarni";
    }
}

console.log("Uppercase -",givenStr.toLocaleUpperCase())
console.log("Uppercase -",givenStr.toLowerCase())

console.log("concat", givenStr.concat(" is "," learning", " Programming"));

console.log('Trim -', givenStr.trim(),givenStr.length)
console.log('Trim start- ', givenStr.trimStart(),"ee")
console.log('Trim end- ', givenStr.trimEnd())

console.log("ChatAt")
console.log("CharCodeAt")

console.log(`split - split(<by what you want to split>,<how many split>)`)

//padding string from front or back
let exampleStr = "Police";
exampleStr.padStart(8,"Mumbai "); //MuPolice 
exampleStr.padStart(11,"Mumbai "); //MumbaPolice

exampleStr.padEnd(8,"Mumbai "); //PoliceMu 
exampleStr.padEnd(11,"Mumbai "); //PoliceMumba 

console.log(givenStr)