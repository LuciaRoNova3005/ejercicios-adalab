"use strict";
const numbers = [1, 2, 3];
const container = document.querySelector(".js-list");
for (let i = 0; i < numbers.length; i++) {
  const list = document.createElement("li");
  const newContent = document.createTextNode(numbers[i]);
  list.appendChild(newContent);
  container.appendChild(list);
  console.log(container);
}
