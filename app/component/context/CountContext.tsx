"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer
} from "react";

interface State {
  count: number;
  age: number;
}

interface Action {
  type: "countIncrement" | "countDecrement" | "ageIncrement" | "ageDecrement";
}

const initialState: State = { count: 0, age: 0 };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "countIncrement":
      return { ...state, count: state.count + 1 };
    case "countDecrement":
      return { ...state, count: state.count - 1 };
    case "ageIncrement":
      return { ...state, age: state.age + 1 };
    case "ageDecrement":
      return { ...state, age: state.age - 1 };
    default:
      return state;
  }
};

interface CountContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

const CountContext = createContext<CountContextProps | undefined>(undefined);

const CountProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};

const useCount = (): CountContextProps => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};

export { CountProvider, useCount };
