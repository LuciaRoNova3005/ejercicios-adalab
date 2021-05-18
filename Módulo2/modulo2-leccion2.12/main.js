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

//Ejercicio 2//
const city = document.querySelector(".js-city");
const containerImg = document.querySelector(".js-container");

function addImage(url) {
  const images = document.createElement("img");
  containerImg.appendChild(images);
  images.src = url;
}

function selectCity(event) {
  if (event.target.value === "Madrid") {
    addImage(
      "https://www.institutfrancais.es/madrid/wp-content/uploads/sites/6/2019/09/banner-madrid-1920x1280.jpg"
    );
  } else if (event.currentTarget.value === "Paris") {
    addImage(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtXCu4U6rPKJbW__1b5XADM2haJ-0hE1eEnDrh0-0qgC9fw5Ow68KWvwTbc4S-N7nWijU&usqp=CAU"
    );
  }
}
city.addEventListener("change", selectCity);
