addEventListener("message", (event) => {
  postMessage(event.data * event.data);
});

// this code responds to the message by computing the square and send the message back
