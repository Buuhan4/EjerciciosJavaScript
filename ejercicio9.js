let readlineSync = require('readline-sync');
let num1 = parseFloat(readlineSync.question("Dime un numero: "));
let resultado=1;
let contador=num1;
while(contador>0){
resultado=resultado*contador;
contador=contador-1
}
console.log("El factorial de",num1,"es",resultado);