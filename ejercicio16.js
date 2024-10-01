let readlineSync = require('readline-sync');
let num1 = readlineSync.question("Dime un numero: ");
let num2 = readlineSync.question("Dime otro numero: ");
let num3 = readlineSync.question("Dime un ultimo numero: ");

if(num1==num2 && num2==num3){
    console.log("Todos los numeros son iguales")
}else{
    if(num1>num2 && num1>num3){
    console.log("El número mayor es",num1);
    }else if(num2>num1 && num2>num3){
    console.log("El número mayor es",num2);
    }else{
    console.log("El número mayor es",num3);
    }
}