// Author: Nhial Abraham Maluac Nhial <nhial-cham>

// Step 1: Declare global variables
const CORRECT_PASSWORD = "codecamp-2026";
let enteredPassword = "";
let attemptCount = "";

// Step 2: Display the system header
alert("=== ADMINISTRATION PANEL SYSTEM ===");
alert("=== LOGIN VERIFICATION ===");

// Step 3: Prompt the user to enter the password
 enteredPassword = prompt("Please enter the password:");

// Step 4: Validate the entered password
while (enteredPassword !== CORRECT_PASSWORD) {
    attemptCount++;
    alert("attempt #" + attemptCount);   
    alert("Incorrect password. Please try again.  ");

    // Prompt the user to enter the password again
    enteredPassword = prompt("Please enter the password:");
}

//step 5: Count the number of attempts and display it to the user
attemptCount++; // Increment the attempt count for the successful attempt   
alert("Number of attempts: " + attemptCount);

// Step 6: Display success message upon correct password entry
alert("attempt #" + attemptCount);
alert("Access granted. Welcome to the administration panel!");

/*
Desktop Test (Example Execution)

Assume the correct password is:
CORRECT_PASSWORD = "CodeCamp123"


Initial Values
------------------------------------
enteredPassword = ""
attemptCount = 0


User Input #1
------------------------------------
User enters: "1234"

Condition check:
enteredPassword !== CORRECT_PASSWORD
"1234" !== "CodeCamp123" → TRUE

Loop executes:
attemptCount = 1

Output:
Attempt #1
Access denied. Incorrect password.


User Input #2
------------------------------------
User enters: "password"

Condition check:
"password" !== "CodeCamp123" → TRUE

Loop executes:
attemptCount = 2

Output:
Attempt #2
Access denied. Incorrect password.


User Input #3
------------------------------------
User enters: "CodeCamp123"

Condition check:
"CodeCamp123" !== "CodeCamp123" → FALSE

Loop stops


Final State
------------------------------------
attemptCount = 3

Output:
Attempt #3
Access granted. Welcome to the system.
*/
