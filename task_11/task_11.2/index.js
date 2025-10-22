const fs = require("fs");
const { json } = require("stream/consumers");

fs.writeFileSync("file1.txt", "you are in first file");

const data = fs.readFileSync("file1.txt", "utf-8");

fs.appendFileSync("file1.txt", " \n made some changes");
console.log(data);

fs.writeFile("file2.txt", "this is second file", (err) => {
  if (err) throw err;

  console.log(" second file created");
});

fs.readFile("file2.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);

  console.log(" second file created");
});

console.log("file created");
console.log("--end--");
