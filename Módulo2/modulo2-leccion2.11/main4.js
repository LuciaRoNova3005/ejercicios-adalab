"use strict";
const nameUser = document.querySelector(".js-name");
const text = document.querySelector(".js-result");

function content() {
  const valor = nameUser.value;
  text.innerHTML = valor;
  localStorage.setItem("name", nameUser.value);
}
let local = localStorage.getItem("name", nameUser.value);
if (local !== "") {
  nameUser.value = local;
  text.innerHTML = local;
}
nameUser.addEventListener("keyup", content);
