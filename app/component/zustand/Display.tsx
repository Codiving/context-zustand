"use client";

import useStore from "./store";

const Display: React.FC = () => {
  const count = useStore(state => state.count);
  return <p>Display Count: {count}</p>;
};

export default Display;
