'use strict';

//const studentName = "Sofía";
const studentName = document.querySelector('.js-name').innerHTML;

const nombre = document.querySelector ('.js-name');

nombre.innerHTML = studentName;


const lengthElement = document.querySelector ('.js-length');

console.log(lengthElement);

lengthElement.innerHTML = ' y la longitud es ' + studentName.length;

lengthElement.innerHTML = ` y la longitud es ${studentName.length}`;


const contenName = nombre.innerHTML;
console.log(contenName);
//const span2 = document.querySelector ('js-span2')

//console.log(nombre.innerHTML + ' esta compuesto por ' +  contenName.length + ' caracteres');