// Função "soma" que recebe uma quantidade variável de argumentos
function soma() {
  // Declaração da variável "soma" inicializada com o valor zero
  let soma = 0;

  // Loop "for-in" que itera sobre cada argumento passado para a função
  // e soma o seu valor à variável "soma"
  for (i in arguments) {
    soma += arguments[i];
  }

  // Retorna o valor final da soma
  return soma;
}

// Exemplos de chamadas à função "soma" com diferentes quantidades e tipos de argumentos
console.log(soma()); // Imprime "0"
console.log(soma(1)); // Imprime "1"
console.log(soma(1.1, 2.2, 3.3)); // Imprime "6.6"
console.log(soma(1.1, 2.2, 3.3, "Teste")); // Imprime "6.6Teste"
console.log(soma("a", "b", "c")); // Imprime "0abc"
