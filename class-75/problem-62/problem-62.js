/*
// Author: Nhial Abraham Maluac Nhial <nhial-cham>
*/

const matrix = [
  [5, 2, 3],
  [1, 4, 6],
  [7, 8, 9]
];

let diagonal = 0;

for (let i = 0; i < matrix.length; i++) {

    diagonal += matrix[i][i];
}
console.log(`Diagonal sum: ${diagonal}`);