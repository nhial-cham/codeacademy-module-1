// Author: Nhial Abraham Maluac Nhial <nhial-cham>

// Global variables
let balance = 500; // Initial balance
let continueTransactions; // Yes

// Do-while loop to continue transactions until the user decides to stop
do {
    alert(`Current Balance: $${balance}`);

    // Ask the user for the transaction type
    let withdrawal = parseInt(prompt("Enter the amount to withdraw:"));
    let deposit = parseInt(prompt("Enter the amount to deposit:")
); 

// Validate the withdrawal 
if (withdrawal > balance) {
    alert("Insufficient funds for withdrawal." + balance);
} else if (withdrawal > 0 || isNaN(withdrawal)) {
    alert("Invalid withdrawal amount. Please enter a positive number.");
} else {
    balance -= withdrawal; // Update balance after withdrawal
    alert(`Withdrawal successful. New Balance: $${balance}`);
}

// if the balance reaches zero, alert the user and end the transactions
if (balance === 0) {
    alert("Your balance is zero. No further transactions can be made.");
    break; // Exit the loop if balance is zero  
}

// Ask the user if they want another transaction
continueTransactions = prompt("Do you want to perform another transaction? (yes/no)").toLowerCase();    
} while (continueTransactions === "yes");

alert("Thank you for using our banking system. \nFinal Balance: $${balance}" + balance);

/*
========================================
DESKTOP TEST (STEP-BY-STEP SIMULATION)
ATM WITHDRAWAL PROGRAM
========================================

Initial State
-------------
balance = 500
continueTransaction = undefined


ITERATION 1
-----------
alert → "Current balance: $500"

User input (prompt):
withdrawal = 200

Condition check:
200 > 500 → false
200 <= 0 → false
isNaN(200) → false

Valid withdrawal

balance = 500 - 200
balance = 300

alert →
"Withdrawal successful.
Remaining balance: $300"

balance === 0 ?
300 === 0 → false

prompt →
"Do you want to make another withdrawal?"

User enters:
continueTransaction = "yes"

Loop condition:
continueTransaction.toLowerCase() === "yes"
"yes" === "yes" → true



ITERATION 2
-----------
alert → "Current balance: $300"

User input:
withdrawal = 300

Condition check:
300 > 300 → false
300 <= 0 → false
isNaN(300) → false

Valid withdrawal

balance = 300 - 300
balance = 0

alert →
"Withdrawal successful.
Remaining balance: $0"

balance === 0 ?
0 === 0 → true

alert →
"Your balance is now $0. No more withdrawals are possible."

break → exit loop

========================================
PROGRAM END
========================================
alert →
"Session finished.
Final balance: $0"
========================================
*/
