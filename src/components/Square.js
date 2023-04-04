import React from "react";

function Square({ value, handleClick, i }) {
  return (
    <button className={"square"} onClick={() => handleClick(i)}>
      {value} 
    </button>
  );
}

export default Square;
