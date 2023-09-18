import React, { useState } from "react";

const Dice = (props) => {
  console.log(props);
  return (
    <div className={`dice ${props.active && "shake"}`}>
      <i className={`fa-solid fa-8x fa-dice-${props.number}`}></i>
    </div>
  );
};

export default Dice;
