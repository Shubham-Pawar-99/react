import React from "react";
import Navbar from "./Navbar";
import Page1Content from "./Page1Content";

function Section1(props) {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Page1Content user={props.user} />
    </div>
  );
}

export default Section1;
