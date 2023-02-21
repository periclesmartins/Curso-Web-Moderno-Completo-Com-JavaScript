// par nome/valor
const saudacao = 'Opa' // cria a constante 'saudacao' e atribui o valor 'Opa' a ela dentro do contexto léxico 1

function exec() {
    const saudacao = 'Fala' // cria a constante 'saudacao' e atribui o valor 'Fala' a ela dentro do contexto léxico 2 (dentro da função)
    return saudacao // retorna o valor da constante 'saudacao' criada dentro do contexto léxico 2
}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Péricles', // atribui a string 'Péricles' à propriedade 'nome' do objeto 'cliente'
    idade: 25, // atribui o valor numérico 25 à propriedade 'idade' do objeto 'cliente'
    peso: 65, // atribui o valor numérico 65 à propriedade 'peso' do objeto 'cliente'
    endereco: { // cria um objeto 'endereco' como propriedade do objeto 'cliente'
        fazenda: 'Japão', // atribui a string 'Japão' à propriedade 'fazenda' do objeto 'endereco'
        numero: 1997 // atribui o valor numérico 1997 à propriedade 'numero' do objeto 'endereco'
    }
}

console.log(saudacao) // exibe o valor da constante 'saudacao' criada dentro do contexto léxico 1
console.log(exec()) // chama a função 'exec()' e exibe o valor retornado, que é da constante 'saudacao' criada dentro do contexto léxico 2
console.log(cliente) // exibe o objeto 'cliente' com todas as suas propriedades

/*
O contexto léxico em JavaScript se refere ao ambiente no qual um trecho de código é escrito e ao qual ele tem acesso às variáveis e funções definidas dentro desse ambiente. Em outras palavras, é o escopo em que uma variável é definida.

Quando um trecho de código é executado, o interpretador JavaScript cria um contexto léxico para esse código, que inclui todas as variáveis, funções e objetos definidos dentro desse contexto. O contexto léxico também define como essas variáveis e funções são acessadas e manipuladas dentro desse ambiente.

No código JavaScript, o contexto léxico é importante para entender como as variáveis são definidas e acessadas em diferentes partes do programa, bem como para garantir que essas variáveis sejam armazenadas e manipuladas corretamente. Por exemplo, variáveis definidas dentro de uma função são acessíveis apenas dentro dessa função, enquanto variáveis definidas fora da função são acessíveis em todo o programa.
*/
