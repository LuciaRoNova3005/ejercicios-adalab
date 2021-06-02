import "../stylesheets/App.css";
import React from "react";
import HalfPage from "./HalfPage";

//const StudenPromoa = students.filter((filter) => ();

class App extends React.Component {
  render() {
    return (
      <div>
        <HalfPage>
          <h1>texto a la derecha</h1>
          <p>Hola</p>
        </HalfPage>
        <HalfPage>
          <h1>texto a la izquierda</h1>
        </HalfPage>
      </div>
    );
  }
}

export default App;
