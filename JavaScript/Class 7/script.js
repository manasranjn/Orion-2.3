//! Attribute Manipulation
const headingEl = document.getElementById("heading")
// console.log(headingEl);

// console.log(headingEl.getAttribute("class"));

const subhead = document.getElementById("subhead")
subhead.setAttribute("class", "subheading p1 p2 p3")
console.log(subhead);

let imageEl = document.getElementById("productImg")
imageEl.setAttribute("src", "https://cdn.pixabay.com/photo/2024/01/11/16/29/leaves-8502135_1280.jpg")

imageEl.setAttribute("src", "https://cdn.pixabay.com/photo/2024/11/07/07/34/hydrangeas-9179924_1280.jpg")

//? InnerHTML
//? InnerText
//? TextContent

subhead.innerHTML = "Inner HTML Property"
subhead.innerText = "Inner Text Property"
subhead.textContent = "Text Content Property"

const box = document.querySelector(".box")

box.innerHTML = `
<h1> This is a Box </h1>
`
box.style.backgroundColor = "red"
box.style.color = "white"