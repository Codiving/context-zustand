"use client";

import { useCount } from "./CountContext";

const Counter = () => {
  const {
    state: { count },
    dispatch
  } = useCount();
  return (
    <div>
      <p>Count: {count}</p>
      <div className="age-btn">
        <button onClick={() => dispatch({ type: "countIncrement" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "countDecrement" })}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
