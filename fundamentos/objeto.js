const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4999.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 80.90,
    obj: {
        caneca: 'Duas canecas',
        obj: {
            taca: 'Duas tacas'
        }
    }
}

console.log(prod2)