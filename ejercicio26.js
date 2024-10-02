class Libro {
    constructor(titulo, autor, anio) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
    }

    mostrarInformacion() {
        console.log("Título:", this.titulo, "Autor:", this.autor, "Año:", this.anio);
    }
}

class Biblioteca {
    constructor() {
        this.guardarLibros = [];
    }

    anadirLibro(titulo, autor, anio) {
        let nuevoLibro = new Libro(titulo, autor, anio);
        this.guardarLibros.push(nuevoLibro);
        console.log("El libro", titulo, "ha sido añadido a la biblioteca.");
    }

    eliminarLibro(tituloEliminar) {
        for (let i = 0; i < this.guardarLibros.length; i++) {
         if (this.guardarLibros[i].titulo === tituloEliminar) {
             this.guardarLibros.splice(i, 1);
             console.log("El libro ha sido eliminado");
             break;
         }
     }
    }

    mostrarBiblioteca() {
        if (this.guardarLibros.length === 0) {
            console.log("La biblioteca está vacía.");
        } else {
            console.log("Libros en la biblioteca:");
            for (let i = 0; i < this.guardarLibros.length; i++) {
                this.guardarLibros[i].mostrarInformacion();
            }
        }
    }
}

let readlineSync = require('readline-sync');
let biblioteca = new Biblioteca();
let continuar = true;

while (continuar) {
    console.log("\n¿Qué te gustaría hacer?");
    console.log("1. Añadir un libro");
    console.log("2. Eliminar un libro");
    console.log("3. Mostrar la biblioteca");
    console.log("4. Salir");

    let opcion = readlineSync.question("Selecciona una opción (1-4): ");

    switch (opcion) {
        case '1':
            let titulo = readlineSync.question("Introduce el título del libro: ");
            let autor = readlineSync.question("Introduce el autor del libro: ");
            let anio = readlineSync.question("Introduce el año de publicación: ");
            biblioteca.anadirLibro(titulo, autor, anio);
            break;

        case '2':
            let tituloEliminar = readlineSync.question("Introduce el título del libro que deseas eliminar: ");
            biblioteca.eliminarLibro(tituloEliminar);
            break;

        case '3':
            biblioteca.mostrarBiblioteca();
            break;

        case '4':
            console.log("Saliendo del programa...");
            continuar = false;
            break;

        default:
            console.log("Opción no válida. Por favor, elige una opción entre 1 y 4.");
    }
}
