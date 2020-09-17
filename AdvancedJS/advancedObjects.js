// reference type
// like in Java, string and objects are passed by reference 

[] == []
>> false;


const object1 = {value: 10};
const object2 = object1;
const object3 = {value: 10};

object1 == object2
>> true

object1 == object3
>> false
 



// context
// context vs. scope
function b() {
    let a = 4;
}   // scope gets created when it sees {}
    // console.log(a) will get ReferenceError

    // context tells you object environment you're in
console.log(this);
// In dev tool: this: you will get Window object 

const object4 = {
    a: function () {
        console.log(this);
    }
}




// instantiation

class Player {
    constructor(name, type){        // java 他来了他来了
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`hi, ${this.name}, you are ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)           // 看这里看这里
    }

    play(){
        console.log(`I am a ${this.type}!!`)
    }
}

const wizard1 = new Wizard("Sherly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");







// pass by reference vs. pass by value


// array: pass by reference 
let c = [1, 2, 3, 4, 5];
let d = c
d.push(111);
console.log(d);     // [1, 2, 3, 4, 5, 111]
console.log(c);     // [1, 2, 3, 4, 5, 111]

let e = [].concat(c);       // 通过concat将c复制
e.push(15);
console.log(e);     // [1, 2, 3, 4, 5, 111, 15] !!!
console.log(c);     //[1, 2, 3, 4, 5, 111]



// object: pass by reference

let obj = {a:'a', b:'b', c:'c'};
let clone = Object.assign({}, obj);

obj.c = 5;
console.log(clone.c);       // 'c' not changed!! 

let clone2 = {...obj}   // 世界真神奇


// what if an obj contains another obj?
let obj1 = {
        a:'a', 
        b:'b', 
        c: {deep: 'try copy me'}
    };

let clone1 = Object.assign({}, obj1);
let clone12 = {...obj1}

obj1.c.deep = 'haha';
console.log(obj1);
console.log(clone1);
console.log(clone12);       // all will have 'haha' for c.deep!!!

// because all objs are call by reference 
// we cloned the first obj, but this is a shallow clone
// the inside layer is still a reference

let superClone = JSON.parse(JSON.stringify(obj1));
console.log(superClone);    // now superclone.c.deep is 'try copy me'


