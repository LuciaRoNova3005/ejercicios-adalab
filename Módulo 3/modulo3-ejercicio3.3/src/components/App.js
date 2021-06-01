import "../stylesheets/App.css";
import React from "react";
import HalfPage from "./HalfPage";

//const StudenPromoa = students.filter((filter) => ();

class App extends React.Component {
  render() {
    const students = [
      {
        promo: "A",
        name: "Sofía",
        age: 20,
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
            </li>
          );
        })}
        <HalfPage></HalfPage>
      </div>
    );
  }
}

export default App;
