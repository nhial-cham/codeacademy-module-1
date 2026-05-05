Problem 68
Problem: Student Final Grade Calculator
Objective
Design a function that calculates the final grade of a student based on three scores and determines whether the student has passed or failed.

Requirements
Create a function named calculateFinalGrade.
The function must receive three parameters:
examScore (number)
projectScore (number)
participationScore (number)
The function should:
Compute the final grade using the following weights:
Exam: 50%
Project: 30%
Participation: 20%
Return the final grade.
Create another function named getStudentStatus that:
Receives the final grade as input.
Returns:
"Passed" if the grade is greater than or equal to 60
"Failed" otherwise

Example
Input:
examScore = 80
projectScore = 70
participationScore = 90

Output:
Final Grade: 79
Status: Passed