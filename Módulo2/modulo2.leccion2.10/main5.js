"use script";
const button = document.querySelector(".js-button");
const text = document.querySelector(".js-parraf");
const randonNumber = getRandomNumber(95);
console.log(randonNumber);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//Ejercicio 6/
function getBreedsImage() {
  fetch("https://dog.ceo/api/breeds/list")
    .then((breedsResponse) => breedsResponse.json())
    .then((breedsData) => {
      const breeds = breedsData.message;

      console.log(breedsData.message[randonNumber]);
      for (const randobreed in breeds) {
        n;
        text.innerHTML += ``;
      }
    });

  // fetch("https://api.rand.fun/number/integer")
  //   .then((responseNumber) => responseNumber.json())
  //   .then((data) => {
  //     i = data.result;
  //     console.log(data.result);
  //   });
}
//     .then((randomNumberResponse) => randomNumberResponse.json())
//     .then(((randomNumberData) => {
//       const number = randomNumberData.result
//       return fetch( `https://dog.ceo/api/breed/${breeds[number]}/images/random`);
//     })
//     .then((imageResponse) => imageResponse.json())
//     .then((imageData) => {
//       const img = document.querySelector("img");
//       img.src = imageData.message;
//       img.alt = "Perro";
//     })
// }

button.addEventListener("click", getBreedsImage);
