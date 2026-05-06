/*
    Author: Nhial Abraham Maluac Nhial <nhial-cham>
    Problem: Projectile Maximum Height Calculator
*/

function calculateMaxHeight(initialVelocity, angle) {

    const G = 9.8; // Acceleration due to gravity (m/s^2)

    const timeToMaxHeight = initialVelocity / G;
    
        const maxHeight = 
        (initialVelocity * timeToMaxHeight) - 
        (0.5 * G * Math.pow(timeToMaxHeight, 2));

        return {
            timeToMaxHeight: timeToMaxHeight,
            maxHeight: maxHeight
        };
}

// Test
const test1 = calculateMaxHeight(20);
console.log(`
    *****************************
    Time to Max Height: ${test1.timeToMaxHeight}
    Maximum Height: ${test1.maxHeight}
    *****************************
`);

const test2 = calculateMaxHeight(56);
console.log(`
    *****************************
    Time to Max Height: ${test2.timeToMaxHeight}
    Maximum Height: ${test2.maxHeight}
    *****************************
`);

const test3 = calculateMaxHeight(167);
console.log(`
    *****************************
    Time to Max Height: ${test3.timeToMaxHeight}
    Maximum Height: ${test3.maxHeight}
    *****************************
`);

    