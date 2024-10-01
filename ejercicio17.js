let readlineSync = require('readline-sync');
let num1 = readlineSync.question("Dime un numero: ");
let booleana=true;
for (let i = 2; i < num1; i++) {
    if (num1 % i == 0) {
        booleana = false;
        break;
    }
}
if(booleana){
    console.log("El numero",num1,"es primo")
}else{
    console.log("El numero",num1,"no es primo")
}
