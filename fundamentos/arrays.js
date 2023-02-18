const valores = [7.7,8.9,6.3,9.2] // cria um array com quatro elementos

console.log(valores[0], valores[3]) // imprime o primeiro e o quarto elemento do array no console (7.7, 9.2)
console.log(valores[4]) // imprime o valor de um elemento que não existe no array (undefined)

valores[4] = 10 // adiciona um novo valor ao array, na quinta posição
console.log(valores) // imprime o array completo no console, com o novo valor adicionado (7.7, 8.9, 6.3, 9.2, 10)
console.log(valores.length) // imprime a quantidade de elementos do array no console (5)

valores.push({id: 3}, false, null, 'teste') // adiciona vários valores ao final do array
console.log(valores) // imprime o array completo no console (7.7, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null, 'teste')

console.log(valores.pop()) // remove e imprime o último elemento do array no console ('teste')
delete valores[0] // remove o primeiro elemento do array
console.log(valores) // imprime o array sem o primeiro elemento (8.9, 6.3, 9.2, 10, { id: 3 }, false, null)

console.log(typeof valores) // imprime o tipo da variável 'valores' no console (object)
