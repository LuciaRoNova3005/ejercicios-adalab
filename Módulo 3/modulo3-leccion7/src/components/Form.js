import React from "react";

function Form(props) {
  const handelChange = (ev) => {
    props.ChangeAge(ev.currentTarget.value);
  };
  return (
    <form onChange={props.onChange} key={props.name}>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" name="name" />
      <div className="container">
        <textarea id="description" type="text" name="description" />
        <select id="language" name="language">
          <option>Selecciona el idioma</option>
          <option value="spanish">Español</option>
          <option value="ingles">Inglés</option>
          <option value="portugues">Portugués</option>
        </select>
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">Masculino</label>
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Femenino</label>
        <input type="radio" id="other" name="gender" value="other" />
        <label htmlFor="other">Otros</label>
        <label>
          <input
            onChange={handelChange}
            type="checkbox"
            id="cbox1"
            value="first_checkbox"
          />
          Mayores 16
        </label>
        <input
          onChange={handelChange}
          type="checkbox"
          id="cbox2"
          value="second_checkbox"
        />
        <label htmlFor="cbox2">Mayores de 18</label>
      </div>
    </form>
  );
}

export default Form;
