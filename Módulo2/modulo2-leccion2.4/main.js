'use strict';
function mult(a,b){
    return a * b;
}
const result = mult(4,3);
console.log (result);

 //Ejercio 2//
function media (a,b,c,d){
     return ((a+b+c+d)/2);
 }
 const mediaResul = media (4,4,4,4);
 console.log (mediaResul);
 //Ejercio 3//
 function Iva(a){
     return 'Precio sin Iva= '+ a + ' Iva 2.1 ' + 'Total ' + ((a*21/100) + a)
 }
const price= Iva (10);
console.log (price)

 //Ejercio 4//
 function par(a){
    if ( a % 2 == 0 )
        {
            return "True";
        }
        else
        {
            return "False";
        }
}

const number = par (5);
console.log (number)

 //Ejercio 5// 
 function getEl (a){
 return document.querySelector(a).innerHTML;
 
}

 const clase = getEl('.btn');
 console.log (clase)

 //Ejercicio 7//
function convertirNumero (a){
    return parseInt(a)
}
const numero = convertirNumero (clase) + par (clase);
console.log (numero)
 //Ejercicio 8//
 
 