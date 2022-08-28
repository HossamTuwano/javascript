let squareWorker = new Worker("squareworker.js");
squareWorker.addEventListener("message", (event) => {
  console.log("The worker responded:", event.data);
});

squareWorker.postMessage(10);
squareWorker.postMessage(24);

// this code spawns a worker running that script, sends it a few messages, and outputs the responses
// the postMessage function sends a message, which will cause a message event to fire in the browser
