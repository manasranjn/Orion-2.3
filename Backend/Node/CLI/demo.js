console.log("Hello Everyone");

function greet(name) {
    console.log(`Hello ${name}`);

}

console.log(process.argv);

greet(process.argv[2])

const arg = process.argv[2]
console.log(arg);
