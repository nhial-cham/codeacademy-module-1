/*
    Author: Nhial Abraham Maluac Nhial <nhial-cham>
    Problem: Delivery Cost Calculator
*/

/**
 * Calculates delivery cost for a given distance
 * @param {number} distance
 * @returns {number}
 */
function calculateDeliveryCost(distance) {
    const baseFee = 5;
    const costPerKm = 2;

    return baseFee + (costPerKm * distance);
}

/**
 * Calculates delivery costs for multiple distances
 * @param {number[]} distances
 * @returns {number[]}
 */
function calculateMultipleDeliveryCosts(distances) {

    const costs = [];

    for (const distance of distances) {

        const totalCost = calculateDeliveryCost(distance);
        costs.push(totalCost);
    }

    return costs;
}

// Example usage
const distances = [10, 5, 20];
const result = calculateMultipleDeliveryCosts(distances);

console.log(`Result: ${result}`);