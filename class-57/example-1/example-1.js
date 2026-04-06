// Author: Nhial Abraham Maluac Nhial <nhial-cham>

//Request the user input
const daynumber = parseInt(prompt("Enter the day number (1-7):"));
let day = "";

//classify if else statement conditionals
if (daynumber === 1) {
    day = "Monday";
}else if (daynumber === 2) {
    day = "Tuesday";
}       else if (daynumber === 3) {
    day = "Wednesday";
}else if (daynumber === 4) {
    day = "Thursday";
}else if (daynumber === 5) {
    day = "Friday";
}else if (daynumber === 6) {
    day = "Saturday";
}else if (daynumber === 7) {
    day = "Sunday";
}else {
    day = "Invalid day number. Please enter a number between 1 and 7.";
}       

alert("The day number " + daynumber + " Its' equivalent to: " + day);