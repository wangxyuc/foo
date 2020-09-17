const basket = ['apple', 'grape', 'candy'];
const detailedBasket = {
    apples: 5,
    grapes: 10,
    candy: 1000
}

// 1
for (let i = 0; i < basket.lbasket; i++) {
    console.log(basket[i]);}

// 2
basket.forEach(element => {
    console.log(element)
});


// for of
// iterating - iterate on VALUES
for (iterator of basket) {      // iterable: array, string  
    console.log(iterator);
}
>>  'apple'
    'grape'
    'candy'


// for in - properties / KEYS
// works on objects
// enumerating - enumerable property names of an object
for (key in object) {   //template
    if (object.hasOwnProperty(key)) {
        const element = object[key];
    }
}

for (item in detailedBasket) {
    console.log(item) }
>>  'apple'
    'grape'
    'candy'


    
不可将obj传入for of loop，因为obj is not iterable
但是array可传入for in loop, 因为 array 可以相当于 key 为 index 的特殊 obj

for (item in basket) {
    console.log(item) }
>>  0
    1
    2 

basket = {  // array basket
    0: 'apple',
    1: 'grape',
    2: 'candy'
}