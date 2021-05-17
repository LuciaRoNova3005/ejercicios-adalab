"use strict";
const button = document.querySelector(".js-button");

function getActor() {
  let actor = document.querySelector(".js-wordSearch").value;
  fetch(`https://swapi.dev/api/people/?search=${actor}`)
    .then((response) => response.json())
    .then((data) => {
      let result = document.querySelector(".js-result");
      result.innerHTML += `<li>Personaje: ${data.results[0].name} Género: ${data.results[0].gender}</li>`;
    });
}
button.addEventListener("click", getActor);
