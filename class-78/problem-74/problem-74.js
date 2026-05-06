/*
    Author: Nhial Abraham Maluac Nhial <nhial-cham>
    Problem: Rectangle Area Calculator
*/

/**
 * Calculates the area of a rectangle
 * @param {number} width
 * @param {number} height
 * @returns {number}
 */
function calculateArea(width, height) {
    return width * height;
}

/**
 * Calculates areas for multiple rectangles
 * @param {{width: number, height: number}[]} rectangles
 * @returns {number[]}
 */
function calculateMultipleAreas(rectangles) {

    const areas = [];

    for (const rect of rectangles) {

        const area = calculateArea(rect.width, rect.height);
        areas.push(area);
    }

    return areas;
}

// Test
const rectangles = [
    { width: 5, height: 3 },
    { width: 10, height: 2 },
    { width: 4, height: 4 }
];

const result = calculateMultipleAreas(rectangles);

console.log(`Result: ${result}`);