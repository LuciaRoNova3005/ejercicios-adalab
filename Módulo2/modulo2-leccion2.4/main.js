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
            return " True";
        }
        else
        {
            return " False";
        }
}

const number = par (5);
console.log (number)

 //Ejercio 5// 
 function getEl (a){
 return document.querySelector(a);
 
}

 const clase = getEl('.btn');
 console.log (clase)
 
 //Ejercicio 6//

function  error (a) {
    if(a === null )
    {
        return "No existe ningún elemento con clase, id o tag llamado"
    } 
    else{
        return "El elemento esta correcto"
    }
}
console.log (error (clase))

    
 


 //Ejercicio 7//
function convertirNumero (a){
    return parseInt(a)
}
const numero = convertirNumero (clase ) + par (clase);
console.log (numero)

 //Ejercicio 8//
// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"
 


 //Ejercicio Dayana//
 const resultado = document.querySelector ("js-text");
 function iva (precio){
 const iva2 = precio * 0.21;
 const totalIva = price + iva2;

 resultado.innerHTML = `el precio es: ${precio} el iva es: ${iva2} el total a pagar es ${totaliva}`;
}


 