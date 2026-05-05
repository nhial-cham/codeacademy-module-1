/*
// Author: Nhial Abraham Maluac Nhial <nhial-cham>
*/

const data = [
  [5, 10, 15],
  [20, 5, 10],
  [10, 20, 5]
];

let highestSum = -Infinity;
let bestColumnIndex = -1;

// Number of columns in the data
const numCols = data[0].length;

// Iterate through each column
for (let i = 0; i < numCols; i++) {

  let columnSum = 0;

  for (let j = 0; j < data.length; j++) {

    columnSum += data[j][i];
  }
  if (columnSum > highestSum) {

    highestSum = columnSum;
    bestColumnIndex = i;
  }
}   

console.log(`The column with the highest sum is column ${bestColumnIndex}`);
console.log(`Highest sum: ${highestSum}`);