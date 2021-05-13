"use strict";
//Ejercicio 1//
let array = [];
function get10Number() {
  for (let i = 0; i < 10; i++) {
    console.log(array.push(i));
  }
}
console.log(array);

get10Number();

/*const arr = [];
let num = 0;
function get100Numbers(){
    for(let i=0;i<100;i++){
        arr.push(num+1);
        console.log(arr[i]);
        num++;
    }
}
get100Numbers();*/

//Ejercio 2//

function get10Numbersreverse() {
  for (let i = 0; i < 10; i++) {
    console.log(array.reverse(i));
  }
}
get10Numbersreverse();

//Ejercicio 3//

const lostNumbers = [4, 8, 15, 16, 23, 42];
let parNumber = [];
let multiples3Numbers = [];
let number = [];

function bestLostNomber() {
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      parNumber.push(lostNumbers[i]);
    } else if (lostNumbers[i] % 3 === 0) {
      multiples3Numbers.push(lostNumbers[i]);
    }
  }
  console.log(parNumber);
}
