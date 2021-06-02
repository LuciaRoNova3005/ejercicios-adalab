import React from "react";

const Alert = (ev) => {
  {
    return alert("Tu destino es viajar a");
  }
};

class Destiny extends React.Component {
  render() {
    return (
      <select name="select" onChange={Alert}>
        <option value="">...</option>
        <option value="Buenos aires">Buenos aires</option>
        <option value="Sidney">Sidney</option>
        <option value="praga">praga</option>
        <option value="boston">boston</option>
      </select>
    );
  }
}
export default Destiny;
