import { useLayoutEffect, useState } from "react";

const ChangeBg = () => {
  const [color, setColor] = useState("lightblue");

  useLayoutEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div>
      <h2>Current Background {color}</h2>
      <button onClick={() => setColor("lightcoral")}>Red</button>
      <button onClick={() => setColor("lightgreen")}>Green</button>
      <button onClick={() => setColor("lightblue")}>Blue</button>
    </div>
  );
};

export default ChangeBg;
