// Author: Nhial Abraham Maluac Nhial <nhial-cham>

// variable dataset
const warehouse = [
  [12, 5, 8, 10],
  [7, 14, 3, 6],
  [9, 11, 2, 4],
  [6, 8, 13, 7]
];

// 1. TotalInventory
let totalInventory = 0;

for (let i = 0; i < warehouse.length; i++) {

  for (let j = 0; j < warehouse[i].length; j++) {
    totalInventory += warehouse[i][j];
  }
}

console.log("**********************************************");
console.log(`Total inventory: ${totalInventory}`);
console.log("**********************************************");


// 2. Section Inventory
for (let i = 0; i < warehouse.length; i++) {

  let sectionTotal = 0;

  for (let j = 0; j < warehouse[i].length; j++) {
    sectionTotal += warehouse[i][j];
  }

  console.log(`Section ${i}: ${sectionTotal} items.`);
}


// 3. Find the shelf with the highest quantity
let maxQuantity = warehouse[0][0];

for (let i = 0; i < warehouse.length; i++) {
  for (let j = 0; j < warehouse[i].length; j++) {
    if (warehouse[i][j] > maxQuantity) {
      maxQuantity = warehouse[i][j];
    }
  }
}

console.log("**********************************************");
console.log(`Highest quantity on a shelf: ${maxQuantity}`);
console.log("**********************************************");



// 4. Count low stock shelves (less than 5)
let lowStockCount = 0;

for (let i = 0; i < warehouse.length; i++) {
  for (let j = 0; j < warehouse[i].length; j++) {
    if (warehouse[i][j] < 5) {
      lowStockCount++;
    }
  }
}

console.log("**********************************************");
console.log(`Low stock shelves: ${lowStockCount}`);
console.log("**********************************************");

// 5. Local shelf containing 13 items
let found = false;

for (let i = 0; i < warehouse.length; i++) {
  for (let j = 0; j < warehouse[i].length; j++) {
    if (warehouse[i][j] === 13) {
      console.log(`
Items quantity 13 found at:
Section: ${i}
Shelf: ${j}
`);
      found = true;
      break;
    }
  }

  if (found) break;
}