"use strict";
const text = document.querySelector(".js-text");
const form = document.querySelector(".js-form");

function handelform(ev) {
  const inputChanged = ev.target;
  if (inputChanged.id === "light") {
    text.classList.add("light");
    text.classList.remove("dark");
  } else if (inputChanged.id === "dark") {
    text.classList.add("dark");
    text.classList.remove("light");
  }
}

form.addEventListener("click", handelform);
