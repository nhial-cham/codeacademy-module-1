/*
// Author: Nhial Abraham Maluac Nhial <nhial-cham>
// Programming Challenge: Classroom Scores Grid
*/

const scores = [
  [80, 75, 90],
  [60, 85, 70],
  [95, 88, 92]
];

for (let i = 0; i < scores.length; i++) {
    let sum = 0;

    for (let j = 0; j < scores[i].length; j++) {
        sum += scores[i][j];
    }

    const average = sum / scores[i].length;

    console.log(`Student ${i} - average: ${average.toFixed(2)}`);
}