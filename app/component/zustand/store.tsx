import { create } from "zustand";

interface State {
  count: number;
  age: number;
  countIncrement: () => void;
  countDecrement: () => void;
  ageIncrement: () => void;
  ageDecrement: () => void;
}

const useStore = create<State>(set => ({
  count: 0,
  age: 0,
  countIncrement: () => set(state => ({ count: state.count + 1 })),
  countDecrement: () => set(state => ({ count: state.count - 1 })),
  ageIncrement: () => set(state => ({ age: state.age + 1 })),
  ageDecrement: () => set(state => ({ age: state.age - 1 }))
}));

export default useStore;
