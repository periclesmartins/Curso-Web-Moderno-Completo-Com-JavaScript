// par nome/valor
const suadacao = 'Opa' //contexto léxico 1

function exec() {
    const suadacao = 'Fala' //contexto léxico 2
    return suadacao
}

//bjetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Péricles',
    idade: 25,
    peso: 65,
    endereco: {
        fazenda: 'Japão',
        numero: 1997
    }
}

console.log(suadacao)
console.log(exec())
console.log(cliente)