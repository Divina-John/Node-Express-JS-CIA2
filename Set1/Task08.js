const fs = require("fs");
function saveTaskCallback(task, callback) {
    fs.appendFile("tasks.txt", task + "\n", (err) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null);
    });
}
saveTaskCallback("Complete CIA-2 Task 8", (err) => {
    if (err) {
        console.log("Failed to save task");
    } else {
        console.log("Task saved successfully");
    }
});

// Expected Output:
// Task saved successfully
