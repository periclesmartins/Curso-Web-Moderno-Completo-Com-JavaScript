const nome = 'Rebeca' //Declaração de uma constante nome com o valor "Rebeca"
const concatenacao = `Olá ${nome}!` //Declaração de uma constante concatenacao com a utilização de template literals, que permite a interpolação de variáveis dentro de uma string utilizando ${}. Aqui é exibido o valor da constante nome dentro da string "Olá {nome}!"
const template = `
Olá
${nome}!` //Declaração de uma constante template com quebra de linha utilizando a sintaxe de template literals. Também é utilizado a interpolação da variável nome dentro da string

console.log(concatenacao, template) //Exibição dos valores das constantes concatenacao e template no console do navegador

// expressoes...
console.log(`1 + 1 = ${1 + 1}`) //Exibição de uma expressão matemática utilizando template literals. Aqui é exibido "1 + 1 = 2"

const up = texto => texto.toUpperCase() //Declaração de uma função arrow que recebe um texto e retorna o valor em letras maiúsculas
console.log(`Ei... ${up('cuidado')}!`) //Exibição de uma string com a utilização da função up para transformar o valor "cuidado" em letras maiúsculas. Aqui é exibido "Ei... CUIDADO!"
