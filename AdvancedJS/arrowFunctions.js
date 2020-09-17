function add(a, b) {
    return a + b;
}   // tedious!!

// we can do this:

const add = (a,b) => a + b;



不过这个上述有个小地方也要注意一下，在大括号内的 {} 是需要自行加入 return ，如果没有传入值则会出现 undefined

var callSomeone = ( someone ) => { someone + '吃饭了' } 
console .log(callSomeone( '小明' )) // undefined
