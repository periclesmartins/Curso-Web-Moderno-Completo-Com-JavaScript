// Define uma função 'rand' que recebe um array como argumento
function rand([min = 0, max = 1000]) {
    // Verifica se o valor mínimo é maior do que o valor máximo
    // Se for, troca os valores de posição usando destructuring assignment
    if (min > max) [min, max] = [max, min]
    // Calcula um número aleatório entre os valores mínimo e máximo
    const valor = Math.random() * (max - min) + min
    // Retorna o número arredondado para baixo
    return Math.floor(valor)
}

// Chama a função 'rand' passando um array com os valores 50 e 40
console.log(rand([50, 40]))

// Chama a função 'rand' passando um array com o valor 992
console.log(rand([992]))

// Chama a função 'rand' passando um array com o valor 10 e um valor undefined para 'min'
console.log(rand([, 10]))

// Chama a função 'rand' passando um array vazio
console.log(rand([]))

// Chama a função 'rand' sem passar nenhum argumento, o que resultará em um erro
console.log(rand())
