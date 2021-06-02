import React from "react";

const Hate = (ev) => {
  if (ev.target.value.includes("cebolla")) {
    return alert("ODIO LA CEBOLLA");
  }
};

class OnionHater extends React.Component {
  render() {
    return (
      <textarea
        onChange={Hate}
        name="hate"
        id="hate"
        cols="30"
        rows="10"
      ></textarea>
    );
  }
}

export default OnionHater;
