console.log(7 / 0) //infinito
console.log("10" / 2)
console.log("Show" * 2)
console.log(0.1 + 0.7)
//console.log(10.toString())
console.log((10).toFixed(2))

/*
console.log(7 / 0) //infinito
Nesta linha, estamos tentando dividir o número 7 por zero, o que é uma operação matematicamente impossível. Em outras linguagens de programação, isso poderia gerar um erro, mas em JavaScript, o resultado é simplesmente o valor "Infinity" (infinito).

console.log("10" / 2)
Nesta linha, estamos tentando fazer uma operação de divisão onde o dividendo é uma string que representa o número 10 e o divisor é o número 2. JavaScript é uma linguagem "fracamente tipada", o que significa que ela tentará converter a string "10" em um número antes de realizar a operação de divisão. Como a conversão foi bem-sucedida, o resultado será o número 5.

console.log("Show" * 2)
Nesta linha, estamos tentando fazer uma operação de multiplicação onde o multiplicando é uma string "Show" e o multiplicador é o número 2. Como "Show" não pode ser convertido em um número, o resultado será NaN (Not a Number).

console.log(0.1 + 0.7)
Nesta linha, estamos tentando somar os números 0.1 e 0.7. O resultado que esperaríamos é 0.8, mas devido a problemas de arredondamento na representação de números de ponto flutuante, o resultado real será um número próximo de 0.8 (0.7999999999999999).

//console.log(10.toString())
Nesta linha, estamos tentando converter o número 10 em uma string e, em seguida, chamar o método "toString()" nessa string. No entanto, isso não funciona porque o número é interpretado como um literal e, portanto, a chamada de método não é permitida.

console.log((10).toFixed(2))
Nesta linha, estamos chamando o método "toFixed()" em um número literal (10). O método "toFixed()" converte o número em uma string com um número fixo de casas decimais (no caso, 2 casas decimais), então o resultado será a string "10.00".
*/