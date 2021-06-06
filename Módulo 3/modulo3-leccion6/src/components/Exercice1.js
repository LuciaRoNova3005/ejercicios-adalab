import React, { useState } from "react";
import "../stylesheets/App.css";

const Exercice1 = () => {
  const [age, setNumber] = useState(20);
  const handelClick = () => {
    setNumber(age + 1);
  };

  return (
    <div>
      <p>Hoy tengo {age} años de edad</p>
      <button onClick={handelClick}>HAZME MÁS VIEJO</button>
    </div>
  );
};

export default Exercice1;
