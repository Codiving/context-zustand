"use client";

import useStore from "./store";

const Counter = () => {
  const count = useStore(state => state.count);
  const countIncrement = useStore(state => state.countIncrement);
  const countDecrement = useStore(state => state.countDecrement);
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
