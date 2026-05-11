/*
    Author: Nhial Abraham Maluac Nhial <nhial-cham>
    Problem: Online Store Inventory System with Arrow Functions
*/

const products = [
  {
    name: "MacBook Air M2",
    category: "Laptop",
    price: 1200,
    stock: 5,
    available: true
  },
  {
    name: "iPhone 15",
    category: "Smartphone",
    price: 999,
    stock: 0,
    available: false
  },
  {
    name: "Logitech MX Master 3",
    category: "Accessories",
    price: 120,
    stock: 15,
    available: true
  },
  {
    name: "Samsung Odyssey G5",
    category: "Monitor",
    price: 350,
    stock: 3,
    available: true
  },
  {
    name: "PlayStation 5",
    category: "Console",
    price: 499,
    stock: 0,
    available: false
  }
];

// Step 1: Available Products
const availableProducts = products.filter(
    product => product.available
);

// Step 2. Product names
const availableProductNames = availableProducts.map(
    product => product.name
);

// Step 3. Total inventory value
const inventoryValue = availableProducts.reduce(
        (total, product) => total + (product.price * product.stock),
    0
);

// Step 4. Most expensive product
const mostExpensiveProduct = availableProducts.reduce(
    (highest, current) => 
        current.price > highest.price ? current : highest
);

// Step 5. Simplified structure
const stockstatus = products.map(
    product => ({
        name: product.name,
        inStock: product.stock > 0
    })
);

// Step 6. Count out-of-stock products
const outOfStockCount = products.filter(
    product => product.stock === 0
).length;

// Output results
console.log("***********************************")
console.log("Available Products:");
console.log(availableProducts);
console.log("***********************************")
console.log("Product Names:");
console.log(availableProductNames);
console.log("***********************************")
console.log("Total Inventory Value:");
console.log(inventoryValue);
console.log("***********************************")
console.log("Most Expensive Product:");
console.log(mostExpensiveProduct);
console.log("***********************************")
console.log("Stock Status:");
console.log(stockstatus);
console.log("***********************************")
console.log("Out-of-Stock Product Count:");
console.log(outOfStockCount);
console.log("***********************************")  
