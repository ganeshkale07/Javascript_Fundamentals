//Write a JavaScript function to check if a given string is a palindrome
// (reads the same forwards and backwards).

function palindrome(str){
    return str == str.split('').reverse().join('')
}
//console.log(palindrome("foo"))

//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

function returnEvenNumber(nums = []){
    return nums.filter((num) => (num % 2) === 0);
}
//console.log(returnEvenNumber([33,7,9.82,66,34]))

//Write a JavaScript program to calculate the factorial of a given number. 


function returnfactorila(num){
    let result = 1 ;
    for(let i = num; i >=1 ; i--){
        result = result * i;
    }
    return result;
}
//console.log(returnfactorila(0))

//Write a JavaScript function to check if a given number is prime.

function checkGivenNumberIsPrime(num){
    /*** Lengthy logic and worong 0 , 1 not prime numbers */
    // if(num === 0){
    //     return "No";
    // }else{
    //     if(num === 1 || num === 2){
    //         return "Yes";
    //     }else{
    //         if(num % 2 === 0){
    //             return "No";
    //         }else{
    //             let check = "Yes";
    //             for(let i = num - 1 ; i > 1 ; i--){
    //                 num % i === 0 ? check = "No" : check = "Yes";
    //                 if(check === "No"){
    //                     break;
    //                 }
    //             }
    //             return check;
    //         }
    //     }
    // }
    //As 0 divided by any natural number 0/7 = 0 - so not prime
    //1 has only one factor which 1 so not prime number
    if(num <= 1){
        return false;
    }

    for(let i = 2 ; i <= Math.sqrt(num) ; i++){
        if(num % i === 0){
            return false;
        }
    }   
    return true;
}
//console.log(checkGivenNumberIsPrime(91))

//Write a JavaScript program to find the largest element in a nested array. 
function largestElementInArray(num){ 
    console.log(num)
    return Math.max(...num.flat());
}
// console.log(largestElementInArray([33,76,[12,32],87,[1,4,99]]));

function largestElementInArrayTwo(num){
    let largest = num[0];
    console.log(num)
    num.forEach(ele => {
        if(ele > largest){
            largest = ele;
        }
    })
    return largest;
}
// console.log(largestElementInArrayTwo([33,76,12,32,87,1,4,99]));

//Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 
function giveFibonacciSeries(num){
    //4 - 1 1 2 3
    let defaultArray = [0,1];
    if(num === 0){
        return []
    }else if(num === 1) {
        return [0];
    }else {
        if(num !== defaultArray.length ){
            for(let i = num - 2; i > 0 ; i--){
                defaultArray.push(defaultArray[defaultArray.length - 1] + defaultArray[defaultArray.length - 2])
            }
        }        
        return defaultArray;
    }
}
console.log(giveFibonacciSeries(90));

//Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 
function titleCaseStr(str){
    return str.split(' ').map(ele => ele[0].toUpperCase().concat(ele.slice(1 , ele.length)))
}

//console.log(titleCaseStr("than for joo jeieiok o3io3ieo3 0-- jei3jei3e"));