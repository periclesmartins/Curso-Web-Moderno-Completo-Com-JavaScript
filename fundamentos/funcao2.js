// Armazenando uma função em uma variável;
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) // Chamando a função e passando os argumentos 2 e 3.

// Armazenando uma função arrow em uma variável;
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3)) // Chamando a função e passando os argumentos 2 e 3.

// Retorno implícito;
const subtracao = (a, b) => a - b
console.log(subtracao(10, 5)) // Chamando a função e passando os argumentos 10 e 5.

const imprimir2 = a => console.log(a)
imprimir2('Legal Demais!') // Chamando a função e passando o argumento 'Legal Demais!'

/*
O código apresenta exemplos de como declarar e utilizar funções em JavaScript. Na primeira parte, a função imprimirSoma é declarada como uma variável que armazena uma função anônima, que é chamada passando-se dois argumentos (a e b) que serão somados e impressos no console.

Na segunda parte, a função soma é declarada como uma variável que armazena uma função arrow. A função é chamada passando-se dois argumentos (a e b) que serão somados e o resultado é impresso no console.

Na terceira parte, a função subtracao é declarada como uma variável que armazena uma função arrow de retorno implícito. A função é chamada passando-se dois argumentos (a e b) que serão subtraídos e o resultado é impresso no console.

Na quarta parte, a função imprimir2 é declarada como uma variável que armazena uma função arrow de um único argumento (a), que será impresso no console. A função é chamada passando-se o argumento 'Legal Demais!', que é impresso no console.
*/