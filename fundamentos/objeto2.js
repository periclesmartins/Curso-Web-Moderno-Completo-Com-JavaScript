console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())

/*
O código apresenta alguns exemplos de uso do operador typeof e da criação de objetos em JavaScript.

Na primeira linha, é feita a verificação do tipo de Object, que é uma função nativa do JavaScript que serve para criar objetos.

Na segunda linha, é criado um novo objeto a partir da função Object usando a palavra-chave new, e em seguida é feita a verificação do tipo do objeto criado.

Na quarta linha, é criada uma nova função Cliente utilizando a sintaxe de função em JavaScript. Em seguida, é feita a verificação do tipo da função.

Na sexta linha, é criada uma classe Produto utilizando a sintaxe de classes introduzida no ECMAScript 2015 (também conhecido como ES6). Em seguida, é feita a verificação do tipo da classe.

Na última linha, é criado um novo objeto a partir da classe Produto utilizando a palavra-chave new, e em seguida é feita a verificação do tipo do objeto criado.

Os resultados impressos no console mostram que o tipo de Object e Produto é function, já que ambas são funções. Já o tipo do objeto criado a partir de Object e Produto é object. O tipo da função Cliente é function, enquanto o tipo do objeto criado a partir de Cliente é object.
*/