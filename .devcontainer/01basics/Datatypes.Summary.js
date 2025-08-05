// Premitive 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
// Reference type(None Primitive): Array, Objects, Functions


// Primitive 
const score = 100;
const scoreValue = 100.2;

const isLoggedIn = false;

const outSideTemp = null;

let usermail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // false

const bigNumber = 1453256565n;


// Non Primitive:.....

// Array
const heros = ["shaktiman", 'Nag', "dogs"];

// Ojects
let myObj = {
    name: "Mustakeen",
    age: 22
}

// Functions:...
const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof scoreValue); // Number
console.log(typeof bigNumber); // Bigint
console.log( typeof null); // object
console.log(typeof heros); //object



//### Memories......

// stack(premitive)
//Heap(non premitive)

let myName = "Mustakeen";
let anothername = myName;
anothername = "magicalstories";
console.log(myName);
console.log(anothername);

let userOne = {
    email: "use@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "mustakeen@g.com";
console.log(userOne.email); // ''
console.log(userTwo.email); // ''
