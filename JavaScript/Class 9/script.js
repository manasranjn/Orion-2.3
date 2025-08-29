const button = document.getElementById("btn")
const paragraph = document.getElementById("para")

button.onmouseenter = () => {
    paragraph.style.color = "green"
    paragraph.style.fontSize = "30px"
}

const input = document.getElementById("input")
input.onchange = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.type);
    console.log(e.target.value);
}
function handleClick() {
    paragraph.style.color = "red"
    console.log("Add Event Listner");
}

const button2 = document.querySelector(".button")
button2.addEventListener("dblclick", handleClick)

button2.addEventListener("click", () => {
    button2.style.backgroundColor = "green"
})

setTimeout(() => {
    console.log("hello");

}, 5000)


// setTimeout(() => {
//     console.log("Event removed");
//     button2.removeEventListener("dblclick", handleClick)
// }, 2000)
