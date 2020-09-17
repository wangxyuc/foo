var todos = [
    "cleaning",
    "exercise",
    "brush teeth",
    "study JS"
];

// for loop:

for (var i = 0; i < todos.length; i++) {
    todos[i] = todos[i] + "!";
};

// forEach loop (starting from ES5)

todos.forEach(function(i){
    console.log(i)
});


// while loop

var counter = 0;
while (counter < 10) {
    console.log(counter);
    counter++;
};

// do-while loop does not check for the condition first
// and will run the do for at least once anyway

var counterTwo = 0;
do {
    console.log(counterTwo);
    counterTwo++;
} while (counterTwo < 10);

