// .flat()

const array = [1,2,3,4,5]
array.flat()
>> [1, 2, 3, 4, 5]

const array2 = [1, [2, 3], [4, 5]]
array2.flat()
>> [1, 2, 3, 4, 5]  

const array3 = [1, [2, 3], [4, 5, [6]]]
array3.flat()
>> [1, 2, 3, 4, 5, Array(1)]
    0: 1
    1: 2
    2: 3
    3: 4    
    4: 5
    5: [6]      // not completely flatened!!

    // because .flat(1) default flaten layer is 1

array3.flat(2)  // higher flaten also works


const entries = ['bob', 'sally', ,,, 'cindy']
entries.flat()
>> ["bob", "sally", "cindy"]



// flatMap()
array2.flatMap(item => item + " 😎")
>> ["1 😎", "2,3 😎", "4,5 😎"]



// trim
userEmail = '                 eddy@gmail.com'
userEmail2 = 'jonnyaaa@gmail.com        '
userEmail.trimStart()
userEmail2.trimEnd()



// fromEntries: create obj from arr
userProfile = [['commanderTom', 23], 
                ['derekZlander', 40],
                ['hansen', 15]]

Object.fromEntries(userProfile)
>> {commanderTom: 23, derekZlander: 40, hansen: 15}
// 和Object.entries() 完全相反



// try and catch block

try {
    4 + 5
} catch (error) {       // in ES 10, you don't have to pass in the (error) param
    console.log('you messed up!' + error)
}

