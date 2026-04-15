let numero = 7;

function verificarNumero(numero) {
    switch (true) {
        case (numero % 2 === 0):
            console.log("Par");
            break;
        default:
            console.log("Ímpar");
            break;
    }
}

verificarNumero (numero)