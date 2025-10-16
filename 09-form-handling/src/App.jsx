import React from "react";

function App() {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log("From Submited!");
  };
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" className="text" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
