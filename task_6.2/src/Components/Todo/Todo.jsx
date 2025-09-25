import { useState } from "react";
import "./Todo.css";
import { TodoInput } from "./TodoInput/TodoInput";
import { TodoList } from "./TodoList/TodoList";
import { useEffect } from "react";
// import { TodoEdit } from "./TodoEdit/TodoEdit";
export const Todo = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editButtonActiveID, setEditButtonActiveID] = useState();
  const [editInput, setEditInput] = useState("");
  const [inputError, setInputError] = useState(false);
  const [todoCompleted, setTodoCompleted] = useState([]);

  const handleChange = (event) => {
    setTodoInput(event.target.value);
    if (event.target.value === "") {
      setInputError(true);
    } else setInputError(false);
  };

  const handleOnClick = () => {
    if (!(todoInput === "")) {
      setTodoList((prev) => [...prev, todoInput]);
      localStorage.setItem(todoList.length, todoInput);
    }
    setTodoInput("");
  };

  console.log(todoList, "==todolist");
  console.log(todoInput, "==todoinput");

  const handleDeleteButton = (key) => {
    const filtered_list = [...todoList].filter((data, index) => index !== key);
    localStorage.removeItem(localStorage.key(key));

    setTodoList(filtered_list);
    console.log(filtered_list, "==filetered list");
  };

  const handleEditButton = (key) => {
    setEditButtonActiveID(editButtonActiveID === key ? "" : key);
  };

  const handleCancelButton = () => {
    setEditButtonActiveID("");
    setEditInput("");
  };

  const handleEditSaveButton = (key, editInput) => {
    if (editInput !== "") {
      const editedList = [...todoList].map((data, index) =>
        key === index ? editInput : data
      );
      console.log(editedList, "==editedlist");
      console.log(editInput, "==editinputintodo");
      setTodoList(editedList);
      setEditButtonActiveID("");
    }
  };

  //   const handleError = () => {
  //     if (todoInput === "") setInputError(true);
  //   };

  console.log(inputError, "==inputErro");

  useEffect(() => {
    let saveTodo = [];
    for (let i = 0; i < localStorage.length; i++) {
      saveTodo.push(localStorage.getItem(localStorage.key(i)));
    }

    // localStorage.getItem(localStorage.key(0));
    setTodoList(saveTodo);
  }, []);

  const handleTodoCompleted = (index) => {
    setTodoCompleted((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  useEffect(() => {
    todoList.forEach((data, index) => {
      localStorage.setItem(index, data);
    });
  }, [todoList]);

  //   useEffect(() => {
  //     let saveTodo;

  //     saveTodo = localStorage.setItem("todolist", todoList);
  //   }, [todoList]);

  return (
    <>
      <div className="todo-container">
        <h1 className="title">Todo List</h1>
        <TodoInput
          todoInput={todoInput}
          handleOnClick={handleOnClick}
          handleChange={handleChange}
          inputError={inputError}
        />

        <TodoList
          todoList={todoList}
          handleDeleteButton={handleDeleteButton}
          handleEditButton={handleEditButton}
          editButtonActiveID={editButtonActiveID}
          handleCancelButton={handleCancelButton}
          handleEditSaveButton={handleEditSaveButton}
          handleTodoCompleted={handleTodoCompleted}
          todoCompleted={todoCompleted}
        />
        {/* <TodoEdit
          todoList={todoList}
          handleEditButton={handleEditButton}
          editButtonActiveID={editButtonActiveID}
        /> */}
      </div>
    </>
  );
};
