/*
    Author: Nhial Abraham Maluac Nhial <nhial-cham>
    Bank Account System
*/
// Parent class representing a bank account
class BankAccount {

    constructor(ownerName, accountNumber, balance) {
        this.ownerName = ownerName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    // Method to deposit money into the account
    deposit(amount) {
        if (isNaN(amount)) {
            return "The deposit amount must be a number.";
        } else if(amount < 1) {
            return "The deposit amount must be greater or equal than $1 USD.";
        } else {
            this.balance += amount;
            return `Deposit successful. New balance: $${this.balance} USD.`;
        }
    }
// Method to withdraw money from the account
    withdraw(amount) {
        if (isNaN(amount)) {
            return "The withdraw amount must be a number.";
        } else if(amount < 1) {
            return "The withdraw amount must be greater or equal than $1 USD."; 
        } else if (amount > this.balance) {
            return "Insufficient founds."
        } else {
            this.balance -= amount;
            return `Withdrawal successful. Remaining balance: $${this.balance} USD.`
        }
    }
    // Method to show account information
    showInformation() {
        return {
            owner: this.ownerName,
            accountNumber: this.accountNumber,
            balance: this.balance
        }
    }
}
// Subclass representing a savings account
class SavingsAccount extends BankAccount {

    constructor(ownerName, accountNumber, balance, interestRate) {
        super(ownerName, accountNumber, balance);
        this.interestRate = interestRate;
    }
    // Method to add interest to the account balance
    addInterest() {
        if(isNaN(this.interestRate)) {
            return "Interest rate must be a number."
        } else {
            const interest = this.balance * (this.interestRate / 100);
            this.balance += interest;
            return "Interest added successfully."
        }
    }
}
// Subclass representing a checking account
class CheckingAccount extends BankAccount {

    constructor(ownerName, accountNumber, balance, monthlyFee) {
        super(ownerName, accountNumber, balance);
        this.monthlyFee = monthlyFee;
    }
// Method to charge the monthly fee
    chargeFee() {
        if(isNaN(this.monthlyFee)) {
            return "Monthly fee must be a number.";
        } else {
            this.balance -= this.monthlyFee;
            return "Monthly fee paid successful.";
        }
    }
}
// Create instances of SavingsAccount and CheckingAccount
const savings = new SavingsAccount(
    "Nhial Cham",
    "SAW-123",
    1000,
    5
);
// Create an instance of CheckingAccount
const checking = new CheckingAccount(
    "Nhial Cham",
    "CHK-456",
    2000,
    15
);

// Testing savings account
console.log("===============================");
console.log("SAVINGS ACCOUNT");
console.log("===============================");
console.log(savings);
console.log("===============================");
console.log(savings.deposit("Hello"));
console.log(savings.deposit(-23));
console.log(savings.deposit(500));
console.log("===============================");
console.log(savings.withdraw("Hello"));
console.log(savings.withdraw(-200));
console.log(savings.withdraw(300));
console.log("===============================");
console.log(savings.addInterest());
console.log(savings.showInformation());


// Testing checking account
console.log("===============================");
console.log("CHECKING ACCOUNT");
console.log("===============================");
console.log(checking);
console.log(checking.deposit("Hello"));
console.log(checking.deposit(-23));
console.log(checking.deposit(500));
console.log("===============================");
console.log(checking.withdraw("Hello"));
console.log(checking.withdraw(-200));
console.log(checking.withdraw(300));
console.log("===============================");
console.log(checking.chargeFee());
console.log(checking.showInformation());