// A função rand recebe um objeto como parâmetro com as propriedades min e max
function rand({min = 0, max = 1000}) {
    // A constante valor recebe um número aleatório entre min e max
    const valor = Math.random() * (max - min) + min
    // O valor é arredondado para baixo e retornado
    return Math.floor(valor)
}

// O objeto obj é definido com as propriedades max e min
const obj = {max: 50, min: 40}
// A função rand é chamada passando o objeto obj como parâmetro
console.log(rand(obj))
// A função rand é chamada passando um objeto com apenas a propriedade min definida
console.log(rand({min: 955}))
// A função rand é chamada passando um objeto vazio, então as propriedades min e max serão iguais aos valores padrão da função
console.log(rand({}))
// A função rand é chamada sem parâmetros, então a desestruturação não pode ser feita e os valores padrão da função serão utilizados
console.log(rand())
