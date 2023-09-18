import React, { useState, useRef, useEffect } from "react";
import Dice from "./Dice";

const RollDice = () => {
  const [number, setNumber] = useState("one");
  const [number2, setNumber2] = useState("one");
  const [rolling, setRolling] = useState(true);
  const btn = useRef();
  useEffect(() => {
    handleDice();
    console.log("Page Downloaded and function handleDice running!");
  }, []);
  //--
  const handleDice = () => {
    const randomNumber = Math.ceil(Math.random() * 6);
    const randomNumber2 = Math.ceil(Math.random() * 6);
    const numberText = ["one", "two", "three", "four", "five", "six"];
    const renderedNumber = numberText[randomNumber - 1];
    const renderedNumber2 = numberText[randomNumber2 - 1];
    setRolling(false);

    setTimeout(() => {
      setNumber(renderedNumber);
      setNumber2(renderedNumber2);
      setRolling(true);
    }, 1000);
  };
  //---
  return (
    <div className="rollDice">
      <div className="rollDice-Container">
        <Dice number={number} active={rolling} />
        <Dice number={number2} active={rolling} />
      </div>
      <button
        className={!rolling && "active"}
        onClick={handleDice}
        ref={btn}
        disabled={!rolling}
      >
        {rolling ? "Roll Dice!" : "Rolling..."}
      </button>
    </div>
  );
};

export default RollDice;
