import React from "react";

function App() {
  const user = {
    username: "Shubham",
    age: 25,
  };

  localStorage.setItem("user", JSON.stringify(user));

  const usera = JSON.parse(localStorage.getItem("user"));
  console.log(usera);

  return <div>App</div>;
}

export default App;
