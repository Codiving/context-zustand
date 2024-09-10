"use client";

import useStore from "./store";

const Counter = () => {
  const { count, countIncrement, countDecrement } = useStore();
  return (
    <div>
      <p>Count: {count}</p>
      <div className="age-btn">
        <button onClick={countIncrement}>Increment</button>
        <button onClick={countDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
