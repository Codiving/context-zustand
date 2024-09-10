"use client";

import useStore from "./store";

const Age = () => {
  const age = useStore(state => state.age);
  const ageIncrement = useStore(state => state.ageIncrement);
  const ageDecrement = useStore(state => state.ageDecrement);
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
