import React from "react";
import "../stylesheets/App.css";
class Exercice6 extends React.Component {
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
    const sheeps = [];
    for (let i = 0; i < this.state.counter; i++) {
      sheeps.push(
        <img
          width="40px"
          src="http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon%20Sheep.svg.hi.png"
          alt="sheep-cartoon"
        />
      );
    }
    return (
      <div className="container">
        <div>{sheeps}</div>
        <p>{this.state.counter}</p>
        <button onClick={this.handleClick}>Cuenta ovejas</button>
      </div>
    );
  }
}

export default Exercice6;
