// Author: Nhial Abraham Maluac Nhial <nhial-cham>

// Variable to store the order total
const orderTotal = 75;

// Variable to store shipping cost
let shippingCost;

// conditionals
if (orderTotal >= 100) {
    shippingCost = "Free Shipping";
} else if (orderTotal >= 50) {
    shippingCost = "$5";
} else if (orderTotal >= 20) {
    shippingCost = "$10";
} else {
    shippingCost = "$15";
}

// Display the result
console.log(`Order Total: $${orderTotal}`);
console.log(`Shipping Cost: ${shippingCost}`);

/*
--------------------------------------------------------------------------
Desktop Test
--------------------------------------------------------------------------

orderTotal = 120       =>      "Free Shipping"
orderTotal = 75        =>      "$5"
orderTotal = 35        =>      "$10"
orderTotal = 10        =>      "$15"

--------------------------------------------------------------------------
*/