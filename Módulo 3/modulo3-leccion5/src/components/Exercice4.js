import React from "react";
import "../stylesheets/App.css";
class Exercice2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => {
      let prevValue = prevState.counter;
      let nextCounter = prevValue + 1;
      return {
        counter: nextCounter,
      };
    });
  }

  render() {
    return (
      <div className="container">
        <p>{this.state.counter}</p>
        <button onClick={this.handleClick}>Cuenta ovejas</button>
      </div>
    );
  }
}

export default Exercice2;
