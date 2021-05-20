"use strict";

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const mensaje = document.querySelector(".js-test");
  if (counter < 59) {
    mensaje.innerHTML = `he escrito hace ${counter}`;
  } else {
    mensaje.innerHTML = `he escrito hace 1 minuto`;
  }
};

setInterval(incrementAndShowCounter, 1000);
