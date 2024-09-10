import Age from "./Age";
import { CountProvider } from "./CountContext";
import Counter from "./Counter";
import Display from "./Display";

export default function ContextAPI() {
  return (
    <CountProvider>
      <div>
        <h2>Context API</h2>
        <Counter />
        <Age />
        <Display />
      </div>
    </CountProvider>
  );
}
