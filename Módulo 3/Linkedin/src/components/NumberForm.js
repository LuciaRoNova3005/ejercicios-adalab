import React from "react";

function NumberForm(props) {
  return (
    <>
      <form>
        <label className="label" htmlFor="number">
          Number
          <input
            placeholder="Escoge un número"
            id="number"
            name="number"
            type="number"
            onChange={props.handler}
          />
        </label>
      </form>
    </>
  );
}

export default NumberForm;
