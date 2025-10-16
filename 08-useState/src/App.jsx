import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({ name: "Shubham", age: 25 });
  const [count, setCount] = useState(10);
  const btnCXlicked = () => {
    const newUser = { ...user };
    newUser.name = "Harsh";
    newUser.age = 50;
    setUser(newUser);
  };

  const batchUpdate = () => {
    setCount((perv) => perv + 1);
    setCount((perv) => perv + 1);
    setCount((perv) => perv + 1);
    setCount((perv) => perv + 1);
  };

  return (
    <div>
      {Object.keys(user).map((key) => {
        return (
          <h1 key={key}>
            {key}:{user[key]}
          </h1>
        );
      })}
      <button
        onClick={btnCXlicked}
        className="bg-gray-500 border-1 px-4 py-1 rounded-full text-white"
      >
        Click Me
      </button>

      <div className="my-4">
        <h1>{count}</h1>
      </div>
      <button
        onClick={batchUpdate}
        className="bg-gray-500 border-1 px-4 py-1 rounded-full text-white"
      >
        Batch Update
      </button>
    </div>
  );
}

export default App;
