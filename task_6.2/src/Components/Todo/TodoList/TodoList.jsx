import "./TodoList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { TodoEdit } from "../TodoEdit/TodoEdit";

export const TodoList = ({
  todoList,
  handleDeleteButton,
  handleEditButton,
  editButtonActiveID,
  handleCancelButton,
  handleEditSaveButton,
  editInputError,
  handleTodoCompleted,
  todoCompleted,
}) => {
  return (
    <>
      <div className="todo-list-container">
        {todoList.map((data, index) => (
          <div className="todo-list-edit-items" key={index}>
            <div className="todo-list-items">
              <p
                key={index}
                onClick={() => handleTodoCompleted(index)}
                className={todoCompleted.includes(index) ? "completed" : ""}
              >
                {data}
              </p>
              <div className="todo-list-buttons">
                <span
                  className="edit-button"
                  onClick={() => handleEditButton(index)}
                >
                  <FontAwesomeIcon icon={faPencil} />
                </span>

                <span
                  className="delete-button"
                  onClick={() => handleDeleteButton(index)}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
              </div>
            </div>

            {editButtonActiveID === index && (
              <TodoEdit
                index={index}
                todoList={todoList}
                handleEditButton={handleEditButton}
                editButtonActiveID={editButtonActiveID}
                handleCancelButton={handleCancelButton}
                handleEditSaveButton={handleEditSaveButton}
                editInputError={editInputError}
              />
            )}

            {/* {editToggle && (
              <TodoEdit
                key={index}
                todoList={todoList}
                handleEditButton={handleEditButton}
                editButtonActiveID={editButtonActiveID}
              />
            )} */}
          </div>
        ))}
      </div>

      {/* <div>
        {[...todoList].map(
          (data, index) =>
            editButtonActiveID === index && (
              <TodoEdit
                key={index}
                todoList={todoList}
                handleEditButton={handleEditButton}
                editButtonActiveID={editButtonActiveID}
              />
            )
        )}
      </div> */}
    </>
  );
};
