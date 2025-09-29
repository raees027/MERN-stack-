import { useState } from "react";
import "./Styles/globals.css";
import "./App.css";
import { Counter } from "./Components/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter />
    </>
  );
}

export default App;
