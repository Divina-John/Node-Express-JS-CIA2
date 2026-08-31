const { saveTask } = require("./taskModule");
saveTask("Complete CIA-2 Task 15")
    .then(() => {
        console.log("Task saved successfully");
    })
    .catch((err) => {
        console.log("Failed to save task:", err.message);
    });

// Expected Output:
// Task saved successfully
