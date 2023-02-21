for (var index = 0; index < 10; index++) {
    console.log(index);   
}
console.log(`index = ${index}`)

/*
No exemplo dado, a variável index é declarada e inicializada com o valor 0 no início do loop for, e depois incrementada em 1 a cada iteração. Quando a condição de parada do loop é atingida (no caso, index < 10), o loop é encerrado e o valor de index permanece o mesmo que fez o loop parar (nesse caso, 10).

No primeiro console.log(index), o valor de index é impresso a cada iteração, enquanto a condição index < 10 é satisfeita. Como index só chega ao valor 10 quando a condição do loop é violada, o console.log não imprime o valor 10.

Já no segundo console.log(index = ${index}), a string resultante é criada utilizando o valor atual de index, que é 10, uma vez que o loop já encerrou e index permaneceu com o valor que fez o loop parar. Por isso, quando a string é impressa, ela contém o valor 10.
*/