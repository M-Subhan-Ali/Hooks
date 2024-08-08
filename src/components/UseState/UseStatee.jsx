import React from "react";
import { useState } from "react";

const UseStatee = () => {
  const [counter, setCounter] = useState(0);
  const [inputs, setInputs] = useState("pedro");
  const [box, setBox] = useState(true);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  const HandlerOnchange = (event) => {
    const newValue = event.target.value;
    setInputs(newValue);
  };
  const Box = () => {
    setBox(!box);
  };
  const buttonStyle = box
    ? { transform: "translateX(200px)", backgroundColor: "blue" }
    : { transform: "TranslateX(400px)", backgroundColor: "red" };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <button onClick={decrement} style={{ width: "45px", height: "50px" }}>
          -
        </button>
        <p style={{ fontSize: "45px" }}>{counter}</p>
        <button onClick={increment} style={{ width: "45px", height: "50px" }}>
          +
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="write something here..."
          onChange={HandlerOnchange}
        />
        <p>{inputs}</p>
      </div>
      <div className="box">
        <div
          onClick={Box}
          className=""
          style={{
            ...buttonStyle,
            width: "200px",
            height: "200px",
            transition: "transform 0.3s ease",
          }}
        ></div>
      </div>
    </div>
  );
};

export default UseStatee;
