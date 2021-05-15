//Ejercicio 3//
const buttonSearch = document.querySelector(".js-search");
const results = document.querySelector(".js-results");

function dataUser() {
  let nameUser = document.querySelector(".js-textSearch");
  let nameUservalue = nameUser.value;
  results.classList.remove("hidden");
  fetch("https://api.github.com/users/" + nameUser.value)
    .then((response) => response.json())
    .then((data) => {
      const nameResults = document.querySelector(".js-nameUser");
      nameResults.innerHTML = "Nombre " + data.login;
      const img3 = document.querySelector(".js-imgAvatar");
      img3.src = data.avatar_url;
      const numberRespos = document.querySelector(".js-numberRepos");
      numberRespos.innerHTML = "Número de respositorios " + data.public_repos;
    });
}

buttonSearch.addEventListener("click", dataUser);
