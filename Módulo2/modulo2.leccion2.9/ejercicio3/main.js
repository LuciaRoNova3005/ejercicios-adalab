"use strict";
//Ejercicio 3//

const lostNumbers = [4, 8, 15, 16, 23, 42];
let parNumber = [];
let multiples3Numbers = [];

function bestLostNomber() {
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      parNumber.push(lostNumbers[i]);
    } else if (lostNumbers[i] % 3 === 0) {
      multiples3Numbers.push(lostNumbers[i]);
    }
  }
}

bestLostNomber();
let numberResult = parNumber.concat(multiples3Numbers);
console.log(numberResult);
