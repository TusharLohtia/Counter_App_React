import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    return setCount(count + 1);
  };

  const Decrement = () => {
    return setCount(count - 1);
  };

  const Reset = () => {
    return setCount(0);
  };

  return (
    <>
      <h2>Counter Application</h2>
      <p>{count}</p>
      <div className="allbutton">
        <button className="increment" onClick={Increment}>
          Increment
        </button>
        <button className="decrement" onClick={Decrement}>
          Decrement
        </button>
        <button className="reset" onClick={Reset}>
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
