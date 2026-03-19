// Author: Nhial-cham <github>

// Prompt the user to enter a number
var num = prompt("Enter a number: ");

// Check if the number is negative
if(num < 0) {
    alert("The number is negative");
}
// Check if the number is zero
else if(num == 0) {
    alert("The number is zero");
} 
// Else if, the number is positive
else {
    alert("The number is positive");
}

/*
    ----------------------------------------
    Desktop test
    ----------------------------------------
    num = -5   => The number is negative
    num = 0     => The number is zero
    num = 5    => The number is positive
    ----------------------------------------
*/