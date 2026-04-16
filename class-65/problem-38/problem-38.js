// Author: Nhial Abraham Maluac Nhial <nhial-cham>

// Initialize sum variable
let sum = 0;

// Loop from 1  - 200
for (let i = 1; i <= 200; i++) {

    // a number is a multiple of both 3 and 5 if it is a multiple of 15 
    if (i % 15 === 0) {

        console.log(`The number ${i} is a multiple of both 3 and 5`);

        console.log(`${sum} + ${i} = ${sum + i}`);

        sum += i;
    }
}

// Print the final result
console.log(`
    Total sum of numbers between 1 and 200 that are multiples of both 3 and 5: ${sum}
    `);

/*
---------------------------------------------------------------
Desktop Test (Manual Verification)
---------------------------------------------------------------

Multiples of 15 between 1 and 200:
15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195

Step-by-step accumulation:
sum = 0
sum = 0 + 15  = 15
sum = 15 + 30 = 45
sum = 45 + 45 = 90
sum = 90 + 60 = 150
sum = 150 + 75 = 225
sum = 225 + 90 = 315
sum = 315 + 105 = 420
sum = 420 + 120 = 540
sum = 540 + 135 = 675
sum = 675 + 150 = 825
sum = 825 + 165 = 990
sum = 990 + 180 = 1170
sum = 1170 + 195 = 1365

---------------------------------------------------------------
Expected Output:
---------------------------------------------------------------
Total sum of numbers between 1 and 200 
that are multiples of both 3 and 5: 1365
---------------------------------------------------------------
*/