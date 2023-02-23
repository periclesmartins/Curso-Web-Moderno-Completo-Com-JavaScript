/*
Claro! O tratamento de erros em JavaScript é uma técnica importante para lidar com situações inesperadas e evitar que o código pare de funcionar completamente.

O bloco try...catch é utilizado para capturar exceções (erros) que ocorrem durante a execução do código. Ele funciona da seguinte forma:

O código dentro do bloco try é executado normalmente
Se ocorrer um erro durante a execução do código dentro do bloco try, o controle é transferido para o bloco catch
O bloco catch captura o erro e executa o código dentro dele
Veja um exemplo simples:
*/
try {
    // tenta executar o código
    console.log("O código dentro do bloco try está sendo executado");
    throw new Error("Erro intencional");
  } catch (error) {
    // captura o erro e executa o código dentro do bloco catch
    console.log(`Ocorreu um erro: ${error}`);
  } finally {
    console.log("O bloco finally sempre é executado");
  }
/*
Nesse exemplo, estamos tentando executar um código dentro do bloco try. Note que estamos lançando um erro de propósito com a instrução throw new Error("Erro intencional"). Isso é feito apenas para ilustrar a captura do erro pelo bloco catch.

O bloco finally é opcional e sempre é executado, independentemente de ter ocorrido um erro ou não.

Outra instrução importante é o throw, que é usada para lançar um erro manualmente. Por exemplo:
*/
function divide(a, b) {
    if (b === 0) {
      throw new Error("Não é possível dividir por zero");
    }
    return a / b;
  }
  
  try {
    console.log(divide(10, 2)); // retorna 5
    console.log(divide(10, 0)); // lança um erro
  } catch (error) {
    console.log(`Ocorreu um erro: ${error}`);
  }
/*
Nesse exemplo, a função divide verifica se o divisor é igual a zero e, se for, lança um erro manualmente com a instrução throw new Error("Não é possível dividir por zero"). Quando a função divide é chamada com um divisor igual a zero, um erro é lançado e capturado pelo bloco catch.
*/