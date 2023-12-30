let example = "I am prime im minister of INDIA";

console.log("Index Of - ",example.indexOf("am"));
console.log("last Index Of - ",example.lastIndexOf("am", 9));

console.log("Search Method - ",example.search("am"));

//search and indexOf difference
//search can take regEx as argument
//indexOf can take second arg which states from where search should begin but cannot take regex expression

console.log("Match string occurrance", example.match(/im/g))
//Does not work even if we provide RegEX in arguments
console.log("Match string occurrance", example.matchAll("im"))

console.log(("Includes method check for words return true or false" , example.includes("im")))

// function palindrome(str){//Ganesh
//     let final = '';
//     for(let i = str.length - 1 ; i >= 0; i--){//5
//         final = final.concat(str[i]);
//     }
//     return final;
// }

// console.log(palindrome("Ganesh Kale"))