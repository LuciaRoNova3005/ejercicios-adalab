function Clubs(props) {
  return (
    <div>
      <i className={props.icon}> </i>
      <h2>{props.name}</h2>
      <ul>
        {props.members.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default Clubs;
