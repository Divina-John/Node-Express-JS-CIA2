const fs = require("fs");
console.log("Task Logger Started");
setTimeout(() => {
    console.log("Reminder: review your tasks");
}, 5000);
const interval = setInterval(() => {
    fs.readFile("tasks.txt", "utf8", (err, data) => {
        if (err) {
            console.log("Number of tasks logged: 0");
            return;
        }
        const tasks = data.trim() ? data.trim().split("\n").length : 0;
        console.log("Number of tasks logged:", tasks);
    });
}, 3000);
setTimeout(() => {
    clearInterval(interval);
    console.log("Task count monitoring stopped");
}, 15000);

// Expected Output:
// Task Logger Started
// Number of tasks logged: [number]
// Reminder: review your tasks
// Number of tasks logged: [number]
// Number of tasks logged: [number]
// Number of tasks logged: [number]
// Task count monitoring stopped
