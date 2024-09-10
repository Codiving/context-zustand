"use client";

import { useCount } from "./CountContext";

const Display: React.FC = () => {
  const { state } = useCount();
  return <p>Display Count: {state.count}</p>;
};

export default Display;
