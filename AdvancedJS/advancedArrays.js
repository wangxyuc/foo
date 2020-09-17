// Advanced Arrays

const array = [1, 2, 10, 16];

const double = []

const newArr = array.forEach( (num) => {
    num * 2;
} ) // forEach only care about iteration
    // array is not changed
    // could cause some side effects

const newArr = array.forEach( (num) => {
    double.push(num * 2);
} ) 



// map, filter, reduce


// map
const mapArr = array.map((num) => {
    return num * 2;
})  // map has to return something

// short form:
num => num * 2;

// filter
const filterArr = array.filter((num) => {
    return num > 5;
})  // return everything > 5


// reduce
const reduceArr = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0)   // return 29