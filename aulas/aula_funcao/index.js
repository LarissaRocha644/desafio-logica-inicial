function batalha() {
    let pontuacao = 1;

    for (let i = 0; i < 2; i++) {
        let vitoria = 50;
        let derrota = 5;

        pontuacao += (vitoria - derrota);
    }

    return pontuacao;
}
function vitoria(pontuacao) {
    let hank
    switch (true) {

        case (pontuacao <= 10):
            //console.log("Inicio")
            hank = "Ferro"
            break
        case ((pontuacao >= 11) && (pontuacao <= 20)):
            hank = "Bronze"
            break
        case ((pontuacao >= 21) && (pontuacao <= 50)):
            hank = "Prata"
            break
        case ((pontuacao >= 51) && (pontuacao <= 80)):
            hank = "Ouro"
            break
        case ((pontuacao >= 81) && (pontuacao <= 90)):
            hank = "Diamante"
            break
        case ((pontuacao >=91) && (pontuacao <= 100)):
            hank = "Lendário"
            break
        case (pontuacao >= 101):
            hank = "Imortal"
            break
        default:
            hank = "Game over"
            break
    }
    //console.log(hank)
    console.log("O Herói tem saldo de " + pontuacao + " e está no nível de " + hank);
}

const resultado = batalha();
vitoria(resultado);