import React from "react";

class Exercice1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({
      value: ev.target.value,
    });
  }

  render() {
    return (
      <>
        <input type="text" onChange={this.handleChange}></input>
        <p> {this.state.value}</p>
      </>
    );
  }
}
export default Exercice1;
