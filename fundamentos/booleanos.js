let isAtivo = false // Atribui o valor booleano "false" à variável "isAtivo"
console.log(isAtivo) // Imprime o valor atual de "isAtivo"

isAtivo = true // Atribui o valor booleano "true" à variável "isAtivo"
console.log(isAtivo) // Imprime o valor atual de "isAtivo"

isAtivo = 1 // Atribui o valor numérico "1" à variável "isAtivo"
console.log(!!isAtivo) // Usa o operador lógico NOT duplo (!!isAtivo) para imprimir o valor booleano correspondente a "isAtivo"
//Os verdadeiros;
console.log('os verdadeiros...') // Imprime uma mensagem indicando que serão listados valores verdadeiros
console.log(!!3) // Imprime o valor booleano correspondente a "3"
console.log(!!-1) // Imprime o valor booleano correspondente a "-1"
console.log(!!' ') // Imprime o valor booleano correspondente a uma string com um espaço em branco
console.log(!![]) // Imprime o valor booleano correspondente a um array vazio
console.log(!!{}) // Imprime o valor booleano correspondente a um objeto vazio
console.log(!!Infinity) // Imprime o valor booleano correspondente a "Infinity"
console.log(!!(isAtivo = true)) // Atribui o valor "true" à variável "isAtivo" e imprime o valor booleano correspondente a esse valor
//Os falsos;
console.log('os falsos...') // Imprime uma mensagem indicando que serão listados valores falsos
console.log(!!0) // Imprime o valor booleano correspondente a "0"
console.log(!!"") // Imprime o valor booleano correspondente a uma string vazia
console.log(!!null) // Imprime o valor booleano correspondente a "null"
console.log(!!NaN) // Imprime o valor booleano correspondente a "NaN"
console.log(!!undefined) // Imprime o valor booleano correspondente a "undefined"
console.log(!!(isAtivo = false)) // Atribui o valor "false" à variável "isAtivo" e imprime o valor booleano correspondente a esse valor

console.log('pra finalizar...') // Imprime uma mensagem indicando que será realizado um último teste
console.log(!!("" || null || 0 || " ")) // Usa o operador OR (||) para imprimir o valor booleano correspondente a uma expressão que retorna "true"

let nome = 'Péricles' // Atribui uma string à variável "nome"

console.log(nome || 'Desconhecido') // Usa o operador OR (||) para imprimir o valor de "nome" se ele não for uma string vazia, ou a string 'Desconhecido' caso contrário
