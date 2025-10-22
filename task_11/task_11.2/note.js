const fs = require("fs");
const { json } = require("stream/consumers");

const userList = [
  {
    name: "sdf",
    name: "hjg",
    named: "sdfg",
    namef: "sdfh",
    nameh: "sdfhj",
    nameg: "sdfjhjh",
  },
  {
    name: "sdf",
    name: "hjg",
    named: "sdfg",
    namef: "sdfh",
    nameh: "sdfhj",
    nameg: "sdfjhjh",
  },
  {
    name: "sdf",
    name: "hjg",
    named: "sdfg",
    namef: "sdfh",
    nameh: "sdfhj",
    nameg: "sdfjhjh",
  },
  {
    name: "sdf",
    name: "hjg",
    named: "sdfg",
    namef: "sdfh",
    nameh: "sdfhj",
    nameg: "sdfjhjh",
  },
  {
    name: "sdf",
    name: "hjg",
    named: "sdfg",
    namef: "sdfh",
    nameh: "sdfhj",
    nameg: "sdfjhjh",
  },
];

// fs.writeFileSync("user.json", JSON.stringify(userList, undefined, 4));
// fs.writeFileSync("file1.txt", "you are in first file");

// const isexist = fs.existsSync("file1.txt");

// const data = fs.readFileSync("file1.txt", "utf-8");
// const data = fs.readFileSync("user.json", "utf-8");

// fs.appendFileSync("file1.txt", " \n made some changes");
// console.log(data);
// console.log(JSON.parse(data));

// fs.unlinkSync("file.txt"); deleting the file
// fs.mkdirSync("api"); creating aa folder
// fs.rmdirSync("api"); removing a folder

// console.log(isexist);

fs.writeFile("file2.txt", "this is second file", (err) => {
  if (err) throw err;

  console.log(" second file created");
});

fs.readFile("file2.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);

  console.log(" second file created");
});

fs.access("file2.txt", (err) => {
  if (err) throw err;
  console.log("file exist");
});

console.log("file created");
console.log("--end--");
