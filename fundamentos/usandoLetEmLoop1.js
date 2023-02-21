// loop for, inicia a variável index em 0, executa enquanto index <= 10 e incrementa index a cada iteração
for (let index = 0; index <= 10; index++) {
    console.log(index);   // imprime o valor de index a cada iteração
}

console.log(`index = ${index}`) // tenta imprimir o valor de index, porém, como a variável index foi definida com let, ela só existe dentro do escopo do loop e não está acessível aqui, gerando um ReferenceError

