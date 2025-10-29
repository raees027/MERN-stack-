const express = require("express");
const app = express();
const cors = require("cors");
const movieList = require("./movies.json");

app.use(cors());
app.use(express.json());

app.get("/api/movies", (req, res) => {
  res.status(200).json(movieList);
});

const PORT = 3008;
app.listen(PORT, () => {
  console.log(`Server started running in ${PORT}.`);
});
