/*
    Author: Nhial Abraham Maluac Nhial <nhial-cham>
    Problem: Temperature Converter (Celsius to Fahrenheit)
*/

/**
 * Converts temperature from Celsius to Fahrenheit
 * @param {number} celsius
 * @returns {number}
 */
function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

/**
 * Converts multiple Celsius values to Fahrenheit
 * @param {number[]} temperatures
 * @returns {number[]}
 */
function convertMultipleToFahrenheit(temperatures) {

    const results = [];

    for (const temp of temperatures) {

        const fahrenheit = convertToFahrenheit(temp);
        results.push(fahrenheit);
    }

    return results;
}

// Example usage
const celsiusValues = [0, 25, 100];
const result = convertMultipleToFahrenheit(celsiusValues);

console.log(`Result: ${result}`);