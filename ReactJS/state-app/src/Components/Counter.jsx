import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <div className="counter">
        <h1>Count: {count}</h1>
        <div className="buttons">
          <button onClick={Increment}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
