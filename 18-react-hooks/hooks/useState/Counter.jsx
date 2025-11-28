import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    if (count >= 20) return;
    setCount(count + 1);
  };
  const remove = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={add}>Increase</button>
      <button onClick={remove}>Decrease</button>
    </div>
  );
};

export default Counter;
