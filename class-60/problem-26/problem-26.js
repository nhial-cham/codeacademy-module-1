// Author: Nhial Abraham Maluac Nhial <nhial-cham>

// Given variables 
const salary = 2000;
const category = 3;

// Global variable to storage the new salary 
let newSalary = "";

// Switch statement to determine the salary increase
switch (category) {
    case 1:
        newSalary = salary * 0.15; 
        // 5% increase
        break;
    case 2:
        newSalary = salary * 0.10; 
        // 10% increase
        break;
    case 3:
        // 15% increase
        newSalary = salary * 0.15; 
        break;
    case 4:
        // 20% increase
        newSalary = salary * 0.20;
        break;

    default:
        alert("Invalid category");
        newSalary = null; 
}

// Display the new salary if it's valid
if (newSalary !== null) {
    console.log("Current salary: $", salary);
    console.log("New salary: $", newSalary);
}   

/*
---------------------------------------
Desktop Test
---------------------------------------

salary = 2000    category = 1
=> 2000 + (2000 * 0.05)
=> New Salary: 2100

salary = 2000    category = 2
=> 2000 + (2000 * 0.10)
=> New Salary: 2200

salary = 2000    category = 3
=> 2000 + (2000 * 0.15)
=> New Salary: 2300

salary = 2000    category = 4
=> 2000 + (2000 * 0.20)
=> New Salary: 2400

salary = 1500    category = 1
=> 1500 + (1500 * 0.05)
=> New Salary: 1575

salary = 3000    category = 4
=> 3000 + (3000 * 0.20)
=> New Salary: 3600

salary = 2000    category = 7
=> Invalid category code.
=> No salary calculation

---------------------------------------
*/