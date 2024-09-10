"use client";

import useStore from "./store";

const Age = () => {
  const { age, ageIncrement, ageDecrement } = useStore();
  return (
    <div>
      <p>Age: {age}</p>
      <div className="age-btn">
        <button onClick={ageIncrement}>Increment</button>
        <button onClick={ageDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Age;
