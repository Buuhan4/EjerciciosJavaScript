let readlineSync = require('readline-sync');
let num1 = parseFloat(readlineSync.question("Dime un numero: "));
let num2 = parseFloat(readlineSync.question("Dime otro numero: "));
let eleccion = readlineSync.question("Que quieres hacer '* - + /' :");

switch (eleccion) {
    case '-':
        let resultado = num1 - num2;
        console.log("La resta es", resultado);
        break;
    case '+':
        let resultado2 = num1 + num2;
        console.log("La suma es", resultado2);
        break;
    case '*':
        let resultado3 = num1 * num2;
        console.log("La multiplicación es", resultado3);
        break;
    case '/':
        let resultado4 = num1 / num2;
        console.log("La división es", resultado4);
        break;
    default:
        console.log("Operación no válida");
        break;
}
