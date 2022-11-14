function sayHello(name: string){
    return `Hello, my name is ${name}`;
}

function address(district: string){
    return `My District is ${district}`;
}

let response: string = sayHello("Whitebeard");
let response2: string = address("Moby Dick");

console.log(response);
console.log(response2);