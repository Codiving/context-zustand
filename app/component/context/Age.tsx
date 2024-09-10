"use client";

import { useCount } from "./CountContext";

const Age = () => {
  const { state, dispatch } = useCount();
  return (
    <div>
      <p>Age: {state.age}</p>
      <div className="age-btn">
        <button onClick={() => dispatch({ type: "ageIncrement" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "ageDecrement" })}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Age;
