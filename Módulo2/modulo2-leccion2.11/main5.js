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
  localStorage.setItem("them", inputChanged.id);
}

form.addEventListener("click", handelform);

let savedTheme = localStorage.getItem("them");
if (savedTheme === "light") {
  text.classList.add("light");
  text.classList.remove("dark");
} else {
  text.classList.add("dark");
  text.classList.remove("light");
}
