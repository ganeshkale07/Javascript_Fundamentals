//Question 3 1004
let given  = {
     menu_items: [{
         parentModule: "Save As",
      childModule: "Ms Word"
     }, {
         parentModule: "File",
         childModule: "Save As"
     }, {
         parentModule: "File",
         childModule: "New file"
     }, {
         parentModule: "Ms Word",
         childModule: "docx"
     }, {
         parentModule: "Ms Word",
         childModule: "doc"
     }, {
         parentModule: "Save As",
         childModule: "pdf"
     }, {
         parentModule: "View",
         childModule: "Layout"
     }, {
         parentModule: "Layout",
         childModule: "Single"
     }, {
         parentModule: "Layout",
         childModule: "Column 2"
     }]
    }

let allChildModuleHolder = given.menu_items.map((ele) => ele.childModule);

let res = given.menu_items.filter(ele => !allChildModuleHolder.includes(ele.parentModule));

console.log("Question 1004" , new Set(res.map(ele => ele.parentModule)));

//Question 4 1006
//create an array with n number of elements.
//where insertion should happen at the end of the array. once the array is full instead of
//throwing an error the first element should be deleted. All the other elements should be
//shifted to its previous index.


function createAnArray(size, givenArrEle){
    let result = [];
    givenArrEle.forEach(ele => {
        if(result.length < size){
            result.push(ele);
        }else{
            result.shift();
            result.push(ele);
        }
    })
    return result;
    
}

console.log("Question 1006" ,createAnArray(5, [1,2,3,4,5,6,7,8,9,10]));

//Question 5 1009 
//On specified date what is occurance of severity
let givenObj = {
    HOST_LIST: [
     {
        ID: 85269872,
        DETECTION_LIST: [
            {
                SEVERITY: 4,
                LAST_FOUND_DATETIME: "2023-12-31"
            },
            {
                SEVERITY: 3,
                LAST_FOUND_DATETIME: "2023-12-31"
            },
            {

                SEVERITY: 4,
                LAST_FOUND_DATETIME: "2023-12-30"
            },
            {
                SEVERITY: 4,
                LAST_FOUND_DATETIME: "2023-12-31"
            },
            {
                SEVERITY: 3,
                LAST_FOUND_DATETIME: "2023-12-29"
            },
            {
                SEVERITY: 2,
                LAST_FOUND_DATETIME: "2023-12-30"
            },
            {
                SEVERITY: 3,
                LAST_FOUND_DATETIME: "2023-12-25"
            },
            {
                SEVERITY: 4,
                LAST_FOUND_DATETIME: "2023-12-28"
            },
            {
                SEVERITY: 3,
                LAST_FOUND_DATETIME: "2023-12-31"

            },
            {
                SEVERITY: 5,
                LAST_FOUND_DATETIME: "2023-12-21"
            },
            {
                SEVERITY: 2,
                LAST_FOUND_DATETIME: "2023-12-26"
            }
        ]
    },
     {
        ID:85276338,
        DETECTION_LIST: [
            {
                SEVERITY: 4,
                LAST_FOUND_DATETIME: "2023-12-31"
            },
            {
                SEVERITY: 4,
                LAST_FOUND_DATETIME: "2023-12-30"
            },
            {
                SEVERITY: 3,
                LAST_FOUND_DATETIME: "2023-12-31"
            },

            {
                SEVERITY: 1,
                LAST_FOUND_DATETIME: "2023-12-31"
            },
            {
                SEVERITY: 3,
                LAST_FOUND_DATETIME: "2023-12-31"
            },
            {
                SEVERITY: 4,
                LAST_FOUND_DATETIME: "2023-12-28"
            },
            {
                SEVERITY: 2,
                LAST_FOUND_DATETIME: "2023-12-26"
            },
            {
                SEVERITY: 5,
                LAST_FOUND_DATETIME: "2023-12-30"
            },
            {
                SEVERITY: 3,
                LAST_FOUND_DATETIME: "2023-12-30"
            }
        ]
    },

     {
        ID:85276339,
        DETECTION_LIST: [
            {
                SEVERITY: 4,
                LAST_FOUND_DATETIME: "2023-12-25"
            },
            {
                SEVERITY: 1,
                LAST_FOUND_DATETIME: "2023-12-25"
            },
            {
                SEVERITY: 3,
                LAST_FOUND_DATETIME: "2023-12-26"
            },
            {
                SEVERITY: 3,
                LAST_FOUND_DATETIME: "2023-12-29"
            },
            {
                SEVERITY: 2,
                LAST_FOUND_DATETIME: "2023-12-29"
            },
            {
                SEVERITY: 4,
                LAST_FOUND_DATETIME: "2023-12-31"

            },
            {
                SEVERITY: 3,
                LAST_FOUND_DATETIME: "2023-12-30"
            },
            {
                SEVERITY: 5,
                LAST_FOUND_DATETIME: "2023-12-29"
            },
            {
                SEVERITY: 3,
                LAST_FOUND_DATETIME: "2023-12-30"
            }
        ]
    }
]
}

let listOfLastFoundDate = givenObj.HOST_LIST.map(ele => ele.DETECTION_LIST.map(ele => ele.LAST_FOUND_DATETIME));
let result = [];
new Set(listOfLastFoundDate.flat()).forEach(ele => {
    let a = {
        [ele] : {
            "Severiaty 1" : 0,
            "Severiaty 2" : 0,
            "Severiaty 3" : 0,
            "Severiaty 4" : 0,
            "Severiaty 5" : 0,
            }
    }
    givenObj.HOST_LIST.forEach(elem => elem.DETECTION_LIST.forEach(e => {
        
        if(e.LAST_FOUND_DATETIME === ele){
            switch(e.SEVERITY){
                case 1:
                    a[ele]['Severiaty 1']++;
                    break;
                case 2:
                    a[ele]['Severiaty 2']++;
                    break;
                case 3:
                    a[ele]['Severiaty 3']++;
                    break;
                case 4:
                    a[ele]['Severiaty 4']++;
                    break;
                case 5:
                    a[ele]['Severiaty 5']++;
                    break;
            }
        }
    }))

    result.push(a);
})

console.log("Question 1009" ,result)

//Question 6 1010
//Given collection of numbers  find a matching pair that is equal to sum

function findPairWhoseSumIsGivenNumber(givenArray, sum){
    let result = [];
    givenArray.forEach(ele => {
        if(ele < sum ){
            //after reducing current number from sum is other half present
            let isPresent = givenArray.find(e => {
                //Do not take same element
                if(e !== ele){
                   return e === (sum - ele)
                }
            } );
            if(isPresent){ 
                if(!result.includes(isPresent)){
                    result.push(ele, isPresent);
                }                
            }
        }
    })

    return result.length ? result : "Not Matching Pair Found!";
}

console.log("Question 1010 1" ,findPairWhoseSumIsGivenNumber([2,4,7,11],9));
console.log("Question 1010 2" ,findPairWhoseSumIsGivenNumber([1,5,3,6,8],9));
console.log("Question 1010 3" ,findPairWhoseSumIsGivenNumber([10,20,15,3,7],25));
console.log("Question 1010 4" ,findPairWhoseSumIsGivenNumber([1,2,3,4,5],10));

//Question2 1003
let givenObject2 = {input: [
        {
                                    "@id": "/api/3/comments/016b9ec6-8fe4-4cc8-92d8-4e67f2496356",
                                    "content": "Test",
                                    "replyTo": null
        },
        {
            "@id": "/api/3/comments/d779536d-5295-4c82-adfb-521972399a22",
            "content": "Ok",
            "replyTo": null
        },
        {
            "@id": "/api/3/comments/d779536d-5295-4c82-adfb-521972399a23",
            "content": "Postman post",
            "replyTo": null
        },
        {
            "@id": "/api/3/comments/0bf83bdf-c71c-4cea-a542-1c952b03b0f3",
            "content": "Application eighth Post",
    
            "replyTo": null
        },
        {
            "@id": "/api/3/comments/1505fd76-99be-4ffe-9aaa-e4e513cd8d91",
            "content": "eightth post reply",
            "replyTo": {
                "@id": "/api/3/comments/0bf83bdf-c71c-4cea-a542-1c952b03b0f3",
                "content": "Application eighth Post"
            }
        },
        {
            "@id": "/api/3/comments/1505fd76-99be-4ffe-9aaa-e4e513cd8d92",
            "content": "eightth post reply 2",
            "replyTo": {
                "@id": "/api/3/comments/0bf83bdf-c71c-4cea-a542-1c952b03b0f3",
                "content": "Application eighth Post"
            }
        },
        {
            "@id": "/api/3/comments/6cb63f24-60a6-44a1-b8b3-a2ff54da3dd4",
            "content": "eighth Post Reply 3",
            "replyTo": {
                "@id": "api/3/comments/0bf83bdf-c71c-4cea-a542-1c952b03b0f3",
                "content": "Application eighth Post"
            }
        }
    
    ]
    }

let contentWithReplyNull = [];
givenObject2.input.forEach(ele => {
    if(ele.content && !ele.replyTo){
        contentWithReplyNull.push(ele.content);
    }
});
let finalOutput = [];
contentWithReplyNull.forEach(ele => {
    let repliedMessages = []
    givenObject2.input.forEach(e => {
            if(e.replyTo && e.replyTo.content === ele){
                repliedMessages.push({"content": e.content})
            }
        
    })
    finalOutput.push({
        "content" : ele,
        "noofreplies" : repliedMessages.length,
        ...repliedMessages.length && {"repliesMessages" : repliedMessages}
    })
})
console.log("Q1003" , finalOutput)

// Question 1002. Write a program to generate following output on the basis of following input
// Input:
// [11,1000,1004,1275,10005,10177,10240,10641,10903,11495,11628,15629,18630,21631,21680,23745,24827,28828,33955,44087,48755,50073]
// Output:
// [[11],[1000,1004,1275],[10005,10177,10240],[10641,10903]...............]
// *Note: Each sub array should have elements like as
// 1st array should contain element less than 500, next array should contain elements falling under 500 to 1000 and so on.

function sortNumberOnBasisRange(givenArray){
    let result = [];
    let a = 0;
    let b = 500;
    let currentArray = [];
    givenArray.forEach((ele) => {
        if(ele < b){
            currentArray.push(ele);
        }else{
            if(ele >  a && ele > b){
                result.push(currentArray);
                currentArray=[];
                a = ele - (ele % 2);
                b = a + 500;
            }
            if(ele >= a && ele <= b){
                currentArray.push(ele);
            }
        }
    })
    
    return result;
}

console.log("Question 1002" ,sortNumberOnBasisRange([11,1000,1004,1275,10005,10177,10240,10641,10903,11495,11628,15629,18630,21631,21680,23745,24827,28828,33955,44087,48755,50073]))
