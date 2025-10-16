import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("From Submited by", title);
    setTitle("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          className="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
