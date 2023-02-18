// Definindo as variáveis peso1 e peso2 com valores de ponto flutuante (float)
const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

// Verificando se peso1 e peso2 são números inteiros usando o método Number.isInteger()
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

// Definindo as variáveis avaliacao1 e avaliacao2 com valores de ponto flutuante (float)
const avaliacao1 = 9.871
const avaliacao2 = 6.871

// Calculando o total da média ponderada, multiplicando as avaliações pelos seus respectivos pesos e somando-os
const total = avaliacao1 * peso1 + avaliacao2 * peso2

// Calculando a média dividindo o total pela soma dos pesos
const media = total / (peso1 + peso2)

// Imprimindo a média com 2 casas decimais
console.log(media.toFixed(2))

// Imprimindo a representação binária da média
console.log(media.toString(2))

// Imprimindo o tipo de dado da variável media
console.log(typeof media)

// Imprimindo o tipo de dado da função Number
console.log(typeof Number)
