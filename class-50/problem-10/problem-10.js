// Author: Nhial Abraham Maluac Nhial <nhial-cham>

// Request user inputs
const vehicleType = prompt("Enter vehicle type (car or motorcycle:)").toLowerCase();
const hoursParked = parseFloat(prompt("Enter number of hours parked:"));
let totalToPay;

// Conditionals
// Data validation
if (isNaN(hoursParked) || hoursParked <= 0 || hoursParked > 100) {
    alert("Invalid parking time.");
} else if (vehicleType !== "car" && vehicleType !== "motorcycle") {
    alert("Invalid vehicle type.");
}
// Business rules (logic)
else {
    // Nested conditionals
    // vehicle logic
    if (vehicleType === "car") {
        // [Car] hours quantity
        if (hoursParked <= 2) {
            totalToPay = 5 * hoursParked;
            alert(
                "[Car] Total to pay for: " + hoursParked +
                " hours is: " + totalToPay + " USD."
            );
        } else {
            totalToPay = 10 * hoursParked;
            alert(
                "[Car] Total to pay for: " + hoursParked +
                " hours is: " + totalToPay + " USD."
            );
        }
    } else {
        // [Motorcycle] hours quantity
        if (hoursParked <= 2) {
            totalToPay = 3 * hoursParked;
            alert(
                "[Motorcycle] Total to pay for: " + hoursParked +
                " hours is: " + totalToPay + " USD."
            );
        } else {
            totalToPay = 6 * hoursParked;
            alert(
                "[Motorcycle] Total to pay for: " + hoursParked +
                " hours is: " + totalToPay + " USD."
            );
        }
    }
}
/*
-----------------------------
Desktop Test
Parking Fee Calculator
----------------------------

vehicleType = car; hoursParked = 2;
=> [Car] Total to pay for: 2 hours is: 10 USD

vehicleType = car; hoursParked = 3;
=> [Motorcylce] Total to pay for: 30 USD
