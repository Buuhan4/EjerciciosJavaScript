let readlineSync = require('readline-sync');
let num1 = readlineSync.question("Dime una frase: ");
let cadena = "";
for (let i = num1.length - 1; i >= 0; i--) {
    cadena=cadena+num1[i];
}
console.log(cadena);