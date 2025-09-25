import { useState } from "react";
import "./TodoEdit.css";
export const TodoEdit = ({
  index,
  handleEditButton,
  editButtonActiveID,
  handleCancelButton,
  handleEditSaveButton,
}) => {
  const [editInput, setEditInput] = useState("");

  const [editInputError, setEditInputError] = useState(false);

  const handleOnChangeEdit = (event) => {
    if (event.target.value === "") {
      setEditInputError(true);
    } else setEditInputError(false);
    setEditInput(event.target.value);
  };

  console.log(editInput, "==editinpit");
  console.log(editInputError, "==editinputerror");

  return (
    <>
      <div className="todo-edit-container">
        <div className="todo-edit-items">
          <input
            type="text"
            placeholder="Editing current Todo item"
            value={editInput}
            onChange={handleOnChangeEdit}
          />
          <button
            className="save-button"
            onClick={() => handleEditSaveButton(index, editInput)}
          >
            SAVE
          </button>
          <button className="cancel-button" onClick={handleCancelButton}>
            CANCEL
          </button>
        </div>
        {editInputError && <p className="danger">Input cannot be empty</p>}
      </div>
    </>
  );
};
