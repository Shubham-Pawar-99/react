import React from "react";
import { useParams } from "react-router-dom";

function CourcesDetails() {
  // useParms for
  const params = useParams();

  return (
    <div>
      <h1>{params.cid} Cources Details Page</h1>
    </div>
  );
}

export default CourcesDetails;
