// Author: Nhial Abraham Maluac Nhial <nhial-cham>

// Request the user data
const age = parseInt(prompt('Enter your age:'));
const salary = parseFloat(prompt("Enter your monthly salary:"));
const employment = prompt(
    "Enter employment status: (employed, self-employed, unemployed)"
).toLowerCase();
const creditScore = parseInt(prompt("Enter your credit score:"));

// Global variables
let multiplier;
let loanAmount;

// Conditionals
// Data validation
if (isNaN(age)) {
    alert("Invalid age. Try again.");
} else if (age < 18) {
    alert("Minimum age required is 18.");
} else if (age > 65) {
    alert("Maximum age allowed is 65.");
} else if (isNaN(salary)) {
    alert("Invalid salary. Try again.");
} else if (salary <= 0) {
    alert("Monthly salary invalid.");
} else if (isNaN(creditScore)) {
    alert("Invalid credit score. Try again.");
} else if (
    employment !== "employed" &&
    employment !== "self-employed" &&
    employment !== "unemployed"
) {
    alert("Invalid employment status.");
} else {
    // Business rules (logic)
    // Employment logic
    if (employment === "unemployed") {
        alert("Loan rejected. Get a job!!!");
    } else {
        // Credit score logic
        if (creditScore >= 750) {
            multiplier = 5;
        } else if (creditScore >= 650) {
            multiplier = 3;
        } else if (creditScore >= 550) {
            multiplier = 2;
        } else {
            alert("Loan rejected. Improve your credit score.");
            multiplier = 0;
        }

        // Loan calculation
        if (multiplier > 0) {
            loanAmount = salary * multiplier;

            // self-employed rule
            if (employment === "self-employed") {
                loanAmount = loanAmount * 0.8;
            }

            alert("Loan approved. Amount: $" + loanAmount + " USD.");
        }
    }
}