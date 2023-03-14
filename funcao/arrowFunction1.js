let dobro = function (a) {
  // cria uma função chamada dobro com um parâmetro 'a'
  return 2 * a; // retorna o dobro do parâmetro 'a'
};

dobro = (a) => {
  // redefine a função dobro usando arrow function e com um parâmetro 'a'
  return 2 * a; // retorna o dobro do parâmetro 'a'
};

dobro = (a) => 2 * a; // retorna o dobro do parâmetro 'a', usando o recurso de "return implícito"
console.log(dobro(Math.PI)); // chama a função dobro e passa o valor de Math.PI como argumento

let ola = function () {
  // cria uma função chamada ola sem parâmetros
  return "Olá"; // retorna a string "Olá"
};

ola = () => "Olá"; // redefine a função ola usando arrow function sem parâmetros
ola = (_) => "Olá"; // redefine a função ola usando arrow function com um parâmetro 'qualquer' ignorado com o "_"
console.log(ola()); // chama a função ola e imprime o retorno no console

/*
Basicamente, as três definições de dobro fazem a mesma coisa: receber um parâmetro a e retornar o seu dobro. A primeira usa uma function expression, a segunda e a terceira usam arrow functions. A terceira é uma forma simplificada da segunda, onde o return é implícito.

Já a definição de ola usa uma função sem parâmetros que sempre retorna "Olá". As duas últimas definições usam arrow functions, onde a segunda tem um parâmetro ignorado e a terceira não tem nenhum parâmetro.
*/
