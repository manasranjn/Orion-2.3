async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    console.log(response);

    const data = await response.json()
    console.log(data);

}

// getData()

// console.log("One");
// console.log("Two");
// console.log("Three");
// console.log("Four");
// setTimeout(() => {
//     console.log("Five");
// }, 3000)
// console.log("Six");
// setTimeout(() => {
//     console.log("Seven");
// }, 1000)
// console.log("Eight");

//! Hoisting
// check()
//? Variable Hoisting
// console.log(b);
// console.log(a); //not allowed
let a = 10
// console.log(a);

var b = 1
// console.log(b);

//? Function Hoisting
// check()
function check() {
    console.log("It supports Hoisting");

}
// check()

// check2() //not allowed
let check2 = () => {
    console.log("Not allowed");

}
// check2()

//! sort()
let arr = [9, 6, 8, 32, 1, 5, 78, 8, 43, 6, 4, 7, 9]
let asc = arr.sort((a, b) => a - b)
//[6,8,9,1,5,32,8,43,6,4,7,9,78]
//[6,8,1,5,9,8,32,6,4,7,9,43,78]
//[6,1,5,8,8,9,6,4,7,9,32,43,78]
//[1,5,6,8,8,6,4,7,9,9,...]
//[1,5,6,8,6,4,7,8,9,9..]
//[and so on...]
//[1,4,5,6,6,7,8,8,9,9,32,43,78]
// console.log(asc);


let des = arr.sort((a, b) => b - a)
//[9,8,32,6,5,78,8,43,6,4,7,9,1]
//[9,32,8,6,78,8,43,6,5,7,9,4,1]
console.log(des);

