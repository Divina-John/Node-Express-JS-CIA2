console.log("start");
setTimeout(() => {
    console.log("timeout");
}, 0);
Promise.resolve().then(() => {
    console.log("promise");
});
console.log("end");

// Expected Output:
// start
// end
// promise
// timeout
//
// Predicted order was correct.
