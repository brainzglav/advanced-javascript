async function asyncFunction() {
  return "Async function!";
}

function createPromise(timeout, error) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject(new Error(error));
      }

      resolve(`Promise resolved: ${timeout}`);
    }, timeout);
  });
}

async function execute() {
  console.log("Start");

  const result = await asyncFunction();

  console.log("First:", result);

  try {
    const promise1 = await createPromise(2000, "Some error");

    console.log("Second:", promise1);
  } catch (error) {
    console.log("Caught error:", error.message);
  }

  const promise2 = await createPromise(1000);

  const promiseList = await Promise.all([
    createPromise(1000),
    createPromise(2000),
    createPromise(1000),
  ]);

  console.log("Promise list:", promiseList);

  console.log("Third:", promise2);
}

function syncFunction() {
  return "Sync function!";
}

/* console.log(asyncFunction());
console.log(syncFunction()); */

await execute();

console.log("End");
