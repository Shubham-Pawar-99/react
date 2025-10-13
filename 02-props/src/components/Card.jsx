import React from "react";

function Card(props) {

    console.log(props.user);
    
  return (
    <div className="parent">
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1759505041005-6c75a1399f4c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
          alt="profile"
        />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
    </div>
  );
}

export default Card;
