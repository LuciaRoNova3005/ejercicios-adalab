'use strict';
//Ejercicio 1//
const button = document.querySelector (".alert");

function showAlert(button){
    console.log( button.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!")
}
button.addEventListener('click', showAlert);


//Ejercicio 2//
const button2 = document.querySelector (".js-input");
function Form (button2){
  console.log (button2.value = "Mi primer click, ¡ole yo y la mujer que me parió!")
}

button2.addEventListener('click', Form);

//Ejercicio 3"//
const paragraph = document.querySelector (".show")
const paragraph2 = document.querySelector (".par2")
 function mostrar () {
    if (paragraph2.classList.contains('hidden')) {
        (paragraph2.classList.remove('hidden'));
      }
      console.log (mostrar(paragraph2))
 }
 paragraph.addEventListener('mouseover', mostrar);