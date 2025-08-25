//! Insert a new Element
const heading = document.createElement("h2")
heading.textContent = "This is a new Element created by using createElement()"
// console.log(heading);

const box = document.querySelector(".box")
// box.append(heading)
// box.prepend(heading)
// box.before(heading)
// box.after(heading)
// box.appendChild(heading)
// console.log(box);

//! Delete an element
// box.remove()
// console.log(document);

//? Prompt()
// let name = prompt("Enter Your Name")
// console.log(name);

//? Alert()
// alert("Warning")
// alert("Document is empty")

//! Event and Event Handling
const container = document.getElementsByClassName("container")
console.log(container);

// container[0].innerHTML = "Hello"
container[1].onclick = () => {
    container[1].style.color = "rgb(255,255,255)"
    container[1].style.backgroundColor = "green"
}

function handleChange() {
    container[0].style.color = "rgb(255,0,0)"
    container[0].style.backgroundColor = "black"
}