let readlineSync = require('readline-sync');
let longitud = readlineSync.question("Dime la longitud: ");
let longitudContraseña=generarContrasena(longitud);
console.log("Tu contraseña es",longitudContraseña);
function generarContrasena(longitud) {
let letras= "abcdefghijklmnopkrstuvwxyzABCDEFGHIJKLMNOPKRSTUVWXYZ1234567890.,_/%$";
generarPassword ="";
for (let i = 0; i < longitud; i++) {
    let aleatorio = Math.floor(Math.random() * letras.length);
    generarPassword=generarPassword+letras[aleatorio];
    }
    return generarPassword;
}