/*
    Author: Nhial Abraham Maluac Nhial <nhial-cham>
    Solution: Managing a Shopping Cart with Arrays
*/

let cart = ["Milk", "Bread", "Eggs", "Cheese"];

// 1. Print the total number of product in the cart
console.log(`Total products in cart: ${cart.length}`);

// 2. Add a new product "Apples" to the cart
// Method push => a need item in the last position of the list
// Funcation that receive as parameter the new element
cart.push("Apples");
console.log(`Cart after adding apples: ${cart}`);
console.log(`Total products in cart: ${cart.length}`);

// 3. Remove the last product from the cart
cart.pop();
console.log(`Cart after removing the last product: ${cart}`);

//4. Print the first product from the cart
console.log(`First product: ${cart[0]}`);

// 5. Print the last product from the cart
console.log(`Last product: ${cart[cart.length - 1]}`);

// 6. Display all products in the cart using a loop
console.log("Products in the cart:");

for (let i = 0; i < cart.length; i++) {
    console.log(`Product: ${i + 1} ${cart[i]}`);
}