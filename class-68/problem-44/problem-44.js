// Author: Nhial Abraham Maluac Nhial <nhial-cham>

// Declare the global variables
const correctPassword = "admin123";
let password; // Store the user input

do {
    // Prompt the user to enter the password
    password = prompt("Please enter the password:");

    // Check if the entered password is correct
    if (password !== correctPassword) {
        alert("Incorrect password. Please try again.");
    } 
} while (password !== correctPassword); // Continue until the correct password is entered

// If the correct password is entered, display a success message
alert("Access granted. Welcome!");
