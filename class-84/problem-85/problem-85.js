/*
    Author: Nhial Abraham Maluac Nhial <nhial-cham>
*/
// Parent class Vehicle
class Vehicle {
    constructor(brand, model, color, year) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
    }

    startEngine() {
        console.log("The engine has started.");
    }
    stopEngine() {
        console.log("The engine has stopped.");
    }

    showInformation() {
        return {
            Brand: this.brand,
            Model: this.model,
            Color: this.color,
            Year: this.year
        };
    }
}

// Child class Car that inherits from Vehicle
class Car extends Vehicle {
    constructor(brand, model, color, year, numberOfDoors, numberOfSeats) {
        super(brand, model, color, year); // Call the parent class constructor
        this.numberOfDoors = numberOfDoors; // Additional property for Car
        this.numberOfSeats = numberOfSeats; // Additional property for Car
    }

    startEngine() {
        console.log("The engine has started.");
    }
    stopEngine() {
        console.log("The engine has stopped.");
    }

    // FIX: moved showInformation INSIDE class and corrected it
    showInformation() {
        return {
            Brand: this.brand,
            Model: this.model,
            Color: this.color,
            Year: this.year,
            numberOfDoors: this.numberOfDoors,
            numberOfSeats: this.numberOfSeats
        };
    }
}

// Child class
class Motorcycle extends Vehicle {
    constructor(brand, model, color, year, engineCapacity, quickShifter) {
        super(brand, model, color, year); // Call the parent class constructor
        this.engineCapacity = engineCapacity; // Additional property for Motorcycle
        this.quickShifter = quickShifter; // Additional property for Motorcycle
    }

    doWheelie() {
        console.log("The motorcycle is doing a wheelie!");
    }

    // FIX: moved showInformation INSIDE class and corrected it
    showInformation() {
        return {
            Brand: this.brand,
            Model: this.model,
            Color: this.color,
            Year: this.year,
            engineCapacity: this.engineCapacity,
            quickShifter: this.quickShifter
        };
    }
}

// Test
const AudiR8 = new Car(
    "Audi",
    "Navy Blue",
    "Red",
    2020,
    2,
    2
);

console.log("=======================================");
console.log(AudiR8);
console.log(typeof(AudiR8));
console.log("=======================================");
console.log(AudiR8.showInformation());
console.log("=======================================");
AudiR8.startEngine();
AudiR8.stopEngine();
console.log("=======================================");

const Honda = new Motorcycle(
    "Honda",
    "CBR600R",
    "Red",
    2026,
    599,
    true
);

console.log("=======================================");
console.log(Honda);
console.log(typeof(Honda));
console.log("=======================================");
console.log(Honda.showInformation());
console.log("=======================================");
Honda.doWheelie();
console.log("=======================================");