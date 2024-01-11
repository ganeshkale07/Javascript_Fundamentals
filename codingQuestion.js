
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
//console.log(returnSortedArrayOfObjBasedOnKey(inArr,keyOnObject))

//Q Implement a deep clone function in JavaScript that creates 
//a copy of a nested object or array without any reference to the original. 

function deepCloneOfObject(givenObj){
    return JSON.parse(JSON.stringify(givenObj));
}


//Debounce function
const buttonClick = debounceFunction(actualAPICall , dealy = 2000);

function actualAPICall(){
    console.log("User clicked");
}

function debounceFunction(funcForAPICall,delay){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(() => {
            funcForAPICall();
        }, delay);
    }
}

//Q - Implement a function that takes two sorted arrays 
//and merges them into a single sorted array without using any built-in sorting functions.
function returnSingleSortedArray(a , b ){
    let result  = [...a,...b].sort((a,b) => a - b);
    return result;
}

//console.log(returnSingleSortedArray([67,89,99],[3,78,91]))

//Write a function that checks if a given string is a palindrome, 
//considering only alphanumeric characters and ignoring case. 
function checkGivenStringPalindrome(str){
    // remember
    //I forgot to clearn the given string it may contain "Ganeh@%@%#@882398"
    //[^a-z] find character not between the bracket
    let finalstr = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    return finalstr === finalstr.split('').reverse().join('') ? "Yes" : "No";
}
//console.log(checkGivenStringPalindrome("raaa#^@#^#&@@##aaaaar"));


//Q - Implement a function that flattens a nested array in JavaScript,
//converting it into a single-level array. 

function flattenNestedArray(givenArr){
    return givenArr.flat(Infinity);
}


//Q - Write a function that determines
//if two strings are anagrams of each other
function checkGivenStringAnagra(str1,str2){
    return str1.split('').toLowerCase().sort() ===  str2.split('').toLowerCase().sort() ? "Yes" : "No";
}

//Q Implement a function to 
//reverse a string without using the built-in reverse() method.
function reverseStringWithoutSort(str){
    let result = '';
    for(let i = str.length - 1 ; i >= 0 ; i--){
        result = result.concat(str[i]);
    }
    return result;
}

//console.log(reverseStringWithoutSort("Yoyo"));

//TODO- memoization concept
// Create a JavaScript function that returns the Fibonacci sequence 
// up to a given number,
// utilizing memoization for optimized performance. 


//TODO - recursion concept
//Q Write a recursive function to calculate the factorial of a given number. 

function factorial(num) { 

    if (num <= 1) return 1; 
  
    return num * factorial(num - 1); 
  
  }


//9:20 -TODO
function returnArrayWithoutAnagram(arr){
    let storage = [],result = [];
    //arraged word array
    let arrangedArray = arr.map((ele) => ele.toLowerCase().split('').sort().join(''));
    arrangedArray.forEach((ele,index) => {
        if(index === 0){
            storage.push({ele,index})
        }else{
            storage.forEach((obj) => {
                if(obj.ele === ele){
                    return
                }else{
                    storage.push({ele,index})
                }
            })
        }
    })
    console.log(storage)
    storage.forEach((ele) => result.push(arr[ele.index]))
    return result;
}

//console.log(returnArrayWithoutAnagram(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]));
 
//TODO
function filterAnagrams(arr) {
    const uniqueStrings = new Set();
    const resultArray = [];
  
    for (const str of arr) {
        console.log([...uniqueStrings])
      const isAnagramPresent = [...uniqueStrings].some(uniqueStr => areAnagrams(uniqueStr, str));
  
      if (!isAnagramPresent) {
        uniqueStrings.add(str);
        resultArray.push(str);
      }
    }
  
    return resultArray;
  }
  
// Helper function to check if two strings are anagrams
function areAnagrams(str1, str2) {
return str1.length === str2.length && str1.split('').sort().join('') === str2.split('').sort().join('');
}

const inputArray = ["listen", "silent", "enlist", "hello", "world"];
//const resultArray = filterAnagrams(inputArray);

//console.log(resultArray);

//Q - Given an array of numbers, write a function 
//to find the largest and smallest numbers in the array. 
function findLargeandSmallInArray(givenArr){
    //sol - 1
    givenArr.sort((a,b) => a - b);
    return {
        largeNumber : givenArr[givenArr.length - 1],
        smallNumber : givenArr[0]
    }
    //sol - 2
    // return {
    //     largeNumber : Math.max(...givenArr),
    //     smallNumber : Math.min(...givenArr)
    // }
}

//console.log(findLargeandSmallInArray([3,88,98,75,14]));


//Q - Write a function that takes an array of integers as input 
//and returns a new array with only the unique elements.
function uniqueIntergerArray(givenArr){
    //sol - 1
    let result = new Set();
    givenArr.forEach((ele) => result.add(ele));
    return Array.from(result);
    //sol -2 
    // const result = [];
    // givenArr.forEach((ele,index) => {
    //     if(index === 0){
    //         result.push(ele);
    //     }else{
    //         if(!result.includes(ele)){
    //             result.push(ele)
    //         }
    //     }
    // })
    // return result;
    //sol - 3 elegant solution
    //sol - 1
    // let result = new Set(givenArr);
    // return Array.from(result);
}
//console.log(uniqueIntergerArray([22,22,4,5,64,4,4,4,4,5,6]))






//Q - Implement a function to find the factorial of a given number.
function findFactorialOfNumber(num){
    let result = 1;
    for(let i = 1 ; i <= num ; i++){
        result = result * i;
    }
    return result;
    //Elegant way sol - 2
    // function factorial(number) { 
    // if (number === 0 || number === 1) return 1; 
    //     return number * factorial(number - 1); 
    // } 
} 
//console.log(findFactorialOfNumber(0))

//Q - Write a function that determines if a given number is prime or not.
function isPrime(num){
    //O is not prime 
    //1 is not 
    //2 is only even number which is prime
    if(num === 0){
        return "Is Prime";
    }else if(num === 1){
        return "Not Prime"
    }else {
        for(let i = 2 ; i <= Math.sqrt(num) ; i++){
            if(num % i === 0){
                return `Not Prime ${i}`;
            }
        }
        return "Is Prime"
    }
}
//console.log(isPrime(1889))

//Q - Implement a function to find the sum of all the numbers in an array.
function sumOfAllMember(givenArr){
    return givenArr.reduce((initial,ele) => initial + ele);
} 

//console.log(sumOfAllMember([45,85,97,33]))

//Q - Given a string, write a function to count the occurrences 
//of each character in the string. 
function allOccuranceOfEachChar(str){
    let result  = []; emptyStr = '';
    const sortStr = str.toLowerCase().split('').sort().join();
    for(let char of sortStr){
        if(!emptyStr){
            emptyStr += char;
        }else{
            if(emptyStr.includes(char)){
               emptyStr += char; 
            }else{
                result.push({str : emptyStr , occurance : emptyStr.length})
                emptyStr = '';
                emptyStr += char;
            }
        }
    }
    return result;
}

console.log(allOccuranceOfEachChar("GaneshGaneshhhhhagdddgggg"))
//Q - Implement a function to remove duplicates from an array. 
//Q -  Write a function that sorts an array of numbers in ascending order. 
//Q - Write a function that reverses the order of words 
//in a sentence without using the built-in reverse() method. 
//Q - Implement a function that checks if a given string is a palindrome (reads the same forwards and backwards) while ignoring whitespace and punctuation. 
//Q - Write a function that takes an array of integers and returns the largest difference between any two numbers in the array. 
//Q - Implement a function that removes duplicates from an array, keeping only the unique elements. 
//Q - Write a function that accepts a number and returns its factorial (e.g., factorial of 5 is 5 x 4 x 3 x 2 x 1). 
//Q - Implement a function that flattens a nested array into a single-dimensional array. 
//Q - Write a function that checks if a given string is an anagram of another string (contains the same characters in a different order). 
//Q - Implement a function that finds the second smallest element in an array of integers. 
//Q - Write a function that generates a random alphanumeric string of a given length. 
//Q -  Implement a function that converts a number to its Roman numeral representation. 
//Q - Write a function that returns the sum of all numbers in an array. 
//Q -   Implement a function that finds the maximum number in an array. 
//Q -   Write a function that returns a new array containing only the unique elements from an input array. 
//Q -   Implement a function that returns the average value of numbers in an array. 
//Q -   Write a function that sorts an array of strings in alphabetical order. 
//Q -   Implement a function that finds the index of a specific element in an array. If the element is not found, the function should return -1. 
//Q -   Write a function that removes all falsy values (false, null, 0, “”, undefined, and NaN) from an array. 
//Q -   Implement a function that merges two arrays into a single array, alternating elements from each array. 
//Q -   Write a function that finds the second largest number in an array. 
//Q -  Implement a function that groups elements in an array based on a given condition. For example, grouping even and odd numbers into separate arrays. 

