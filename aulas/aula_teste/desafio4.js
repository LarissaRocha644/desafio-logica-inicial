/* getShoppingList() → pegar a lista
* createShoppingList() → criar a lista
* updateShoppingList() → atualizar
* deleteShoppingList() → deletar
const produtos = [
  { nome: "Arroz", preco: 25 },
  { nome: "Feijão", preco: 10 },
  { nome: "Carne", preco: 50 },
  { nome: "Macarrão", preco: 8 },
  { nome: "Leite", preco: 6 }
];*/

const lista = [
  { nome: "Arroz", preco: 25 },
  { nome: "Feijão", preco: 10 },
  { nome: "Carne", preco: 50 },
  { nome: "Macarrão", preco: 8 },
  { nome: "Leite", preco: 6 }
]
function getShoppingList(lista){
    let resultado = []

    for (let i = 0; i < lista.length; i++) {
        resultado.push(`${lista[i].nome} - ${lista[i].preco}`)
    }

    return resultado
}

//console.log(getShoppingList(lista))

function createShoppingList(lista, novoProduto){
    lista.push(novoProduto)
    return lista
}
//createShoppingList(lista, { nome: "Ovos", preco: 12 })

//console.log(getShoppingList(lista))

function updateShoppingList(lista, nome, novoPreco){
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].nome === nome) {
            lista[i].preco = novoPreco
        }
    }
    return lista
}
//updateShoppingList(lista, "Arroz", 30)

//console.log(getShoppingList(lista))

function deleteShoppingList(lista, nome){
    let novaLista = []

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].nome !== nome) {
            novaLista.push(lista[i])
        }
    }

    return novaLista
}
//const listaAtualizada = deleteShoppingList(lista, "Carne")

//console.log(getShoppingList(lista))



createShoppingList(lista, { nome: "Ovos", preco: 12 })

updateShoppingList(lista, "Arroz", 30)

const novaLista = deleteShoppingList(lista, "Feijão")

console.log(getShoppingList(novaLista))