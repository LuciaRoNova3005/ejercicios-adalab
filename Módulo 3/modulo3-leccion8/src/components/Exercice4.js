import React from "react";
import "../stylesheets/App.css";

const users = [
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Gregory Goyle", time: 56 },
];
const [user1, user2, user3, , ,] = users;

function Exercice4() {
  return (
    <>
      <div>
        <h1 className="listTitle">Winners</h1>
        <ul className="listItems">
          <li>
            {user1.name} with {user1.time}seconds
          </li>

          <li>
            {user2.name} with {user2.time}seconds
          </li>

          <li>
            {user3.name} with {user3.time}seconds
          </li>
        </ul>
      </div>
    </>
  );
}

export default Exercice4;
