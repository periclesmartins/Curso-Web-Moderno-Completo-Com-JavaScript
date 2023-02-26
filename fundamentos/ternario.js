// Declaração da constante resultado com uma arrow function que recebe um parâmetro nota
// Se a nota for maior ou igual a 7, a expressão retorna 'Aprovado', senão retorna 'Reprovado'
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

// Chama a função resultado passando o valor 7.1 como argumento e exibe o resultado no console
console.log(resultado(7.1))

// Chama a função resultado passando o valor 6.7 como argumento e exibe o resultado no console
console.log(resultado(6.7))