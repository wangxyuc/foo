// be cautious. super confusing


1 == '1'
>> true     // ??!!

// in JS, type coersion happens when you use ==
// if they have diff types, JS engine will try to
// coerse them to the same type and compare. 
// In this case, it is actually:
// 1 == 1


1 === '1'
>> false    // no coersion


// always use === 




if (1) {console.log(5);}
>> true
if (0) {console.log(5);}
>> false

// 1 is coersed to boolean true
// 0 is ....... false






