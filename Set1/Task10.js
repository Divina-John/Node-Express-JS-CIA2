const fs = require("fs");
function saveTaskPromise(task) {
    return fs.promises.appendFile("tasks.txt", task + "\n");
}
saveTaskPromise("Complete CIA-2 Task 10")
    .then(() => {
        console.log("Task saved successfully");
    })
    .catch((err) => {
        console.log("Failed to save task:", err.message);
    });

// Expected Output:
// Task saved successfully
