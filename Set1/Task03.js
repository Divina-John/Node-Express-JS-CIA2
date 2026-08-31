/*
Task 3:
Official documentation referenced:
https://nodejs.org/api/fs.html
Methods used:
- fs.readFile()
The official Node.js documentation was used to understand
how to read a file asynchronously.
*/

const fs = require("fs");
fs.readFile("tasks.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading tasks.txt:", err.message);
        return;
    }
    console.log("Tasks:");
    console.log(data);
});

// Expected Output:
// Tasks:
// Task 1: Complete CIA-2 preparation
