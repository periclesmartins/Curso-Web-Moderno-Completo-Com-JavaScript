// novo recurso do ES2015

// Cria um objeto 'pessoa' com três propriedades: nome, idade e endereco (este último é outro objeto com duas propriedades)
const pessoa = {
    nome: 'Péricles',
    idade: 25,
    endereco: {
        aldeia: 'Konoha',
        numero: 1997,
    }
}

// Usa a sintaxe de desestruturação para extrair as propriedades 'nome' e 'idade' do objeto 'pessoa' e armazená-las em variáveis separadas
const { nome, idade } = pessoa
console.log(`O ${nome} tem ${idade} anos.`) // Imprime uma frase com as variáveis 'nome' e 'idade' 

// Usa a sintaxe de desestruturação para extrair as propriedades 'nome' e 'idade' do objeto 'pessoa' e armazená-las em variáveis com nomes diferentes
const { nome: n, idade: i } = pessoa
console.log(`O ${n} tem ${i} anos.`) // Imprime uma frase com as variáveis 'n' e 'i' 

// Usa a sintaxe de desestruturação para extrair as propriedades 'sobrenome' e 'bemHumorada' do objeto 'pessoa', mas como 'sobrenome' não existe, ele assume o valor 'undefined'. 
// A propriedade 'bemHumorada' não existe, então ele assume o valor padrão 'true'
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada) // Imprime 'undefined true'

// Usa a sintaxe de desestruturação para extrair as propriedades 'aldeia', 'numero' e 'cep' do objeto 'endereco' que está dentro do objeto 'pessoa'
const { endereco: { aldeia, numero, cep } } = pessoa
console.log(aldeia, numero, cep) // Imprime 'Konoha 1997 undefined'
