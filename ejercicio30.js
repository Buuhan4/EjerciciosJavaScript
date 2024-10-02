let asientos = Array.from({ length: 4 }, () => Array(4));
for (let i = 0; i < 4; i++) {
    for (let z = 0; z < 4; z++) {
        asientos[i][z] = false;
    }
}
let readlineSync = require('readline-sync');
let opcion=0;
while(opcion!=4){
console.log("Selecciona una opcion");
opcion = readlineSync.question("1.Reservar 2.Cancelar reserva 3.Mostrar asientos 4.Salir de la aplicación: ");
    switch (opcion) {
        case '1':
            reservar();
            break;
    
        case '2':
            cancelar();
            break;
        
        case '3':
            verAsientos();
            break;
        
        case '4':
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Pon un número del 1 al 4");
            break;
    }
}



function reservar(){
let readlineSync = require('readline-sync');
let fila = readlineSync.question("Selecciona la fila")-1;
let columna = readlineSync.question("Selecciona la columna")-1;
if (asientos[fila][columna]) {
    console.log("El asiento está ocupado");
} else {
    asientos[fila][columna] = true;
    console.log("Compra realizada");
}
}
function cancelar(){
let readlineSync = require('readline-sync');
let fila = readlineSync.question("Selecciona la fila")-1;
let columna = readlineSync.question("Selecciona la columna")-1;

if (asientos[fila][columna] === true) {
    asientos[fila][columna] = false;
    console.log("Compra cancelada");
} else {
    console.log("Este asiento no está comprado");
}

}

function verAsientos(){
asientosTeatro=Array.from({ length: 4 }, () => Array(4));
for (let w = 0; w < 4; w++) {
    for (let z = 0; z < 4; z++) {
        if (asientos[w][z] === false) {
                asientosTeatro[w][z] = "Vacio";
        }
        if (asientos[w][z] === true) {
                asientosTeatro[w][z] = "Ocupado";
        }
    }
}

    console.log(asientosTeatro)
}

