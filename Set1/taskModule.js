const fs = require("fs");
function saveTask(task) {
    return fs.promises.appendFile("tasks.txt", task + "\n");
}
module.exports = { saveTask };
