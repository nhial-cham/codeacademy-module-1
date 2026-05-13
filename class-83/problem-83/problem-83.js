/*
    Author: Nhial Abraham Maluac Nhial <nhial-cham>
    OOP Problem: Shopping cart
*/

class ShoppingCart {

    constructor(customerName, productName, productPrice, quantity) {
        this.customerName = customerName;
        this.productName = productName;
        this.productPrice = productPrice;
        this.quantity = quantity;
    }

    addProducts(quantity) {

        if (isNaN(quantity)) {
            return `Quantity must be a number.`;
        } 
        
        if (quantity < 1) {
            return `Quantity must be greater than 1.`;
        }

        this.quantity += quantity;

        return `${quantity} products added to the cart.`;
    }

    removeProducts(quantity) {

        if (isNaN(quantity)) {
            return "Quantity must be a number. Try again.";
        }

        if (quantity < 1) {
            return "Quantity must be greater than 0.";
        }

        if (quantity > this.quantity) {
            return `You cannot remove more than what you have in the cart.`;
        }

        this.quantity -= quantity;

        return `${quantity} products removed successfully from the cart.`;
    }

    calculateTotal() {

        const totalPrice = this.productPrice * this.quantity;

        return `Products: ${this.quantity} ${this.productName}(s) cost $${totalPrice}.`;
    }

    showCartInfo() {

        return {
            customerName: this.customerName,
            productName: this.productName,
            productPrice: this.productPrice,
            quantity: this.quantity
        };
    }
}

// Creating object
const cart1 = new ShoppingCart(
    "Mark Anthony",
    "Mechanical Keyboard",
    120,
    2
);

console.log("=== Shopping Cart Information ===");
console.log("================================");
console.log(cart1.addProducts("Hello guys"));
console.log(cart1.addProducts(-2));
console.log(cart1.addProducts(4));

console.log("================================");

console.log(cart1.removeProducts("Remove all"));
console.log(cart1.removeProducts(-5));
console.log(cart1.removeProducts(10));
console.log(cart1.removeProducts(1));

console.log("================================");
console.log(cart1.calculateTotal());
console.log("================================");
console.log(cart1.showCartInfo());