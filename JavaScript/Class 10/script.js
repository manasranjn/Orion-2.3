//! Prototype

const obj = {
    name: "John",
    age: 22,
    address: "NY",
    mark: 9.5
}
// console.log(obj.name);

const newObj = {
    __proto__: obj,
    name: "Manas",
    course: "MERN"
}
// console.log(newObj);

// console.log(newObj.name);
// console.log(newObj.address);
// console.log(newObj.course);

const obj2 = Object.create(obj)
// console.log(obj2);
// console.log(obj2.age);

obj2.age = 20
// console.log(obj2.age);


//! Class in JS
class Example {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
    }
}

const person1 = new Example("John", 22)
// person1.greet()
// console.log(person1.age);

//? Inheritance

class Child extends Example {

    sayHello() {
        console.log("Hello everyone");
    }

    greet() {
        console.log("Hi");
    }
}

const child1 = new Child("ABCD", 10)
// child1.greet()
// child1.sayHello()

//! Sync and Async
//? Sync
console.log("One");
console.log("Two");
console.log("Three");
console.log("Four");
setTimeout(() => {
    console.log("Five");
}, 5000)
console.log("Six");
console.log("Seven");
console.log("Eight");

