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

const passuser = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];
const numberPin = passuser.filter((passuser) => passuser.pin % 2 === 0);
console.log(numberPin);

//Ejercicio 7//

const times = [56, 9, 45, 28, 35];
const media = times.reduce((acc, total) => acc + total) / times.length;
console.log(media);
//Ejercicio 8//

//Ejericio 10//
const users2 = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];
const userPin = users2.find((users2) => users2.pin === 5232);
console.log(userPin);

const userIndex = users2.findIndex((users2) => users2.pin === 5232);
console.log(userIndex);
users.splice(3, 1);
console.log(users);
