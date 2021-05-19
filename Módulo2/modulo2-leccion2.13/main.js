"use strict";
const marks = [5, 4, 6, 7, 9];
const inflatedMarks = marks.map((item) => item + 1);
console.log(inflatedMarks);
//Ejercio 2//
const names = ["María", "Lucía", "Susana", "Rocío", "Inmaculada"];
const hello = names.map((item) => `Hola ${item}`);
console.log(hello);
//Ejercicio 3//
const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];

const usersWelcolme = users.map((user) => {
  if (user.isPremium === true) {
    return `Hola ${user.name}. Gracias por confiar en nosotros.`;
  } else {
    return `Hola ${user.name}.`;
  }
});

console.log(usersWelcolme);

//Ejercicio 4//
const premium = users.filter((users) => users.isPremium === true);
console.log(premium);
//Ejercicio 5//

const pins = [2389, 2384, 2837, 5232, 8998];

const enter = pins.filter((pins) => pins % 2 === 0);
console.log(enter);
