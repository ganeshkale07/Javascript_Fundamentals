
function reverseGivenString(str){
    let result = '';
    for(let i = (str.length - 1) ; i >= 0 ; i--){
        result = result.concat(str[i]);
    }
    console.log(result)
    return result;
}

function reverseGivenString2(str){
    return str.split('').reverse().join('');
}

//console.log(reverseGivenString2("Ganes m , h k be hanges"));

function LongestWordInString(str){
    let largeEle = str.split(' ')[0];
    str.split(' ').forEach(element => {
        if(element.length > largeEle.length){
            largeEle = element;
        }   
    });
    return largeEle;
}

//console.log(LongestWordInString("I love coding in javascript"));

function checkStringIsPalindrome(str){
    return (str === str.split('').reverse().join('') ? true : false);
}
//console.log(checkStringIsPalindrome("racecar"))

function removeDuplicatefromArray(arr){
    //1
    const result = [];
    arr.forEach(ele => {
        if(!result.includes(ele)){
            result.push(ele)
        }
    })
    return result;
    //2
    // for(let i = 0 ; i < arr.length ; i++){
    //     if(result.indexOf(arr[i]) === -1){
    //         result.push(arr[i])
    //     }
    // }
    // return result;
    //Elegant method
    //return [...new Set(...arr)];
}

//console.log(removeDuplicatefromArray([1,2,4,3,6,1,7,7,3,2]));

//Anagram pan - nap | ear - are - TODO

function isProvidedStringAnagram(str1,str2){
    if(str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')){
        return true;
    }
    else{
        return false;
    }
}

//console.log(isProvidedStringAnagram("aree", "ear"));


function returnNumberOfVowels(str){
    //const result =  str.toLowerCase().split('').filter(ele => /[aeiou]/.test(ele));
    const result =  str.toLowerCase().split('').filter(ele => 'aeiou'.includes(ele));
    return result.length;
}

//console.log(returnNumberOfVowels("Ganesh Girish Kale"))


//Q - Write a function that takes an array of objects and a key, 
//and returns a new array sorted based on the values of that key in ascending order. 

//---> key means name of key on Object "age" is key
  function returnSortedArrayOfObjBasedOnKey(arr , key){
    /******** based on string key *****/
    // const result = [];
    // const orderedKey = keyArr.map(ele => ele.toLowerCase()).sort();
    // console.log(orderedKey)
    // orderedKey.forEach(ele => {
    //     arr.forEach(e => {
    //         if(e.name.toLowerCase() === ele){
    //             result.push(e)
    //         }
    //     })
    // })

    // return result;

    /******** based on string key *****/

    return arr.sort((a,b) => a[key] - b[key])
  }
  const inArr = [ {name : "chandhu", age : 99},{name : "Amir", age : 88},{name : "badha", age : 76},{name : "Gopal", age : 14},]
  const keyOnObject = "age";
console.log(returnSortedArrayOfObjBasedOnKey(inArr,keyOnObject))

//Q Implement a deep clone function in JavaScript that creates 
//a copy of a nested object or array without any reference to the original. 

function deepCloneOfObject(givenObj){
    return JSON.parse(JSON.stringify(givenObj));
}