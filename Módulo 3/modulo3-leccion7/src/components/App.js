import "../stylesheets/App.css";
import Form from "./Form";
import Card from "./Card";
import { useState } from "react";

function App() {
  const [forminput, setForminput] = useState({
    name: "",
    description: "",
    language: "",
    gender: "",
  });

  const [Ages, setAge] = useState([]);

  const handleInputData = (ev) => {
    setForminput({
      ...forminput,
      [ev.target.name]: ev.target.value,
    });
  };

  const handelChange = (value) => {
    if (Ages.includes(value)) {
      const newAges = Ages.filter((age) => age !== value);
      setAge(newAges);
    } else if (Ages.length < 2) {
      const newAges = [...Ages, value];
      setAge(newAges);
    } else {
      alert("Solo puedes elegir tres generos");
    }
  };
  return (
    <div>
      <Form onChange={handleInputData} ChangeAge={handelChange} />
      <Card
        name={forminput.name}
        description={forminput.description}
        language={forminput.language}
        gender={forminput.gender}
        age={Ages}
      />
      ;
    </div>
  );
}

export default App;
