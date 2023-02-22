// Atribui o valor 10 à variável a usando destructuring de array
const [a] = [10]
console.log(a)

// Atribui valores a variáveis n1, n3, n5 e n6, ignorando o segundo valor e atribuindo um valor padrão a n6
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

// Atribui o valor da segunda posição da segunda subarray a nota
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
