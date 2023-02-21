// Cria um array vazio para armazenar funções
const funcs = []

// Usa o loop for para criar 10 funções anônimas e adicioná-las ao array
// Cada função adicionada ao array imprime o valor de i
for (let i = 0; i < 10; i++) {
funcs.push(function() {
console.log(i)
})
}

// Chama a terceira função adicionada ao array, que imprime o valor de i quando i = 2
funcs[2]()

// Chama a nona função adicionada ao array, que imprime o valor de i quando i = 8
funcs[8]()

// Obs: mesmo após o loop for ter finalizado, as funções no array ainda "lembram" o valor de i e o valor impresso será sempre o valor final de i (no caso, 10)

/*
este código começa declarando uma variável chamada funcs que é uma array vazia. Em seguida, um loop for é usado para iterar de 0 a 9, e em cada iteração, uma função anônima é definida que simplesmente imprime o valor atual de i. Dentro do loop, a função é adicionada à array funcs usando o método push.

Após o loop, o código chama duas das funções adicionadas à array funcs. O resultado é que cada chamada da função irá imprimir o valor de i correspondente à iteração em que a função foi definida.

Por exemplo, a chamada funcs[2]() irá imprimir o número 2 (que é o valor de i na terceira iteração do loop), enquanto a chamada funcs[8]() irá imprimir o número 8 (que é o valor de i na nona iteração do loop).

Espero que isso tenha ajudado a entender o código!
*/