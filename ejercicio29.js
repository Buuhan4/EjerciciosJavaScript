let numeros = [];
while (numeros.length < 5) {
    let numeroAleatorio = Math.floor(Math.random() * 20) + 1;
    if (!numeros.includes(numeroAleatorio)) {
        numeros.push(numeroAleatorio);
    }
}
console.log(numeros);