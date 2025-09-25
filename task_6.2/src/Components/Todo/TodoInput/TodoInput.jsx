import "./TodoInput.css";
export const TodoInput = ({
  handleOnClick,
  handleChange,
  todoInput,
  inputError,
}) => {
  return (
    <>
      <div className="todo-input-container">
        <div className="todo-input-items">
          <input
            type="text"
            placeholder="New Todo"
            onChange={handleChange}
            value={todoInput}
          />
          <button onClick={handleOnClick}>ADD TODO</button>
        </div>

        {inputError && <p className="danger">Input cannot be empty</p>}
      </div>
    </>
  );
};
