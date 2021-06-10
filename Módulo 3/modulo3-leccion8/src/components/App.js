import "../stylesheets/App.css";
import React from "react";
import Api from "../Services/Api.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { people: [] };

    FetchDirectory().then((data) => {
      this.setState({
        people: data.results,
      });
    });
    this.renderPeople = this.renderPeople.bind(this);
  }

  renderPeople() {
    return this.state.people.map((person, index) => {
      return (
        <li key={index}>
          {person.name.title}, {person.name.first}
        </li>
      );
    });
  }

  render() {
    return <ul>{this.renderPeople()}</ul>;
  }
}

export default App;
