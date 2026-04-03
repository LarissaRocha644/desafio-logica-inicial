let nome = "Eve"
let quantidadeXP = 5001
let nivel = ""

switch (true) {
    case (quantidadeXP <= 1000):
        nivel = "Ferro"
        break
    case ((quantidadeXP >= 1001) && (quantidadeXP <= 2000)):
        nivel = "Bronze"
        break
    case ((quantidadeXP >= 2001) && (quantidadeXP <= 5000)):
        nivel = "Prata"
        break
    case ((quantidadeXP >= 5001) && (quantidadeXP <= 7000)):
        nivel = "Ouro"
        break
    case ((quantidadeXP >= 7001) && (quantidadeXP <= 8000)):
        nivel = "Platina"
        break
    case ((quantidadeXP >= 8001) && (quantidadeXP <= 9000)):
        nivel = "Ascendente"
        break
    case ((quantidadeXP >= 9001) && (quantidadeXP <= 10000)):
        nivel = "Imortal"
        break
    default:
        nivel = "Radiante"
}

/*if (quantidadeXP <= 1000) {
    nivel = "Ferro"
} else if ((quantidadeXP >= 1001) && (quantidadeXP <= 2000)) {
    nivel = "Bronze"
} else if ((quantidadeXP >= 2001) && (quantidadeXP <= 5000)) {
    nivel = "Prata"
} else if ((quantidadeXP >= 5001) && (quantidadeXP <= 7000)) {
    nivel = "Ouro"
} else if ((quantidadeXP >= 7001) && (quantidadeXP <= 8000)) {
    nivel = "Platina"
} else if ((quantidadeXP >= 8001) && (quantidadeXP <= 9000)) {
    nivel = "Ascendente"
}  else if ((quantidadeXP >= 9001) && (quantidadeXP <= 10000)) {
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}*/

console.log("O Herói de nome " + nome + " está no nível de "+ nivel)