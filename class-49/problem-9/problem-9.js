// Author: Nhial Abraham Maluac Nhial <nhial-cham>

// Request user (employee) data
const age = parseInt(prompt("Enter your age:"));
const inStudent = prompt("Are you a student? (yes/no)").toLowerCase();

// conditionals
// Validate the user age
if (isNaN(age) || age < 0 || age > 100) {
    alert ("Invalid age.");
} 
else if (isStudent !== "yes" && isStudent !== "no") {
    alert("invalid student status");
}
    //business rules (Child - teenager)
    if (age < 18) {
        if(isStudent === "yes") {
            alert("50% discount");
        } else {
            alert("30% discount");
        }
    }
    //business rules (adults)
    if(isStudent === "yes") {
        alert("20% discount");
    } else {
        alert("No discount");
    }


/*
---------------------------------------
Desktop Test
---------------------------------------




---------------------------------------
*/