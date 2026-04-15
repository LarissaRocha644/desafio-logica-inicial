function verificarAcesso(idade, temCarteira) {
    switch (true) {
        case (idade < 0):
            console.log("Dados inválidos")
            break
        case (idade < 18):
            console.log("Acesso negado: menor de idade")
            break
        case (!temCarteira):
            console.log("Acesso negado: sem carteira")
            break
        default:
            console.log("Acesso permitido")
            break

    }
}
verificarAcesso(25, true)