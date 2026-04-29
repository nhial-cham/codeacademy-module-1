Problem 56
Programming Challenge: Cinema Seating Grid
Problem
A cinema stores its seating availability using a two-dimensional array. 
Each row represents a row of seats in the theater, and each column represents a 
seat in that row.

A value of:

1 means the seat is occupied
0 means the seat is available

Example seating grid:

const seats = [
  [1,0,1,0],
  [0,0,1,1],
  [1,0,0,0]
];


Tasks
Count the total number of occupied seats.
Count the total number of available seats.
Determine which row has the most occupied seats.

Constraints
Use nested loops.
Access values using array[row][column].