console.log("Go Bikonja");

const promise = new Promise((resolve, reject) => {
  //null.name;
  setTimeout(() => {
    const response = new Object("My personal error");

    if (response instanceof Error) {
      reject(response);
    }

    resolve(response);
  }, 3000);
})
  .then((value) => {
    console.log("First then:", value);

    /*  
    const promise2 = new Promise((resolve, reject) => {
      resolve("Oh no!");
    }).then((value) => {
      const promise3 = new Promise((resolve, reject) => {
        resolve("Oh double no!");
      }).then((value) => {
        const promise4 = new Promise((resolve, reject) => {
          resolve("Callback hell!");
        }).then((value) => {
          console.log(value);
        });
      });
    }); */
  })
  .catch((error) => {
    console.log("Caught error:", error.message);

    return "Returned value";
  })
  .then((value, second) => {
    console.log("Error return value:", value, second);
  });

console.log(promise);

console.log("Stop Bikonja");
