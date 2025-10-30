import { useMemo, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const result = useMemo(() => {
    console.log("calculating");
    let total = 0;
    for (let i = 0; i < 1e8; i++) total += i;
    return total;
  }, [count]);
  return (
    <div>
      <h3>Expensive Result: {result}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count {count}
      </button>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          console.log("changing");
        }}
      />
    </div>
  );
};

export default Count;
