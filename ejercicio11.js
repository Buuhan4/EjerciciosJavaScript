let readlineSync = require('readline-sync');
let num1 = readlineSync.question("Dime una frase/palabra: ")
let vocal="aeiouAEIOU";
let contador=0;

for (let i = 0; i < num1.length; i++) {
    let letra=num1[i]
    if (vocal.includes(letra)) {
        contador++;
    }
}
console.log("Hay un total de",contador,"vocales");