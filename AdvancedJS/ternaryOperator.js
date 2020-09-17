// Advanced JS - ternary operator

// condition ? exp1 : exp2;


function isValid (bool) {
    return bool;
}

var answer = isValid(true) ? "Yes." : "No access";

var account = "Your account num is : " + ( isValid(true) ? "1234" : "Access denied" );




// switch

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "You encounter a monster";
            break;
        case "left":
            whatHappens = "You found a river";
            break;
        default:
            whatHappens = "Please enter a valid direction";
            break;
    }
    return whatHappens;
}