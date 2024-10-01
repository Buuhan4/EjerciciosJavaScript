let readlineSync = require('readline-sync');
let num1 = readlineSync.question("Dime una frase: ");
let palabras = num1.split(/\s+/); 
let numeroPalabras = palabras.length;
console.log("El numero de palabras es",numeroPalabras);