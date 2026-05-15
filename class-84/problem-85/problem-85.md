Problem 85
JavaScript Inheritance Challenge
Problem: Vehicle Management System
A transportation company needs a system to represent different types of vehicles.

You have been hired as a software developer to model the system using 
Object-Oriented Programming (OOP) and inheritance in JavaScript.

Requirements
Create a parent class called Vehicle.

The Vehicle class must have the following properties:

brand
model
year

The Vehicle class must include the following method:

showInformation()


This method must display all vehicle information in the console.

Example output:

Brand: Honda
Model: Civic
Year: 2022


Create a child class called Car that inherits from Vehicle.

The Car class must add a new property:

numberOfDoors

The Car class must include a method:

startEngine()


Output example:

The car engine has started.


Create another child class called Motorcycle that inherits from Vehicle.

The Motorcycle class must add a new property:

engineCapacity

The Motorcycle class must include a method:

doWheelie()


Output example:

The motorcycle is doing a wheelie!


Create at least:

One Car object
One Motorcycle object

Test all inherited and custom methods.

Expected Concepts to Practice
Students should practice:

Classes
Constructors
Objects
Inheritance with extends
super() keyword
Methods
Method reuse
Properties inheritance

Expected Output
CAR INFORMATION
Brand: Honda
Model: Civic
Year: 2022
The car engine has started.

MOTORCYCLE INFORMATION
Brand: Honda
Model: CBR600R
Year: 2024
The motorcycle is doing a wheelie!