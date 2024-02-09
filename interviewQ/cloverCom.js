// 1. Write a program to generate following output on the basis of following input
// Input:
// [11,1000,1004,1275,10005,10177,10240,10641,10903,11495,11628,15629,18630,21631,21680,23745,24827,28828,33955,44087,48755,50073]
// Output:
// [[11],[1000,1004,1275],[10005,10177,10240],[10641,10903]...............]
// *Note: Each sub array should have elements like as
// 1st array should contain element less than 500, next array should contain elements falling under 500 to 1000 and so on.


//VIMP
//Still not clear 
//how much I have to increment the range not able to decide
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
                a = b;
                b = a * 10;
            }
            if(ele >= a && ele <= b){
                currentArray.push(ele);
            }
        }
    })
    //console.log(result)
    return result;
}

sortNumberOnBasisRange([11,1000,1004,1275,10005,10177,10240,10641,10903,11495,11628,15629,18630,21631,21680,23745,24827,28828,33955,44087,48755,50073]);


//Question 3
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

console.log(new Set(res.map(ele => ele.parentModule)));
