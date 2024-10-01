let readlineSync = require('readline-sync');
let numeroValido=false;
while(!numeroValido){
    num1 = readlineSync.question("Dime la calificación del alumno: ");
    if(num1<0 || num1>100){
        console.log("Escribe una calificacion real")
    }else{
        if(num1>=0 && num1<=49){
        console.log("El alumno ha suspendido")
        numeroValido=true;
        }else{
        console.log("El alumno ha aprobado")
        numeroValido=true;
        }
    }
}