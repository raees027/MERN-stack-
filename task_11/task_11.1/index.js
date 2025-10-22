const { add, sub, divide } = require("./utils");
const path = require("path");

console.log("hiii");
console.log("hiii");

console.log(add(5, 5));
console.log(sub(5, 5));
console.log(divide(5, 5));

console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename).ext);
