class Circulo {
    constructor(radio) {
      this.radio = radio;
    }
    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
      }
    }
    let readlineSync = require('readline-sync');
    let num1 = readlineSync.question("Dime el radio: ");
    let circulito = new Circulo(num1);
    console.log("El área del círculo es: " + circulito.calcularArea());
