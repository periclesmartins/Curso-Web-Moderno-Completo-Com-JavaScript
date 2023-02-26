// Compara se o valor da string '1' é igual ao valor numérico 1
console.log('01)', '1' == 1)

// Compara se o valor da string '1' é estritamente igual ao valor numérico 1, incluindo o tipo de dado
console.log('02)', '1' === 1)

// Compara se o valor da string '3' é diferente do valor numérico 3
console.log('03)', '3' != 3)

// Compara se o valor da string '3' é estritamente diferente do valor numérico 3, incluindo o tipo de dado
console.log('04)', '3' !== 3)

// Compara se o número 3 é menor que o número 2
console.log('05)', 3 < 2)

// Compara se o número 3 é maior que o número 2
console.log('06)', 3 > 2)

// Compara se o número 3 é menor ou igual ao número 2
console.log('07)', 3 <= 2)

// Compara se o número 3 é maior ou igual ao número 2
console.log('08)', 3 >= 2)

// Cria duas instâncias de Date com o valor 0, que representa a data de 01/01/1970
const d1 = new Date(0)
const d2 = new Date(0)

// Compara se as duas instâncias de Date são estritamente iguais, ou seja, se referem ao mesmo objeto na memória
console.log('09)', d1 === d2)

// Compara se as duas instâncias de Date são iguais, considerando apenas o valor do objeto e não o objeto em si
console.log('10)', d1 == d2)

// Compara se os valores de tempo das duas instâncias de Date são estritamente iguais
console.log('11)', d1.getTime() === d2.getTime())

// Compara se o valor undefined é igual ao valor null
console.log('12)', undefined == null)

// Compara se o valor undefined é estritamente igual ao valor null, incluindo o tipo de dado
console.log('13)', undefined === null)