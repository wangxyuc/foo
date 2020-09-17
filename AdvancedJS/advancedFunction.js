const first = () => {
    const greet = "hi";         // greet is only in first() scope
    const second = () => {         // so you don't have to create all diff names
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Closures:
// A function ran, the function executed, and the function is never going to execute again.
// BUT it's going to remember that there are references to those variables 
// so child scope have acess to parent's scope. Can remember
// 



// Currying
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);
// accepts parameters one at a time
// returns a function
// function (a) returns 3 * b 



// compose 
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;

compose(sum, sum)(5);
>> 7


// avoiding side effects, functional purity
// always return something, not undefined
// DETERMINISM: whatever input same thing, always return the same thing




// arrow funtion is better in objects

class Person {
    constructor(name) {
        this.name = name;
    }

    printNameArrow() {
        setTimeout(
            () => {
                console.log('Arrow: ' + this.name);
            },
            100
        )
    }


    printNameFunction() {
        setTimeout(
            function() {
                console.log('Function: ' + this.name);
            },
            100
        )
    }
}

let person = new Person('Bob');
person.printNameArrow();
person.printNameFunction();
console.log(this.name);


>> <empty>
>> Arrow: Bob
>> Function: 


// This is because the scope of the traditional funtion. Its scope is at where is called
// Here is in a global scope, so "this" is redefined by function when it is called
// But the arrow function does not redefine, so this.name = 'Bob' 