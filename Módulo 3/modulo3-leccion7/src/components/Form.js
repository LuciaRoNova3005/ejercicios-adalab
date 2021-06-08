function Form(props) {
  return (
    <form onChange={props.onChange}>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" name="name" />
      <div className="container">
        <textarea id="description" type="text" name="description" />
        <select id="language" name="language">
          <option>Selecciona el idioma</option>
          <option value="spanish">Español</option>
          <option value="ingles">Inglés</option>
          <option value="portugues">Portugués</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
