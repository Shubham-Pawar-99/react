import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  const colors = [
    "red",
    "green",
    "blue",
    "white",
    "black",
    "pink",
    "lavender",
    "purple",
    "olive",
    "yellow",
    "gray",
  ];
  return (
    <div
      className="w-full h-screen transition-all duration-700"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2">
        {/* <h1 className="text-3xl text-center">Background Changer</h1> */}
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((color) => (
            <button
              className={`outline-none px-4 py-1 rounded-full ${
                color === "pink" || color === "white" || color === "lavender"||color==="yellow"
                  ? "text-black"
                  : "text-white"
              } shadow-lg active:scale-95`}
              style={{ backgroundColor: color }}
              onClick={() => setColor(color)}
            >
              {color.charAt(0).toUpperCase()+color.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
