let numero1 = 0;
let numero2 = 1;
let siguienteTermino;
for (let i = 1; i <= 10; i++) {
    siguienteTermino = numero1 + numero2;
    console.log(siguienteTermino);
    numero1 = numero2;
    numero2 = siguienteTermino;
}
