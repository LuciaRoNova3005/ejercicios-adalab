import React from "react";
import "../stylesheets/App.css";
class Exercice2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorClass: "red",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((colorClass, props) => {
      let color;
      if (colorClass.styling === "red") {
        color = "red";
      } else {
        color = "blue";
      }

      return {
        colorClass: color,
      };
    });
  }

  render() {
    return (
      <div className="container">
        <div className={this.state.colorClass} onClick={this.handleClick}></div>
      </div>
    );
  }
}

export default Exercice2;
