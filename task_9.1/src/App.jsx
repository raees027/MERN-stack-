import { useState } from "react";
import "./App.css";
import { useToggle } from "./hooks/useToggle";
import { useDirection } from "./hooks/useDirection";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const { theme, handleToggle } = useToggle();
  console.log(theme);

  const { direction, handleDirection } = useDirection();

  const { items, handleSetItems, handleLocalStorage } = useLocalStorage();

  console.log(items);

  return (
    <>
      <div className={`search-container ${theme ? "dark" : "light"}`}>
        <div className={`search-section ${theme ? "dark" : "light"}`}>
          <h1>You can start your search..</h1>
          <input type="text" />
          <button onClick={handleToggle}>{theme ? "Light" : "Dark"}</button>
          <button onClick={handleDirection}>
            {direction === "ltr" ? "Left to Right" : "Right to Left"}
          </button>
        </div>
        <div className="localstorage-section">
          <label htmlFor="">ID</label>
          <input
            type="text"
            onChange={handleSetItems}
            name="id"
            value={items.id}
          />

          <label htmlFor="">Token</label>
          <input
            type="text"
            onChange={handleSetItems}
            name="token"
            value={items.token}
          />

          <button onClick={handleLocalStorage}>Save</button>
        </div>
      </div>
    </>
  );
}

export default App;
