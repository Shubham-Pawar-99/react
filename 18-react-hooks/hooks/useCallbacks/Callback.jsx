import { useCallback, useState } from "react";
import Button from "./Button";

const Callback = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = useCallback(() => {
    console.log("handle click");
    setCount(count + 1);
  }, [count]);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#333",
        minHeight: "100vh",
      }}
    >
      <h1>Count: {count}</h1>
      <Button onClick={handleClick} />
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode === true ? "Light" : "Dark"} Theme
      </button>
    </div>
  );
};

export default Callback;
