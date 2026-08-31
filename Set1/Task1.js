/*
Task 2:
V8 executes JavaScript code in Node.js. libuv handles asynchronous operations such as file reading and uses the event loop to process their callbacks.
This allows Node.js to continue executing other code without blocking the main thread.
*/

const fs = require("fs");
fs.readFile("tasks.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file:", err.message);
        return;
    }
    console.log("File contents:", data);
});
console.log("This message prints immediately.");

// Expected Output:
// This message prints immediately.
// File contents: Task 1: Complete CIA-2 preparation
