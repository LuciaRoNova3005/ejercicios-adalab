import "../stylesheets/App.css";
import React from "react";
import PropTypes from "prop-types";

//const StudenPromoa = students.filter((filter) => ();

class App extends React.Component {
  render() {
    let students = [
      {
        promo: "A",
        name: "Sofía",
        age: 20,
        description: "Hola soy estudiante",
      },
      {
        promo: "B",
        name: "María",
        age: 21,
      },
      {
        promo: "A",
        name: "Lucía",
        age: 22,
      },
    ];

    return (
      <div>
        <h1>Listado de estudiantes</h1>
        {/* con este map iteramos iteramos el array de items */}
        {students.map((item) => {
          return (
            <li>
              Nombre: {item.name}
              <p>Edad: {item.age}</p>
              <p> {item.description}</p>
            </li>
          );
        })}
      </div>
    );
  }
}

export default App;
