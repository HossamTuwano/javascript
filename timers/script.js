let ticks = 0;
let clock = setInterval(() => {
  console.log("Tick", ticks++);
  if (ticks == 10) {
    clearInterval(clock);
    console.log("Stop");
  }
}, 200);
