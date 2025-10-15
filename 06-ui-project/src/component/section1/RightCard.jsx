import React from "react";
import RightCardContent from "./RightCardContent";

function RightCard(props) {
  console.log(props);

  return (
    <div className="h-full shrink-0 w-80 rounded-4xl overflow-hidden relative">
      <img
        className="w-full h-full object-cover"
        src={props.img}
        alt={props.img}
      />
      <RightCardContent intro={props.intro} id={props.id} tag={props.tag} color={props.color} />
    </div>
  );
}

export default RightCard;
