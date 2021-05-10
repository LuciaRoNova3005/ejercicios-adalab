'use strict';
//Ejercicio 1//
const movies = ['terminator', 'la vida es bella', 'sharknado'];
movies [3] = "Froozen";

console.log (movies)


//Ejercicio 2//



for (let i = 1; i < 11;i++){
    console.log ('Voy por la vuelta' + i);
}

//Ejercicio 3//
let acc = 0

// numero de vecs * 2 es i//
for (let i = 0; i < 20 ; i+=2 ){
    console.log('El resultado es:' + acc + i);
 }
 // numero de vecs * 3 es i//
 //Ejercicio 4//
  const yearmoon = 2017
  for (let i= 0; i < 45; i+=3 )
  {
 console.log (yearmoon + i);
  }


  //Ejericio 5//
  const numbers = [2, 3, 7, 8, 2,8, 15];
  let elementnumbers = 0;
  let suma = 0;
  let media = 0;


for (let i = 0; i < numbers.length; i++) {
  suma += numbers[i];
  elementnumbers = i +1;
  media = suma/elementnumbers;
}

console.log ( media );








