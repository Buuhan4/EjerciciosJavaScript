let readlineSync = require('readline-sync');
let cumpleanios = readlineSync.question("Introduce tu fecha de nacimiento (DD/MM/AAAA):");
let fechaCompleta = cumpleanios.split('/');
let diaNacimiento = parseInt(fechaCompleta[0]);
let mesNacimiento = parseInt(fechaCompleta[1])-1;
let anioNacimiento = parseInt(fechaCompleta[2]);
let fechaNacimiento = new Date(anioNacimiento, mesNacimiento, diaNacimiento);
let fechaActual = new Date();
let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
if (fechaActual.getMonth() < mesNacimiento || fechaActual.getMonth() == mesNacimiento && fechaActual.getDate() < diaNacimiento)
    {
    edad=edad-1;
    }
console.log("Tu edad es",edad);