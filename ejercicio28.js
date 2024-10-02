let readlineSync = require('readline-sync');
let calificacion1 = readlineSync.question("Nota de clase(10%)");
let calificacion2 = readlineSync.question("Nota de tareas(30%)");
let calificacion3 = readlineSync.question("Nota de examen práctico(40%)");
let calificacion4 = readlineSync.question("Nota de examen teórico(30%)");
let nota1=calificacion1*0.10;
let nota2=calificacion2*0.30;
let nota3=calificacion3*0.40;
let nota4=calificacion4*0.30;
let notafinal=nota1+nota2+nota3+nota4;
if(notafinal<0 || notafinal>10){
    console.log("Has puesto alguna nota mal");
}else{
    if(notafinal>=0 && notafinal<5){
        console.log("El alumno suspendió con un",notafinal);
    }else{
        console.log("El alumno aprobó con un",notafinal);
    }
}

