var readlineSync = require('readline-sync');
var nombre = readlineSync.question("Dime tu nombre: ");
var apellidos=readlineSync.question("Dime tu apellido: ");
console.log("El nombre es", nombre, "y el apellido es", apellidos);