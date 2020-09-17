// String padding

'someString'.padStart(5);
>> '     someString'

'anotherString'.padEnd(5);
>> 'anotherString     '



// trailing comma is now valid!! hehe

const fun = (a,b,c,d,) => {
    console.log(a);
}

fun(1,2,3,4,);  // still works!



// object.values and object.entries

// old version: Object.key 有点难用
let obj = {
    username1: 'Santa',
    username2: 'Rudolf',
    username3: 'Mr.Grinch'
}   // it is not an array so can't iterate like map or filter etc

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

// Object.values
Object.values(obj).forEach(value => console.log(value))

// Object.entries
Object.entries(obj).forEach(value => console.log(value))
>> ["username1", "Santa"]
   ["username2", "Rudolf"]
   ["username3", "Mr.Grinch"]



Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})
>>  ["Santa1", "Rudolf2", "Mr.Grinch3"]



// Async Await tbc