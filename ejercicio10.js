let readlineSync = require('readline-sync');
let num1 = parseFloat(readlineSync.question("Dime un numero: "));
let resultado=0;
for (let i=1;i<=10;i++) {
    resultado=i*num1
    console.log(num1,"multiplicado por",i,"es",resultado);
}