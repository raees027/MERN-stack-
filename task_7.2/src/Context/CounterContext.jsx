import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count_temp, setCount] = useState(0);

  const Increament = () => {
    setCount((prev) => prev + 1);
  };

  const Decreament = () => {
    setCount((prev) => prev - 1);
  };

  const Reset = () => {
    setCount(0);
  };

  const Increament_by_10 = () => {
    setCount((prev) => prev + 10);
  };
  const Decreament_by_5 = () => {
    setCount((prev) => prev - 5);
  };

  return (
    <CounterContext.Provider
      value={{
        count_temp,
        setCount,
        Increament,
        Decreament,
        Reset,
        Decreament_by_5,
        Increament_by_10,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
