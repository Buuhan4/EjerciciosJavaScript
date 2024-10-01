class Tarea {
    constructor(nombre, completada, tareas) {
        this.nombre = nombre;
        this.completada = completada;

    }

}
let tareas=[];
function agregarTarea() {
    let readlineSync = require('readline-sync');
    let nombre = readlineSync.question("Dime una tarea: ");
    let completada = readlineSync.question("¿Esta la tarea completada?");
    if(completada.toLowerCase() === "si"){
        completada=true;
    }else{
        completada=false;
    }
    tareas.push(new Tarea(nombre,completada));
}
function mostrarTarea() {
    if (tareas.length == 0) {
        console.log("No hay tareas disponibles.");
        return;
    } else {
        console.log("Tareas disponibles:", tareas);
    }
}
function completarTarea() {
    let readlineSync = require('readline-sync');
    let nombre = readlineSync.question("¿Nombre de la tarea?");
    for(i=0;i<tareas.length;i++){
        if (tareas[i].nombre == nombre) {
            tareas[i].completada = true;    
            return;
        }
        } 
    }
    function menu() {
        let readlineSync = require('readline-sync');
        let opcion;
        do {
            console.log("\nMenú:");
            console.log("1. Agregar tarea");
            console.log("2. Mostrar tareas");
            console.log("3. Completar tarea");
            console.log("0. Salir");
    
            opcion = readlineSync.question("Elige una opción: ");
            switch (opcion) {
                case '1':
                    agregarTarea();
                    break;
                case '2':
                    mostrarTarea();
                    break;
                case '3':
                    completarTarea();
                    break;
                case '0':
                    break;
                default:
                    console.log("Elige una opcion valida");
            }
        } while (opcion!=0);
    }
menu();