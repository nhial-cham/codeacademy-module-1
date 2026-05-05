/*
// Author: Nhial Abraham Maluac Nhial <nhial-cham>
// Programming Challenge: Highest scoring student
*/

const scores = [
  [80, 75, 90],
  [60, 85, 70],
  [95, 88, 92]
];

let topStudent = -1;
let highestAverage = -Infinity;

for (let i = 0; i < scores.length; i++) {

  let sum = 0;
  const studentScores = scores[i];

  for (let j = 0; j < studentScores.length; j++) {
    sum += studentScores[j];
  }

  const average = sum / studentScores.length;

  if (average > highestAverage) {
    highestAverage = average;
    topStudent = i;
  }
}

console.log(`
    The student: ${topStudent}
    Highest average: ${highestAverage.toFixed(2)}
    `);
