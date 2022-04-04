let isExecuted = false;

/* setTimeout(() => {
  console.log("First", isExecuted);
}, 1);

setTimeout(() => {
  isExecuted = true;
}, 1);

setTimeout(() => {
  console.log("Second", isExecuted);
}, 1);

console.log("Executing...");

if (isExecuted) {
  console.log("Do something...");
} */

let i = 0;
let interval;

function startInterval() {
  if (interval) {
    clearInterval(interval);
  }

  interval = setInterval(() => {
    console.log(++i);
    startInterval();
  }, 1000);
}

startInterval();

// Napravite funkciju koja odbrojava od 10 do 0 i ispise Sritna Nova godina!
