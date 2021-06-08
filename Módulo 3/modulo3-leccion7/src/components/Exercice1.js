import { useState } from "react";

function Exercice1(props) {
  const [collapsable, setcollapsable] = useState("hidden");

  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" />
      <div className="container">
        <textarea />
        <select name="language">
          <option>Selecciona el idioma</option>
          <option value="spanish">Español</option>
          <option value="ingles">Inglés</option>
          <option value="portugues">Portugués</option>
        </select>
      </div>
    </form>
  );
}

export default Exercice1;
