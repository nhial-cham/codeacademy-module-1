/*
    Author: Nhial Abraham Maluac Nhial <nhial-cham>
    Problem: Order processing
*/

const orders = [
    { id: 1, customer: "Alice", total: 120, status: "completed" },
    { id: 2, customer: "Bob", total: 80, status: "pending" },
    { id: 3, customer: "Charlie", total: 200, status: "completed" },
    { id: 4, customer: "Diana", total: 50, status: "pending" },
    { id: 5, customer: "Eve", total: 300, status: "completed" }
];

// Step 1: Filter out completed orders
const completedOrders = orders.filter(
    order => order.status === "completed"
);

// Step 2: Extract total amounts from completed orders
const totalAmounts = completedOrders.map(
    order => order.total
);

// Step 3: Calculate total revenue
const totalRevenue = totalAmounts.reduce(
    (sum, value) => sum + value, 0
);

// Step 4: Calculate average total amount
const averageTotal = totalRevenue / totalAmounts.length;

// Step 5: Simplify the structure
const simplifiedOrders = completedOrders.map(
    order => ({id: order.id, customer: order.customer})
);

// Output results
console.log("********************************************");
console.log("Completed Orders:");
console.log(completedOrders);

console.log("********************************************");
console.log("Total Amounts of Completed Orders:");
console.log(totalAmounts);

console.log("********************************************");
console.log("Total Revenue from Completed Orders:");
console.log(totalRevenue);

console.log("********************************************");
console.log("Average Total Amount:");
console.log(averageTotal);

console.log("********************************************");
console.log("Simplified Structure of Completed Orders:");
console.log(simplifiedOrders);

console.log("********************************************");