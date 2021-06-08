import "../stylesheets/App.css";
import Form from "./Form";
import Card from "./Card";
import { useState } from "react";

function App() {
  const [forminput, setForminput] = useState({
    name: "",
    description: "",
    idioma: "",
  });
  const handleInputData = (ev) => {
    setForminput({
      ...forminput,
      [ev.target.name]: ev.target.value,
    });
  };
  return (
    <div>
      <Form onKeyUp={handleInputData} />
      <Card name={forminput.name} description={forminput.description} />;
    </div>
  );
}

export default App;
