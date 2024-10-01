let readlineSync = require('readline-sync');
let num1 = parseFloat(readlineSync.question("Dime un numero: "));
if(num1==0){
   console.log("El numero es igual a 0") ;
}else{
    if(num1>10){
        console.log("El numero es mayor a 10");
    }else{
        console.log("El numero es menor a 10");
    }
}