// Author: Nhial Abraham Maluac Nhial <nhial-cham>

// Step 1: Declare the global variables
let currentStock = 25;
let minimumStock = 100;
let restockAmount = 10;
let restockCount = 0;

// Step 2: Display the initial inventory
console.log("==================================");
console.log(`Initial Inventory: ${currentStock}`);
console.log(`Minimum Stock Level: ${minimumStock}`);
console.log("==================================");

// Step 3: Restocking process
while (currentStock < minimumStock) {

    restockCount += 1;
   
    currentStock += restockAmount;
    
    console.log("++++++++++++++++++++++++++++++++++++++");
    console.log(`Restock #${restockCount}`);
    console.log(`Current inventory: ${currentStock}`);
    console.log("++++++++++++++++++++++++++++++++++++++");
}

// Step 4: Final inventory status
console.log("==================================");
console.log("Final Inventory:");
console.log(`Total Restocks Performed: ${restockCount}`);
console.log("==================================");

/*
Desktop Test (Step-by-step execution trace)

Initial values
------------------------------------
currentStock = 25
minimumStock = 100
restockAmount = 10
restockCount = 0

Condition to evaluate in the loop:
currentStock < minimumStock
25 < 100 → TRUE (enter the loop)

Iteration 1
------------------------------------
restockCount += 1  → restockCount = 1
currentStock += 10 → currentStock = 35

Output:
Restock #1
Current Inventory: 35

Check condition again:
35 < 100 → TRUE

Iteration 8
------------------------------------
restockCount = 8
currentStock = 105

Output:
Restock #8
Current Inventory: 105

Check condition:
105 < 100 → FALSE
Loop stops

Final State
------------------------------------
currentStock = 105
restockCount = 8

Final Output:
Restocking completed.
Final inventory: 105
Total restocks performed: 8
*/