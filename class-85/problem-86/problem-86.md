Problem 86
JavaScript Inheritance Challenge
Problem: Banking Account Management System
A bank wants to modernize its software system to manage customer accounts.

As a software developer, your task is to create a system using 
Object-Oriented Programming (OOP) and inheritance in JavaScript.

The bank offers different types of accounts. All accounts share common 
information, but each account type also has unique features.

Requirements
Create a Parent Class
Create a parent class called:

BankAccount


The class must include the following properties:

ownerName
accountNumber
balance

Add Methods to the Parent Class
Create the following methods:

deposit(amount)


This method must increase the account balance.

Example:

Deposit successful. New balance: $1500


Create another method:

withdraw(amount)


This method must reduce the balance if enough money exists.

Example:

Withdrawal successful. Remaining balance: $1200


If there is insufficient balance:

Insufficient funds.


Create another method:

showInformation()


This method must display the account information.

Example output:

Owner: Cristian
Account Number: 123456
Balance: $1000


Create a Child Class
Create a child class called:

SavingsAccount


The class must inherit from BankAccount.

Add a new property:

interestRate

Create a method:

addInterest()


This method must calculate and add interest to the account balance.

Example:

Interest added successfully.


Create Another Child Class
Create a child class called:

CheckingAccount
The class must inherit from BankAccount.

Add a new property:

monthlyFee

Create a method:

chargeFee()


This method must subtract the monthly fee from the account balance.

Example:

Monthly fee charged.


---

Create Objects
Create:

One SavingsAccount object
One CheckingAccount object

Test the Program
You must:

Show account information
Deposit money
Withdraw money
Test inherited methods
Test child-specific methods

Hints
Hint 1
Remember to use:

extends


to create inheritance.

---

Hint 2
Use:

super()


inside child constructors.

Hint 3
Ask yourself:

Is a savings account a bank account?

If yes, inheritance is a good choice.

Expected Concepts to Practice
Students should practice:

Classes
Constructors
Objects
Inheritance
extends
super()
Methods
Conditional logic
Reusing parent methods
Child-specific behavior
Real-world modeling