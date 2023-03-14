// Esta é uma função chamada "area" que recebe dois parâmetros: largura e altura.
function area(largura, altura) {
  // Aqui, a constante "area" é definida como o resultado da multiplicação da largura pela altura.
  const area = largura * altura;

  // Em seguida, é verificado se a área calculada é maior que 20. Se for, a mensagem abaixo é exibida no console.
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m2.`);
  } else {
    // Caso contrário, a área é retornada.
    return area;
  }
}

// A função "area" é chamada diversas vezes com diferentes valores de largura e altura.
console.log(area(2, 2)); // Espera-se que retorne 4.
console.log(area(2)); // Espera-se que retorne "NaN", já que um dos parâmetros não foi definido.
console.log(area()); // Espera-se que retorne "NaN", já que nenhum dos parâmetros foi definido.
console.log(area(2, 3, 17, 22, 44)); // Espera-se que retorne 6, já que apenas os dois primeiros parâmetros são utilizados na função.
console.log(area(5, 5)); // Espera-se que retorne 25.
