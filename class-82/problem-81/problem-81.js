/*
    Author: Nhial Abraham Maluac Nhial <nhial-cham>
*/

class Dog {

    constructor(name, breed, age, color) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.color = color;
        this.energyLevel = 100;
    }

    bark() {
        console.log(`🐕 ${this.name} says: woof! woof!`);
    }

    eat() {
        if (this.energyLevel >= 0 && this.energyLevel <= 90) {
            // energy = 60
            //energy = energy + 10
            //energy = 60 + 10
            //energy += 10
            this.energyLevel += 10;
            console.log(`🐶 ${this.name} is eating.`);
        } else if (this.energyLevel > 90) {
            console.log(`${this.name} is not hungry, it's full.`);
        } else if (this.energyLevel < 0) {
            console.log(`${this.name} is with Saint Peter. RIP.`);
        }
    }

    play() {
        if (this.energyLevel >= 10 && this.energyLevel <= 100) {
            this.energyLevel -= 20;
            console.log(`${this.name} is playing...`);
        } else {
            console.log(`${this.name} is too tired to play.`);
        }
    }

    showInfo() {
        console.log(`
*************************************
Dog Information
*************************************
Name: ${this.name}
Breed: ${this.breed}
Age: ${this.age}
Color: ${this.color}
Energy Level: ${this.energyLevel}
`);
    }
}
const pet1 = new Dog("max", "German Shepherd", 4, "Black");
console.log(pet1);
console.log(typeof(pet1));
console.log("************************");
pet1.eat();
console.log("************************");
pet1.play();
pet1.play();
pet1.play();
pet1.play();
console.log("************************");
pet1.eat();
console.log("************************");
pet1.bark();
pet1.bark();
pet1.bark();
console.log("************************");
pet1.showInfo();
