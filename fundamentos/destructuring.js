// novo recurso do ES2015

const pessoa = {
    nome: 'Péricles',
    idade: 25,
    endereco: {
        aldeia: 'Konoha',
        numero: 1997,
    }
}

const { nome, idade } = pessoa
console.log(`O ${nome} tem ${idade} anos.`)

const { nome: n, idade: i } = pessoa
console.log(`O ${n} tem ${i} anos.`)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { aldeia, numero, cep } } = pessoa
console.log(aldeia, numero, cep)