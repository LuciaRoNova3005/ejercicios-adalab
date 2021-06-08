import "../stylesheets/App.css";
import Form from "./Form";
import Card from "./Card";
import { useState } from "react";

function App() {
  const [forminput, setForminput] = useState({
    name: "",
    description: "",
    language: "",
  });
  const handleInputData = (ev) => {
    setForminput({
      ...forminput,
      [ev.target.name]: ev.target.value,
    });
  };
  return (
    <div>
      <Form onChange={handleInputData} />
      <Card
        name={forminput.name}
        description={forminput.description}
        language={forminput.language}
      />
      ;
    </div>
  );
}

export default App;
