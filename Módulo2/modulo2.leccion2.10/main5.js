"use script";
const button = document.querySelector(".js-button");

  //Ejercicio 6/
  function getBreedsImage() {
    fetch("https://dog.ceo/api/breeds/list")
      .then((breedsResponse) => breedsResponse.json())
      .then((breedsData) => {
        const breeds = breedsData.message;
        return fetch(`https://api.rand.fun/number/integer`);
      })
      .then((randomNumberResponse) => randomNumberResponse.json())
      .then(((randomNumberData) => {
        const number = randomNumberData.result
        return fetch( `https://dog.ceo/api/breed/${breeds[number]}/images/random`);
      })
      .then((imageResponse) => imageResponse.json())
      .then((imageData) => {
        const img = document.querySelector("img");
        img.src = imageData.message;
        img.alt = "Perro";
      })
  }

button.addEventListener("click", getBreedsImage);
