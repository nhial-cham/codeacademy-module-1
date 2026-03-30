// Author: Nhial Abraham Maluac Nhial <nhial-cham>

// Request user inputs
const grade = parseFloat(prompt("Enter student grade (0 - 100):"));
const attendance = parseFloat(prompt("Enter attendance percentage (0 - 100):"));
const project = prompt("Final project submitted? (yes or no):").toLowerCase();

// Variables
let result;
let performance;

// Validation
if (isNaN(grade) || grade < 0 || grade > 100) {
    alert("Invalid grade.");
} else if (isNaN(attendance) || attendance < 0 || attendance > 100) {
    alert("Invalid input grade.");
} else if (project !== "yes" && project !== "no") {
    alert("Invalid project input.");
}

// Business Logic
else {
    // Attendance rule 
    if (attendance < 75) {
        result = "Fail";
        performance = "Poor";
    } 
    
    else {
        // Grade evaluation
        if (grade >= 90) {
            result = "Pass";
            performance = "Excellent";
        } 
        
        else if (grade >= 70) {
            if (project === "no") {
                result = "Remedial Exam";
                performance = "Average";
            } else {
                result = "PASS";
                performance = "Good";
            }
        } 
        
        else if (grade >= 50) {
            result = "Remedial Exam";
            performance = "Average";
        } 
        
        else {
            result = "Fail";
            performance = "Poor";
        }
    }

    alert(
        "Result: " + result + "\n" +
        "Performance level: " + performance
    );
}

/*
---------------------------------------
Desktop Test
---------------------------------------

Grade: 82, Attendance: 90, Project: yes
=> Result: Pass | Performance: Good

Grade: 82, Attendance: 90, Project: no
=> Result: Remdial Exam | Performance: Average

Grade: 95, Attendance: 80, Project: yes
=> Result: Pass | Performance: Excellent

Grade: 60, Attendance: 85, Project: yes
=> Result: Remdial Exam | Performance: Average

Grade: 45, Attendance: 90, Project: yes
=> Result: Fail | Performance: Poor

Grade: 85, Attendance: 60, Project: yes
=> Result: Fail | Performance: Poor

Invalid inputs:
Grade = 120 → Invalid input detected.
Attendance = -5 → Invalid grade input.
Project = maybe → Invalid project input.

*/