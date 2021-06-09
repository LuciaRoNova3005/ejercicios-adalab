function Card(props) {
  return (
    <div className="container">
      <h2>{props.name}</h2>
      <h3>{props.description}</h3>
      <h3>{props.language}</h3>
      <p>{props.gender}</p>
      <p>{props.age}</p>
    </div>
  );
}
export default Card;
