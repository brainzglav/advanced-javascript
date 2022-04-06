const obj = null;

/* 
console.log(obj && obj.name);
console.log(obj?.name);
 */

try {
  console.log(obj.name);
} catch (err) {
  console.log("Error was caught:", err.message);
}

console.log(obj);
