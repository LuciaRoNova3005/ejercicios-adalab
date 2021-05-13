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

//Ejercio 3//

const lostNumbers = [4, 8, 15, 16, 23, 42];
let ParNumber = [];

for (let i = 0; i < lostNumbers.length; i++) {
  if (i % 2 == 0) {
    let ParNumber = [i];
    console.log(ParNumber);
  }
}
