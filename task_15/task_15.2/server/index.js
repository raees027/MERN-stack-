const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const { checkAuth } = require("./middlewares/auth");

const app = express();

app.use(express.json());
app.use(cors());

const logFile = path.join(__dirname, "access.log");

app.use((req, res, next) => {
  const log = `${new Date().toISOString()} | ${req.method}| ${req.url}\n`;

  fs.appendFile(logFile, log, (err) => {
    if (err) {
      console.error("Error writing log:", err);
    }
  });
  console.log("Inside apllication level middleware");
  next();
});

app.get("/api", (req, res) => {
  res.json("In get method");
});

app.post("/api", checkAuth, (req, res) => {
  res.json("In post method");
});
PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server started running in ${PORT}`);
});
