/*
    Author: Nhial Abraham Maluac Nhial <nhial-cham>
    Solution: Managing an inventory shopping Cart with Arrays
*/

let inventory = ["Laptop", "Mouse", "Keyboard", "Monitor", "USB Cable"];


// 1. Print the total number of product in the inventory
console.log(`Total products in the inventory: ${inventory.length}`);

// 2. Add a new product "Apples" to the inventory
inventory.push("Webcam");
inventory.push("Headphones");
console.log(`Inventory after adding new products: ${inventory}`);

// 3. Remove the last product from the inventory

let removedFirstProduct = inventory.pop();
console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
console.log(`Inventory after removing the last product: ${removedFirstProduct}`);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++");

//4. Print the first product from the inventory
let removedLastProduct = inventory.shift();
console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
console.log(`Removed first product: ${removedLastProduct}`)
console.log("+++++++++++++++++++++++++++++++++++++++++++++++");

// 5. Add a new product to the begining of the inventory
inventory.unshift("Tabblet");

// Display updated inventory
console.log(`Inventory after updates: ${inventory}`);

// 7. Check if the inventory has more than 5 products
if (inventory.length > 5) {
    console.log("\n***********************************************");
    console.log("Warehouse is well stocked");
    console.log("***********************************************");
} else {
    console.log("\n***********************************************");
    console.log("Warehouse needs more products");
    console.log("***********************************************");
}

// 8. Print all products with their position number
console.log("Current Inventory List: ");

for (let i = 0; i < inventory.length; i++) {
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
    console.log(`${i + 1} - ${inventory[i]}`);
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
}