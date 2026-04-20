// Author: Nhial Abraham Maluac Nhial <nhial-cham>
// Date: 2024-06-01

/*
PROBLEM 6 — COUNT DIGITS OF A NUMBER

Description:
Write a program that counts how many digits 
exist in a number.

For example:
If the number is 58342, the program should output 5.

Requirements:
- Store a number in a variable.
- Use a while loop to divide the number by 10 until it becomes 0.
- Count how many times the loop runs.
- Print the number of digits.

Example:
Input: 58342
Output: Number of digits: 5
*/

console.log("*****************************************")
console.log("Start of Program")
console.log("*****************************************")    
// Store a number in a variable
let number = 58342;
// Initialize a counter for the number of digits
let digitCount = 0; 
// Use a while loop to divide the number by 10 until it becomes 0
while (number > 0) {
    number = Math.floor(number / 10);
    digitCount++;
}
// Print the number of digits
console.log(`Number of digits: ${digitCount}`);
console.log("*****************************************")
console.log("End of Program")
console.log("*****************************************")    
