let numeros = [33, 8, 42, 77, 52, 4, 64];

for (let i = 0; i < numeros.length; i++) {
    for (let r = 0; r < numeros.length; r++) {
        if (numeros[r] > numeros[r + 1]) {
            let ordenar = numeros[r];
            numeros[r] = numeros[r + 1];
            numeros[r + 1] = ordenar;
        }
    }
}

console.log(numeros);