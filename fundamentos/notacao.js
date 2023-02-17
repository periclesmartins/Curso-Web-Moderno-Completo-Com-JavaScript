console.log(Math.ceil(7.5)) // Imprime o valor 8 no console. Math.ceil arredonda o número para cima.

const obj1 = {} // Cria um novo objeto vazio e o atribui à variável obj1.
obj1.nome = 'Bola' // Cria uma nova propriedade nome no objeto obj1 e atribui o valor "Bola" a ela.
console.log(obj1.nome) // Imprime o valor da propriedade nome do objeto obj1 no console.

function Obj(nome) { // Define uma função construtora chamada Obj que aceita um parâmetro nome.
    this.nome = nome // Define uma propriedade nome no objeto criado a partir desta função construtora.
    this.exec = function() { // Define um método exec no objeto criado a partir desta função construtora.
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira') // Cria um novo objeto chamado obj2 a partir da função construtora Obj com o valor "Cadeira" passado como argumento.
const obj3 = new Obj('Mesa') // Cria um novo objeto chamado obj3 a partir da função construtora Obj com o valor "Mesa" passado como argumento.
console.log(obj2.nome) // Imprime o valor da propriedade nome do objeto obj2 no console.
console.log(obj3.nome) // Imprime o valor da propriedade nome do objeto obj3 no console.
obj3.exec() // Chama o método exec do objeto obj3, que imprime "Exec..." no console.
