// Declaração da variável a
let a = 3

// Declaração da variável b com escopo global
global.b = 123

// Declaração das variáveis c, d e e com o objeto this
this.c = 456
this.d = false
this.e = 'teste'

// Exibe os valores das variáveis a, b, c e o valor de c a partir do objeto module.exports
console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)

// Verifica se o objeto module.exports é estritamente igual ao objeto this
console.log(module.exports === this)

// Exibe o conteúdo do objeto module.exports
console.log(module.exports)

// Criação de uma variável sem declarar com var ou let, o que pode causar erros de escopo
abc = 3
console.log(global.abc)

// Atribuição de um objeto com as propriedades e, f e g ao objeto module.exports
// module.exports = { e: 456, f: false, g: 'teste' }