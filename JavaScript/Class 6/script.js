//! DOM
// console.log(window);
// console.log(document);

//! DOM Selection methods
//? getElementById()
// document.getElementById("idName")
const heading = document.getElementById("heading")
// console.log(heading);

//? getElementsByClassName()
// document.getElementsByClassName("className")
const paragraph = document.getElementsByClassName("para")
// console.log(paragraph);

//? getElementsByTagName()
document.getElementsByTagName("tagName")
const elements = document.getElementsByTagName('p')
// console.log(elements);

//? getElemetsByName()
const email = document.getElementsByName("email")
// console.log(email);
const pass = document.getElementsByName("password")
// console.log(pass);

//? querySelector()
const headingEle = document.querySelector("#heading")
// console.log(headingEle);
const paragraphEle = document.querySelector(".para")
// console.log(paragraphEle);
const element = document.querySelector("p")
// console.log(element);

//? querySelectorAll()
const allPara = document.querySelectorAll(".para")
console.log(allPara);
