// Função sem retorno;
function imprimirSoma(a, b) {
    console.log(a * b) // Imprime a multiplicação de a e b no console.
}
imprimirSoma(30, 10) // Chama a função imprimirSoma e passa os valores 30 e 10 como argumentos para a e b, respectivamente.

// Função com retorno;
function soma(a, b = 0) { // Define uma função chamada soma, que recebe dois parâmetros, onde o segundo é opcional e assume o valor padrão 0 se não for informado.
    return a + b // Retorna a soma de a e b.
}

console.log(soma(20, 20)) // Chama a função soma e passa os valores 20 e 20 como argumentos para a e b, respectivamente, e imprime o resultado da soma no console.
console.log(soma(2)) // Chama a função soma e passa o valor 2 como argumento para a, e utiliza o valor padrão 0 para b, e imprime o resultado da soma no console.
console.log(soma()) // Chama a função soma sem passar argumentos, e utiliza o valor padrão 0 para ambos os parâmetros, e imprime o resultado da soma no console.
