/*
    Author: Nhial Abraham Maluac Nhial <nhial-cham>
    OOP Problem: Bank Account System Using Classes in JavaScript
    
*/

class BankAccount {

    // Constructor
    constructor(ownerName, accountNumber, balance, accountType) {
        this.ownerName = ownerName;
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.accountType = accountType;
    }

    // Deposit Method
    deposit(amount) {
        this.balance += amount;
        return `$${amount} deposited successfully.`;
    }

    // Withdraw Method
    withdraw(amount) {

        if (amount > this.balance) {
            return "Insufficient funds. Withdrawal denied.";
        } else {
            this.balance -= amount;
            return `$${amount} withdrawn successfully.`;
        }
    }

    // Show Account Information
    showAccountInfo() {
        return (`
Owner: ${this.ownerName}
Account Number: ${this.accountNumber}
Account Type: ${this.accountType}
Balance: $${this.balance}
        `);
    }
}


// Create Bank Account Object
const account1 = new BankAccount(
    "Alice Johnson",
    102938,
    1000,
    "Savings"
);


// Perform Operations
account1.deposit(500);

account1.withdraw(300);

account1.withdraw(2000);

// Display Updated Account Information
account1.showAccountInfo();
console.log("================================");
console.log(account1.showAccountInfo());
console.log("================================");