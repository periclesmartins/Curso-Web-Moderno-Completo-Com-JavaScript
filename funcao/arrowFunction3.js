// Declaração da função comparaComThis, que recebe um parâmetro 'param'
let comparaComThis = function (param) {
  console.log(this === param); // Verifica se o valor de 'this' é estritamente igual a 'param'
};

comparaComThis(global); // Chamada da função, passando o objeto global como argumento

const obj = {}; // Criação de um objeto vazio
comparaComThis = comparaComThis.bind(obj); // Utiliza o método 'bind' para fixar o valor de 'this' como o objeto 'obj'
comparaComThis(global); // Chamada da função, passando o objeto global como argumento. Como o valor de 'this' está fixo como o objeto 'obj', o resultado será 'false'
comparaComThis(obj); // Chamada da função, passando o objeto 'obj' como argumento. Como o valor de 'this' está fixo como o objeto 'obj', o resultado será 'true'

let comparaComThisArrow = (param) => console.log(this === param); // Declaração da função 'comparaComThisArrow' utilizando arrow function, que recebe um parâmetro 'param' e verifica se o valor de 'this' é estritamente igual a 'param'
comparaComThisArrow(global); // Chamada da função, passando o objeto global como argumento. Como 'this' em uma arrow function é sempre fixado no momento da declaração, o valor de 'this' será o objeto vazio ({}), e o resultado será 'false'
comparaComThisArrow(module.exports); // Chamada da função, passando o objeto module.exports como argumento. Como 'this' em uma arrow function é sempre fixado no momento da declaração, o valor de 'this' será o objeto vazio ({}), e o resultado será 'false'

comparaComThisArrow = comparaComThisArrow.bind(obj); // Utiliza o método 'bind' para fixar o valor de 'this' como o objeto 'obj'. Como 'this' em uma arrow function é sempre fixado no momento da declaração, o valor de 'this' não será alterado.
comparaComThisArrow(obj); // Chamada da função, passando o objeto 'obj' como argumento. Como 'this' em uma arrow function é sempre fixado no momento da declaração, o valor de 'this' será o objeto vazio ({}), e o resultado será 'false'
comparaComThisArrow(module.exports); // Chamada da função, passando o objeto module.exports como argumento. Como 'this' em uma arrow function é sempre fixado no momento da declaração, o valor de 'this' será o objeto vazio ({}), e o resultado será 'false'
