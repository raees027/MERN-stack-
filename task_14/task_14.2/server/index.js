const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const productList = [
  {
    id: uuidv4(),
    title: "Ball Pen",
    color: "blue",
    price: 10,
    stock: 120,
    category: "Stationery",
    image: "blue-pen.jpeg ",
  },
  {
    id: uuidv4(),
    title: "CD Marker",
    color: "blue",
    price: 25,
    stock: 80,
    category: "Stationery",
    image: "cd marker-blue.jpeg",
  },
  {
    id: uuidv4(),
    title: "CD Marker",
    color: "red",
    price: 25,
    stock: 90,
    category: "Stationery",
    image: "cd marker-red.png",
  },
  {
    id: uuidv4(),
    title: "CD Marker",
    color: "black",
    price: 25,
    stock: 100,
    category: "Stationery",
    image: "cd marker-black.jpeg",
  },
  {
    id: uuidv4(),
    title: "Ball Pen",
    color: "black",
    price: 30,
    stock: 70,
    category: "Stationery",
    image: "black-penn.jpeg",
  },
];

app.get("/api/product-list", (req, res) => {
  res.json(productList);
});

app.get("/api/product-list/:id", (req, res) => {
  const { id } = req.params;

  const filteredList = productList.filter((data) => data.id === id);

  res.json({ filteredList });
});

PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server started running in ${PORT}`);
});
