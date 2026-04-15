const notas = [10, 7, null, 8, "9", 6];

// função principal
function analisarNotas(lista) {
  let soma = 0; // vai somar as notas
  let quantidade = 0; // contar quantas notas válidas

  for (let i = 0; i < lista.length; i++) {
    let nota = lista[i];

    // verifica se é número válido
    if (typeof nota === "number" && !isNaN(nota)) {
      soma += nota; // soma a nota
      quantidade++; // aumenta contador
    }
  }

  // calcula média
  let media = soma / quantidade;

  // chama função para definir status
  let status = definirStatus(media);

  console.log(
    "O aluno teve média " +
      media.toFixed(2) +
      ", com " +
      quantidade +
      " notas válidas, e está " +
      status
  );
}

// função separada (nível mais profissional)
function definirStatus(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

// execução
analisarNotas(notas);