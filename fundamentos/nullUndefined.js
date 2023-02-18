//Declaração de uma variável "valor" sem atribuir nenhum valor. Ela é undefined, ou seja, ainda não foi definida.
let valor //não inicializada
console.log(valor)
//valor" recebe o valor null, que indica ausência de valor.
valor = null
console.log(valor)
// console.log(valor.toString()) //Se a linha comentada for executada, ocorrerá um erro porque não é possível chamar o método "toString()" de um valor null ou undefined.

//Declaração de um objeto "produto" vazio. A propriedade "preco" não foi definida, então ela é undefined. A segunda linha imprime o objeto inteiro no console.
const produto = {}
console.log(produto.preco)
console.log(produto)
//A propriedade "preco" de "produto" é atribuída o valor 3.50. A linha seguinte imprime o objeto atualizado.
produto.preco = 3.50
console.log(produto)
//A propriedade "preco" de "produto" agora é undefined. É importante evitar atribuir undefined diretamente a uma variável, pois isso pode gerar bugs difíceis de detectar. A linha seguinte imprime um valor booleano que representa se a propriedade "preco" tem valor definido (true) ou não (false).
produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
delete produto.preco
console.log(produto)
//A propriedade "preco" é removida do objeto "produto" usando o operador "delete". A linha seguinte imprime o objeto atualizado sem a propriedade "preco".
produto.preco = null // sem preço!
console.log(produto)
//A propriedade "preco" de "produto" é definida como null. Isso indica que a propriedade existe, mas não tem valor definido. A linha seguinte imprime o objeto "produto" atualizado.