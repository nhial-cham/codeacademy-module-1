// Author: Nhial Abraham Maluac Nhial <nhial-cham>

// Initial dataset
let grades = [72, 85, 90, 66, 58, 79, 91];

// 1. Print the total numbers of grade
console.log(`The total grades: ${grades.length}`);

// 2. Add a new grade (88)
grades.push(88);
console.log(`\nGrades after adding 88: ${grades}`);

// 3. Remove the last grade
let removedGrade = grades.pop();
console.log(`\nRemoved last grade: ${removedGrade}`);

// Print all grades
console.log("\nList of grades:");
for (let i = 0; i < grades.length; i++) {
    console.log(`Grade ${i + 1} : ${grades[i]}`);
}

// variable for calcuation
let sum = 0;
let highestGrade = grades[0]
let passedStudents = 0;

// 5 - 9 Process grades
for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];

    //calculate sum
    sum += grade;


    //find the highest grade
    if (grade > highestGrade) {
        highestGrade = grade;
    }

    // count passed students
    if (grade >= 70) {
        passedStudents++
    }
}

// 5. Print sum of grades
console.log(`\nSum of grades: ${sum}`);

// 6. Caulcate and print average
let average = sum / grades.length;
console.log(`\nAverage grade: ${average}`);

// 7. Print highes grades
console.log(`\n Highest grade: ${highestGrade}`);

// 8 - 9 Print number of students who passed
console.log(`\n Students passed: ${passedStudents}`);

