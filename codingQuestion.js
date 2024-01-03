
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
}

console.log(removeDuplicatefromArray([1,2,4,3,6,1,7,7,3,2]));