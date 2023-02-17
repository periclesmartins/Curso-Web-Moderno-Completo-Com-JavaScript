var numero = 1
{
    let numero = 2
    console.log(`dentro = ${numero}`)
    //let tem escopo a nível de bloco, portanto o console só vai pegar o valor de let dentro do mesmo bloco.
}
console.log(`fora = ${numero}`) //aqui sera pego o valor da variável 'var', que tem escopo global, e pode ser acessada mesmo fora de blocos.