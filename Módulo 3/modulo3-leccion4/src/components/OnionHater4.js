import React from "react";

class OnionHater4 extends React.Component {
  constructor(props) {
    super(props);
    this.Haitin = false;
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (ev) => {
    const label = document.querySelector(".textArea");
    if (ev.target.value.toLowerCase().includes("cebolla")) {
      this.isHating = true;
      label.classList.add("red");
    } else {
      this.isHating = false;
      label.classList.remove("red");
    }
  };

  render() {
    return (
      <textarea
        className="textArea"
        onChange={this.handleChange}
        name="hate"
        id="hate"
        cols="30"
        rows="10"
      ></textarea>
    );
  }
}

export default OnionHater4;
