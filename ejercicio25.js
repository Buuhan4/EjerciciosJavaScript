let readlineSync = require('readline-sync');
let numeroJugador = readlineSync.question("Dime un numero del 1 al 100: ");
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos=1;
let bucle=true;
while(bucle){
    if(numeroAleatorio==numeroJugador){
    console.log("Has acertado el numero",numeroAleatorio,"en",intentos,"intentos");
    bucle=false;
    }else{
        if(numeroAleatorio<numeroJugador){
            console.log("El numero es menor");
        }else{
            console.log("El numero es mayor");
        }
        numeroJugador = readlineSync.question("Dime un número del 1 al 100: ");
        intentos++;
    }
}

