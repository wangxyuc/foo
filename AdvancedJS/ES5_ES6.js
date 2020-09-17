// Advanced JS - ES6


// let   const

const player = "boby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log("inside: ", wizardLevel);     
}

console.log("outside: ", wizardLevel);

// will get:
//  inside: true
//  outside: false




// Destructuring

const obj = {
    player = "bobby",
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;
        //     |
        //     |        same as
        //    \ /
const {player, experience} = obj;
let {wizardLevel} = obj;            // a lot cleaner!





// Object properties

const name = "john snow";
const obj = {
    [name]: "Hello",
    ["ray" + "smith"]: "Hi Hi",
    [1 + 2]: "Hi !!!!"
}   // 方框内是dynamic！ 


const a = "simon";
const b = true;
const c = {};

const obj = {a, b, c};
// is the same as:
const obj = {
    a: a,
    b: b
}




// Template strings

const greeting = "Heelo" + name + ", " + greeting;  // tedious!
// we can use:
const greetingBest = `Hello ${name}, your age is ${age - 10}, nice to meet you`;




// Default arguments

function greet(name = '', age = 30) {
    return `Hello ${name}, your age is ${age - 10}, nice to meet you`;
}   // even if we don't know the parameters, it gets ignored or have default argument
    // the function will not fail!!