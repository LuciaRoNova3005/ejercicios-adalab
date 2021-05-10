'use strict';

//Ejercicio 1//
const adalaber1 = {};
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.profession = 'periodista';

console.log (("Mi nombres es ") + (adalaber1.name) + (", tengo ") + (adalaber1.age)+  (" años y soy ")+  (adalaber1.profession));

const adalaber2 = {};
adalaber2.name = 'naría';
adalaber2.age = 40;
adalaber2.profession = 'actriz';

console.log (("Mi nombres es ") + (adalaber2.name) + (", tengo ") + (adalaber2.age)+  (" años y soy ")+  (adalaber2.profession));

//Ejercicio 2//
const adalaber = {};
adalaber.name = 'Susana';
adalaber.age = 34;
adalaber.profession = 'periodista';
adalaber.run = distance => `Estoy corriendo una marathon de : ${distance} km`;

console.log (("Mi nombres es ") + (adalaber.name) + (", tengo ") + (adalaber.age)+  (" años y soy ")+  (adalaber.profession)+ (adalaber.run (50) ));

//Ejercicio 3//
const adalaber3 = {};
adalaber3.name = 'Susana';
adalaber3.age = 34;
adalaber3.profession = 'periodista';
adalaber3.showbio= function() {
  return 'Hola, me llamo ' + this.name + 'soy' + this.profession + 'tengo ' +this.age + 'años';
};

console.log(adalaber3.showbio());


// //Ejercicio 6//
// const bagPears = {};
//     bagPears.max = "8";
//     bagPears.min = "1";
//     bagPears.actual = "1";
//     bagPears.sacar = "3";
//     bagPears.sum = "3";
//     bagPears.initial = function (){
//         return this.actual;
//     }
//     bagPears.out = function (){
//         const out = this.actual -this.sacar;
//         return out;
//     }
//     //bargPears.add = function (){
//         const add = this.actual + this.sum;
//         return add;//
//     }
//     bagPears.submit = function (){
//      return this.initial;
//     }

//     console.log (bagPears.out())


    //Ejercicio 7//
    const job = "developer";

    const objeto = {};
   objeto.firstName = "maria";
   objeto.lastName= "la portuguesa";
    objeto.job= job;
    objeto.age= 35;

   
objeto.firstName = "LAura"
objeto.age += 1;
    console.log (objeto.age);



