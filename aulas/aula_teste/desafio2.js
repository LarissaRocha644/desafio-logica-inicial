function verificaIdade(idade){
    if (idade < 0){
        console.log("Idade inválida")
    }
    else if (idade < 18){
        console.log("Não pode dirigir")
    }
    else {
        console.log("Pode dirigir")
    }
}

verificaIdade(25)