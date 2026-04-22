// Author: Nhial Abraham Maluac Nhial <nhial-cham>

// Step 1: Declare the global variables
let currentTemperature = 95;
let safeTemperature = 70;
let coolingRate = 5;
let cycles = 0;

// Step 2: Display the initial system status
console.log("*****************************************");
console.log("MACHINE TEMPERATURE MONITORING:");
console.log("*****************************************");
console.log(`Initial Temperature: ${currentTemperature}°C`);
console.log(`Safe Temperature: ${safeTemperature}°C`);

// Step 3: Start the cooling process
while (currentTemperature > safeTemperature) {
    cycles++; // Increment the cycle count
    console.log(`Cycle ${cycles}: Current Temperature: ${currentTemperature}°C - Cooling...`);
    currentTemperature -= coolingRate; // Reduce the temperature by the cooling rate
    console.log("---------------------------------------------")
    console.log(`Current Temperature: ${currentTemperature}°C`);
    console.log("---------------------------------------------")    

}

//step 4: Display the final system status
console.log("*****************************************");
console.log("Temperature has reached a safe level.");
console.log(`Final Temperature: ${currentTemperature}°C`);
console.log(`Total cycles: ${cycles}`);
console.log("*****************************************");

/*
Desktop Test (Short Execution Trace)

Initial Values
--------------------------------
currentTemperature = 95
safeTemperature = 70
coolingRate = 5
cycleCount = 0


Iteration 1
--------------------------------
cycleCount = 1
currentTemperature = 90

Iteration 2
--------------------------------
cycleCount = 2
currentTemperature = 85

Iteration 3
--------------------------------
cycleCount = 3
currentTemperature = 80

Iteration 4
--------------------------------
cycleCount = 4
currentTemperature = 75

Iteration 5
--------------------------------
cycleCount = 5
currentTemperature = 70


Condition Check
--------------------------------
70 > 70 → FALSE
Loop stops


Final State
--------------------------------
currentTemperature = 70
cycleCount = 5
*/