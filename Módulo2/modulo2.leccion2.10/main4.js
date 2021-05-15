//Ejercicio 4//

const button = document.querySelector(".js-button");

function getOrganization() {
  const text = document.querySelector(".js-text");
  const textValue = text.value;
  fetch("https://api.github.com/orgs/" + textValue)
    .then((organationsInformatation) => organationsInformatation.json())
    .then((organationsData) => {
      const urlOrganitation = organationsData.repos_url;
      return fetch(urlOrganitation);
    })
    .then((urlPetition) => urlPetition.json())
    .then((urlPetitionData) => {
      const list = document.querySelector(".list");
      for (let i = 0; i < urlPetitionData.length; i++) {
        list.innerHTML += `<li> ${urlPetitionData[i].name}`;
      }
    });
}
button.addEventListener("click", getOrganization);
