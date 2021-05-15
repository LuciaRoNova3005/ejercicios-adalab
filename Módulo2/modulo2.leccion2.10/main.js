"use strict";

//Ejercicio 1//
const button = document.querySelector(".js-number");
function enterNumber() {
  fetch("https://api.rand.fun/number/integer")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js-result").innerHTML = data.result;
    });
}
button.addEventListener("click", enterNumber);

//Ejercicio 2//

const buttonImg = document.querySelector(".js-imgbutton");

function getChiguagua() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector("img");
      img.src = data.message;
      img.alt = data.success;
    });
}
buttonImg.addEventListener("click", getChiguagua);
