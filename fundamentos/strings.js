// Define a constante 'escola' com o valor 'Cod3r'
const escola = 'Cod3r'

// Acessa o caractere no índice 4 da string 'Cod3r' e imprime no console
console.log(escola.charAt(4))

// Acessa o caractere no índice 5 da string 'Cod3r' (que não existe) e imprime no console, retornando um valor vazio
console.log(escola.charAt(5))

// Retorna o valor Unicode do caractere no índice 3 da string 'Cod3r' e imprime no console
console.log(escola.charCodeAt(3))

// Retorna o índice da primeira ocorrência da string '3' na string 'Cod3r' e imprime no console
console.log(escola.indexOf('3'))

// Retorna uma nova string que começa a partir do índice 1 (excluindo o primeiro caractere 'C') da string 'Cod3r' e imprime no console
console.log(escola.substring(1))

// Retorna uma nova string com os primeiros 3 caracteres da string 'Cod3r' (ou seja, 'Cod') e imprime no console
console.log(escola.substring(0, 3))

// Concatena as strings 'Escola ', 'Cod3r' e '!' e imprime o resultado no console
console.log('Escola '.concat(escola).concat('!'))

// Concatena as strings 'Escola ', 'Cod3r' e '!' e imprime o resultado no console
console.log('Escola ' + escola + '!')

// Usa a interpolação de strings para incluir o valor da constante 'escola' em uma string e imprime o resultado no console
console.log(`Escola ${escola}!`)

// Substitui a primeira ocorrência do caractere '3' na string 'Cod3r' pelo caractere 'e' e imprime o resultado no console
console.log(escola.replace(3, 'e'))

// Separa a string 'Ana, Maria, Pedro' em um array com os elementos 'Ana', 'Maria' e 'Pedro', e imprime o resultado no console
console.log('Ana, Maria, Pedro'.split(','))
