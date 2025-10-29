const express = require("express");
const app = express();
const cors = require("cors");
const movieList = require("./movies.json");

app.use(cors());
app.use(express.json());

app.get("/api/movies", (req, res) => {
  const { movieName } = req.query;

  let filteredMovies = [];
  if (movieName) {
    filteredMovies = movieList.filter((data) =>
      data.title.toLowerCase().includes(movieName.toLowerCase())
    );
  } else {
    filteredMovies = movieList;
  }

  res.json({ results: filteredMovies });
});

app.use((req, res) => {
  res.status(404).json("This page doesnt exist");
});

const PORT = 3008;
app.listen(PORT, () => {
  console.log(`Server started running in ${PORT}.`);
});
