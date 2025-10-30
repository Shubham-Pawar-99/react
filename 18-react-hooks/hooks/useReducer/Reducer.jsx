import React, { useReducer } from "react";
import { counterReducer } from "./counterReducer";

const Reducer = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h1>Value of the reducer is : {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default Reducer;
