const express = require("express");
const app = express();
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

app.use(cors());
app.use(express.json());

const todoList = [
  {
    id: "k492dt8p1",
    todo: "test1",
    isCompleted: false,
  },
];

app.get("/api/todo", (req, res) => {
  res.status(200).json(todoList);
});

app.post("/api/todo", (req, res) => {
  const { todo } = req.body;

  // if (!("todo" in req.body)) {
  //   return res.status(400).json({
  //     message: `${JSON.stringify(
  //       req.body
  //     )} : This attribute not accepted , Required attribute :todo`,
  //   });
  // }

  const validKeys = ["todo"];
  const bodyKeys = Object.keys(req.body);

  const invalidkeys = bodyKeys.filter((key) => !validKeys.includes(key));

  const errorvalidkeys = validKeys.filter((key) => !bodyKeys.includes(key));

  if (invalidkeys.length > 0) {
    return res.status(400).json({
      message: `${invalidkeys.join(
        ","
      )} :This attribute not accepted, Required attribute : ${errorvalidkeys.join(
        ","
      )} `,
    });
  }

  const todoItem = {
    id: uuidv4(),
    todo: todo,
    isCompleted: false,
  };

  todoList.push(todoItem);
  res.json(todoList);
});

app.put("/api/todo", (req, res) => {
  const { id, todo, isCompleted } = req.body;

  // if (!Object.keys(todoItem).includes(req.body)) {
  //   return res.status(400).json({
  //     message: `${JSON.stringify(
  //       req.body
  //     )} :This attribute not accepted, Required attribute : `,
  //   });
  // }

  const validKeys = ["id", "todo", "isCompleted"];
  const bodyKeys = Object.keys(req.body);

  const invalidkeys = bodyKeys.filter((key) => !validKeys.includes(key));

  const errorvalidkeys = validKeys.filter((key) => !bodyKeys.includes(key));

  if (invalidkeys.length > 0) {
    return res.status(400).json({
      message: `${invalidkeys.join(
        ","
      )} :This attribute not accepted, Required attribute : ${errorvalidkeys.join(
        ","
      )} `,
    });
  }

  const isExist = todoList.find((data) => data.id === id);

  if (isExist) {
    todoList.forEach((todoItem) => {
      if (todoItem.id === id) {
        (todoItem.todo = todo), (todoItem.isCompleted = isCompleted || false);
      }
    });
  }

  res.json(todoList);
});

app.delete("/api/todo", (req, res) => {
  const { id } = req.body;

  const validKeys = ["id"];
  const bodyKeys = Object.keys(req.body);

  const invalidkeys = bodyKeys.filter((key) => !validKeys.includes(key));

  const errorvalidkeys = validKeys.filter((key) => !bodyKeys.includes(key));

  if (invalidkeys.length > 0) {
    return res.status(400).json({
      message: `${invalidkeys.join(
        ","
      )} :This attribute not accepted, Required attribute : ${errorvalidkeys.join(
        ","
      )} `,
    });
  }

  const todoIndex = todoList.findIndex((todoItem) => todoItem.id === id);

  if (todoIndex !== -1) {
    todoList.splice(todoIndex, 1);
    return res.json(todoList);
  }

  // return res.status(400).json({
  //   message: "Item doesnt exist",
  // });
});
PORT = 3010;

app.listen(PORT, () => {
  console.log(`Server started running in port ${PORT}`);
});
