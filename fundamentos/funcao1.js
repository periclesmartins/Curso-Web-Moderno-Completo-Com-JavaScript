// Função sem retorno;

function imprimirSoma(a, b) {
    console.log(a * b)
}
imprimirSoma(30, 10) // Ao reescrever a função, ele executa o que pede para ser imprimido dentro do console.

// Função com retorno;

function soma(a, b = 0) {
    return a + b
}

console.log(soma(20, 20))
console.log(soma(2))
console.log(soma())
