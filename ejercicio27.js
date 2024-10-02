let readlineSync = require('readline-sync');
let producto1 = readlineSync.question("Precio del primer producto:");
let producto2 = readlineSync.question("Precio del segundo producto:");
let producto3 = readlineSync.question("Precio del tercer producto:");
let producto4 = readlineSync.question("Precio del cuarto producto:");
if (producto1>=100){
    producto1=producto1*0.90;
}else{
    console.log("El primer producto no tiene descuento");
}
if (producto2>=100){
    producto2=producto2*0.90;
}else{
    console.log("El segundo producto no tiene descuento");
}
if (producto3>=100){
    producto3=producto3*0.90;
}else{
    console.log("El tercer producto no tiene descuento");
}
if (producto4>=100){
    producto4=producto4*0.90;
}else{
    console.log("El cuarto producto no tiene descuento");
}
console.log("Primer Producto:",producto1,"€");
console.log("Segundo Producto:",producto2,"€");
console.log("Tercer Producto:",producto3,"€");
console.log("Cuarto Producto:",producto4,"€");