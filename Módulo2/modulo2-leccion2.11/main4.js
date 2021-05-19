"use strict";
const nameUser = document.querySelector(".js-name");
const text = document.querySelector(".js-result");
const loadPage = document.querySelector("body");

function content() {
  const valor = nameUser.value;
  text.innerHTML = valor;
  let local = localStorage.setItem("name", nameUser.value);
}
function getLocal() {
  let localstore = localStorage.getItem;
  console.log(localstore);
}
getLocal();
nameUser.addEventListener("keyup", content);
