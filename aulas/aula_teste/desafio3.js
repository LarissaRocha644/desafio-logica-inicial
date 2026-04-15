function verificarAcesso(usuarios) {
    for(let i = 0; i < usuarios.length; i++){

        switch (true) {
            case (usuarios[i].idade < 0):
                console.log("Dados inválidos")
                break

            case (usuarios[i].idade < 18):
                console.log("Acesso negado: menor de idade")
                break

            case (!usuarios[i].carteira):
                console.log("Acesso negado: sem carteira")
                break

            default:
                console.log("Acesso permitido")
                break
        }
    }
}

verificarAcesso([
  { idade: 17, carteira: true },
  { idade: 25, carteira: false },
  { idade: 30, carteira: true }
])