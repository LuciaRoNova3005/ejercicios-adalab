"use strict";

const usersInfo = [
  {
    name: "Lucia",
    lastName: "Rodriguez",
    telephone: 555666777,
  },
  {
    name: "Maria",
    lastName: "nova",
    telephone: 111222333,
  },
];
const select = document.querySelector(".js-select");
const input = document.querySelectorAll(".js-input");

function fillInput(event) {
  for (let i = 0; i < usersInfo.length; i++) {
    if (event.currentTarget.value === usersInfo[i].name) {
      input[0].value = usersInfo[i].name;
      input[1].value = usersInfo[i].lastName;
      input[2].value = usersInfo[i].telephone;
    }
  }
}

select.addEventListener("change", fillInput);
