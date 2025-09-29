import { useContext, useReducer } from "react";
import { CounterContext } from "../Context/CounterContext";
import "./Counter.css";
import { counterReducer } from "./CounterReducer";

export const Counter = () => {
  //   const {
  //     count,
  //     setcount,
  //     Increament,
  //     Decreament,
  //     Reset,
  //     Decreament_by_5,
  //     Increament_by_10,
  //   } = useContext(CounterContext);

  const { count_temp, setCount } = useContext(CounterContext);

  const [state, dispatch] = useReducer(counterReducer, {
    count: count_temp,
  });

  return (
    //using context api

    // <>
    //   <div className="counter-section">
    //     <h1>Counter {state.count}</h1>
    //     <div className="buttons">
    //       <button onClick={Decreament}>-</button>
    //       <button onClick={Increament}>+</button>
    //       <button onClick={Reset}>Reset</button>
    //       <button onClick={Increament_by_10}>Increament by 10</button>
    //       <button onClick={Decreament_by_5}>Decreament by 5</button>
    //     </div>
    //   </div>
    // </>

    //Using use reducer

    // <div className="counter-section">
    //   <h1>Counter {state.count}</h1>
    //   <div className="buttons">
    //     <button
    //       onClick={() =>
    //         dispatch({
    //           type: "Decreament",
    //         })
    //       }
    //     >
    //       -
    //     </button>
    //     <button onClick={() => dispatch({ type: "Increament" })}>+</button>
    //     <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    //     <button
    //       onClick={() =>
    //         dispatch({
    //           type: "Increment_by",
    //           payload: 10,
    //         })
    //       }
    //     >
    //       Increament by 10
    //     </button>
    //     <button
    //       onClick={() =>
    //         dispatch({
    //           type: "Decrement_by",
    //           payload: {
    //             count: 5,
    //           },
    //         })
    //       }
    //     >
    //       Decreament by 5
    //     </button>
    //   </div>
    // </div>

    <div className="counter-section">
      <h1>Counter {state.count}</h1>
      <div className="buttons">
        <button
          onClick={() =>
            dispatch({
              type: "Decreament",
            })
          }
        >
          -
        </button>
        <button onClick={() => dispatch({ type: "Increament" })}>+</button>

        <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
        <button
          onClick={() =>
            dispatch({
              type: "Increment_by",
              payload: 10,
            })
          }
        >
          Increament by 10
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "Decrement_by",
              payload: {
                count: 5,
              },
            })
          }
        >
          Decreament by 5
        </button>
      </div>
    </div>
  );
};
