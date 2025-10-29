import React from "react";

function Nav2(props) {
  return (
    <div className="nav2">
      <h1>Home</h1>
      <h1>About</h1>
      <h1>Contact</h1>
      <h1>Service</h1>
      <h1>{props.theme}</h1>
    </div>
  );
}

export default Nav2;
