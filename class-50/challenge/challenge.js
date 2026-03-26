// Author: Nhial Abraham Maluac Nhial <nhial-cham>

// Request user inputs
const age = parseInt(prompt("Enter age:"));
const isStudent = prompt("Enter student status (yes or no):").toLowerCase();
const day = prompt("Enter day (e.g., monday, wednesday):").toLowerCase();
const tickets = parseInt(prompt("Enter number of tickets:"));

let totalToPay;
let ticketPrice;

// Conditionals
// Data validation
if (isNaN(age) || age < 0 || age > 120) {
    alert("Invalid age.");
} else if (isNaN(tickets) || tickets < 1) {
    alert("Invalid ticket value.");
}
// Business rules (logic)
else {
    // Nested conditionals
    // Age logic
    if (age < 12) {
        ticketPrice = 6;
    } else if (age >= 65) {
        ticketPrice = 7;
    } else {
        ticketPrice = 12;

        // Student logic
        if (isStudent === "yes" && age >= 12 && age <= 25) {
            ticketPrice = ticketPrice - 3;
        }
    }

    // Day discount logic
    if (day === "wednesday") {
        ticketPrice = ticketPrice - 2;
    }

    // Total calculation
    totalToPay = ticketPrice * tickets;
    //output data
    alert(
        "Total to pay for: " + tickets +
        " ticket(s) is: " + totalToPay + " USD."
    );
}

/*
-----------------------------
Desktop Test
Movie Theater Ticket System
-----------------------------

age = 10; student = no; day = monday; tickets = 2;
=> Total to pay for: 2 ticket(s) is: 12 USD

age = 20; student = yes; day = wednesday; tickets = 2;
=> Total to pay for: 2 ticket(s) is: 14 USD

age = 70; student = no; day = wednesday; tickets = 1;
=> Total to pay for: 1 ticket(s) is: 5 USD
*/