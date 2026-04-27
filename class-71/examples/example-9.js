const numbers = [
    12, 7.45, 98, 3.14, 56, 42.8, 19, 73.21, 5, 64.9,
    28, 91.33, 14, 8.6, 37, 60.12, 2, 77.5, 49, 11.09,
    83, 25.7, 6, 94.44, 31, 16.8, 70, 53.26, 9, 88.1
];

let lessThanCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 45.67) {
        lessThanCount++;
    }
}

console.log(`The total numbers less than 45.67 is: ${lessThanCount}`);

let greaterThan = 59.98;
let greaterCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > greaterThan) {
        greaterCount++;
    }
}

console.log(`The total numbers greater than 59.98 is: ${greaterCount}`);