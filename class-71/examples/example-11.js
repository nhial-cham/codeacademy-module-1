// Author: Nhial Abraham Maluac Nhial <nhial-cham>

const numbers = [12, 45, 7, 23, 56, 19, 31, 8, 62, 14];

console.log (`Total elements in the array is: ${numbers.length}`);

/*
Problem: calculate the average of numbers greater than 20
*/

let sum = 0;
let count = 0;

for(let i = 0; i < numbers.length; i++) {

    if(numbers[i] > 20) {
        sum += numbers[i];
        count++;
    }
}

average = sum / count;

console.log(`
    sum: ${sum}
    frequency: ${count}
    Average is: ${average}
    `);

