{
    {
        {
            {
                var sera = 'Será???' //var é visivel até mesmo fora dos blocos.
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123
}

teste()
console.log(local)
// Quando você define uma variável 'var' dentro de uma função, o escopo dessa variável, estará visivel apenas dentro da função.