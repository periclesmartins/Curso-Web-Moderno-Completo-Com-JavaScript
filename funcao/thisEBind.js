const pessoa = {
    saudacao: 'Bom dia!',
    pergunta: 'Tudo Bem?',
    falar() {
        console.log(this.saudacao)
        console.log(this.pergunta)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()