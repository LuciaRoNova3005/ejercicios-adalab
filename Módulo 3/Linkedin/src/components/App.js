import "../stylesheets/App.css";
import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import getApiData from "../Services/Api";
import ls from "../Services/local-storage";

const App = () => {
  /*Un array vacío para definir el estado
   *  const [users, setUsers] = useState([]);*/
  const [users, setUsers] = useState(ls.get("users", []));

  /*Ejecuta cosas en el montaje. Pedir los datps de los usuarios
    UsersData es cleanData porque entre funciones no viajan variables
     */
  useEffect(() => {
    /*Si el array esta vacío no accedes al locastorage
     */
    if (users.length === 0) {
      getApiData().then((usersData) => {
        setUsers(usersData);
      });
    }
  }, []);
  /*Parámetro que nos indica cuando debe ejecutarse el useEffect
   */

  useEffect(() => {
    ls.set("users", users);
  }, [users]);
  /*Este Useeffect nos guarda en localsotrage cuando los usuarios cambian,se ejecuta cuando users cambia
   */
  const filteredUsers = users;
  return (
    <>
      <h1 className="title--big">Directorio de personas</h1>
      <div className="col2">
        <UserList users={filteredUsers} />
      </div>
    </>
  );
};

export default App;
