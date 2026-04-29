// Author: Nhial Abraham Maluac Nhial <nhial-cham>

let tasks = ["Check emails", "Write report", "Attend meeting", "Review code"];

// 1. Print the total number of tasks
console.log(`\nTotal tasks: ${tasks.length}`);

// 2. Add a new task to the end
tasks.push("Plan tomorrow's work");
console.log(`\nAfter adding task: ${tasks}`);

console.log(`++++++++++++++++++++++++++++++++++++++++++++++`);

// 3. Insert a new task at the beginning
tasks.unshift("Morning exercise");

// 4. Find the position of "Attend meeting"
const position = tasks.indexOf("Attend meeting");
console.log(`\nPosition of 'Attend meeting': ${position}`);

// 5. Mark "Attend meeting" as completed
if (position !== -1) {
    tasks[position] = "Attend meeting (Completed)";
}

// 6. Remove "Check emails"
const indexToRemove = tasks.indexOf("Check emails");
if (indexToRemove !== -1) {
    tasks.splice(indexToRemove, 1);
}

// 7. Print all remaining tasks
console.log(`\nFinal task list:`);

for (let i = 0; i < tasks.length; i++) {
    console.log(`Task ${i + 1}: ${tasks[i]}`);
}