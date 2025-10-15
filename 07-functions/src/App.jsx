import React from "react";

function App() {
  const btnClicked = () => {
    console.log("Btn Clicked");
  };
  const onMouseEnter = () => {
    console.log("On Mouse ENter");
  };

  const onchange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <button onMouseEnter={onMouseEnter} onClick={btnClicked}>
        Click Me
      </button>

      <div>
        <input type="text" onChange={onchange} />
      </div>
    </div>
  );
}

export default App;
