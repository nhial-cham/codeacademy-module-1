/*
    Author: Nhial Abraham Maluac Nhial <nhial-cham>
    Problem: Students performance
*/

const students = [
    {
        name: "Alice",
        grade: 95,
        attendance: 98
    },
    {
        name: "Bob",
        grade: 67,
        attendance: 80
    },
    {
        name: "Charlie",
        grade: 88,
        attendance: 92
    },
    {
        name: "Diana",
        grade: 45,
        attendance: 70
    },
    {
        name: "Eve",
        grade: 76,
        attendance: 85
    }
];


// Step 1. Approved students
const approvedStudents = students.filter(
    student => student.grade >= 70
);

// Step 2. Names of approved students
const approvedNames = approvedStudents.map(
    student => student.name
);

// Step 3. Average grade of approved students
const averageGrade = students.reduce(
    (sum, student) => sum + student.grade, 0
) / students.length;

// Step 4. Students with highest grade
const topStudents = students.reduce(
    (best, student) => 
        student.grade > best.grade ? student : best
);

// Step 5. Students status list
const studentsStatus = students.map(student => ({
        name: student.name,
        status: student.grade >= 70 ? "Approved" : "Failed"
    })
);

console.log("****************************************");
console.log("Approved Students:");
console.log(approvedStudents);

console.log("****************************************");
console.log("Approved Names:");
console.log(approvedNames);

console.log("****************************************");
console.log("Average Grade of Approved Students:");
console.log(averageGrade);

console.log("****************************************");
console.log("Top Student:");
console.log(topStudents);

console.log("****************************************");
console.log("Students Status:");
console.log(studentsStatus);