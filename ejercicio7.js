let readlineSync = require('readline-sync');
let num1 = parseFloat(readlineSync.question("Dime un numero: "));
if(num1%2==0){
    console.log("El numero es par") ;
}else{
    console.log("El numero es impar") ;
}