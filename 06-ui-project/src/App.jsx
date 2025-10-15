import React from "react";
import Section1 from "./component/section1/Section1";
import Section2 from "./component/section2/Section2";

function App() {
const user = [
  {
    img: "https://plus.unsplash.com/premium_photo-1661281292577-27c65307ac42?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
    intro:
      "I had an amazing experience with the team — their support and dedication truly exceeded my expectations.",
    tag: "Satisfied",
    color: "green",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    intro:
      "The project delivery was smooth and on time. The quality of work was beyond what I expected.",
    tag: "UnderServed",
    color: "orange",
  },
  {
    img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
    intro:
      "Excellent communication and top-notch results. I’ll definitely collaborate again in the future!",
    tag: "Underbanked",
    color: "blue",
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=688",
    intro:
      "From start to finish, everything was handled professionally. I’m extremely pleased with the outcome.",
    tag: "Delighted",
    color: "purple",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661281292577-27c65307ac42?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
    intro:
      "I had an amazing experience with the team — their support and dedication truly exceeded my expectations.",
    tag: "Satisfied",
    color: "green",
  },
  {
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=688",
    intro:
      "The project delivery was smooth and on time. The quality of work was beyond what I expected.",
    tag: "Happy",
    color: "yellow",
  },
  {
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=688",
    intro:
      "Excellent communication and top-notch results. I’ll definitely collaborate again in the future!",
    tag: "Very Satisfied",
    color: "cyan",
  },
];


  return (
    <div className="w-full">
      <Section1 user={user} />
      <Section2 />
    </div>
  );
}

export default App;
