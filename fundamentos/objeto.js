const prod1 = {} // cria um objeto vazio chamado prod1
prod1.nome = 'Celular Ultra Mega' // adiciona uma propriedade nome ao objeto prod1 com o valor 'Celular Ultra Mega'
prod1.preco = 4999.90 // adiciona uma propriedade preco ao objeto prod1 com o valor 4999.90
prod1['Desconto Legal'] = 0.40 // adiciona uma propriedade com espaço ao objeto prod1, o valor 0.40
console.log(prod1) // imprime o objeto prod1 no console

const prod2 = { // cria um objeto chamado prod2 com as propriedades nome e preco
    nome: 'Camisa Polo',
    preco: 80.90,
    obj: { // adiciona um objeto aninhado ao objeto prod2
        caneca: 'Duas canecas',
        obj: { // adiciona outro objeto aninhado ao objeto obj de prod2
            taca: 'Duas tacas'
        }
    }
}

console.log(prod2) // imprime o objeto prod2 no console

//Em resumo, o código cria dois objetos (prod1 e prod2) em JavaScript usando notação de ponto e colchete para adicionar propriedades e objetos aninhados. Ele também usa o console.log para exibir os objetos na saída do console.