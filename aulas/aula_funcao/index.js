function batalha() {
    let pontuacao = 1;

    for (let i = 0; i < 2; i++) {
        let vitoria = 50;
        let derrota = 5;

        pontuacao += (vitoria - derrota);
    }

    return pontuacao;
}
function scoregame(pontuacao) {
    let rank
    switch (true) {

        case (pontuacao <= 10):
            //console.log("Inicio")
            rank = "Ferro"
            break
        case ((pontuacao >= 11) && (pontuacao <= 20)):
            rank = "Bronze"
            break
        case ((pontuacao >= 21) && (pontuacao <= 50)):
            rank = "Prata"
            break
        case ((pontuacao >= 51) && (pontuacao <= 80)):
            rank = "Ouro"
            break
        case ((pontuacao >= 81) && (pontuacao <= 90)):
            rank = "Diamante"
            break
        case ((pontuacao >=91) && (pontuacao <= 100)):
            rank = "Lendário"
            break
        case (pontuacao >= 101):
            rank = "Imortal"
            break
        default:
            rank = "Game over"
            break
    }
    //console.log(rank)
    console.log("O Herói tem saldo de " + pontuacao + " e está no nível de " + rank);
}

const resultado = batalha();
scoregame(resultado);