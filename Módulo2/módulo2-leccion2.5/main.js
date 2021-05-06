'use strict';
//Ejercicio 1//
const button = document.querySelector (".alert");

function showAlert(button){
    console.log( button.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!")
}
button.addEventListener('click', showAlert);




