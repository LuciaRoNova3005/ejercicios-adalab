import React, { useState } from "react";
import NumberForm from "./NumberForm.js";
import RenderNumber from "./RenderNumber.js";

function Exercice2() {
  let [NumberValue, setNumber] = useState("");
  const handleChange = (ev) => {
    setNumber((NumberValue = ev.target.value));
  };
  return (
    <>
      {console.log("userValue", NumberValue)}
      <NumberForm handler={handleChange} />
      <ul>
        <RenderNumber numberValue={NumberValue} />
      </ul>
    </>
  );
}

export default Exercice2;
