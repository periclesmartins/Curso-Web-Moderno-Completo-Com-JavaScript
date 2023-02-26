// função que retorna um objeto com informações de compras baseadas nos parâmetros de entrada
function compras(trabalho1, trabalho2) {
    // compra sorvete se pelo menos um dos trabalhos for verdadeiro
    const comprarSorvete = trabalho1 || trabalho2
    // compra TV 50 polegadas somente se ambos os trabalhos forem verdadeiros
    const comprarTv50 = trabalho1 && trabalho2
    // compra TV 32 polegadas somente se um dos trabalhos for verdadeiro (diferente)
    const comprarTv32 = trabalho1 != trabalho2
    // mantém a saúde caso não compre sorvete (se comprarSorvete for falso)
    const manterSaudavel = !comprarSorvete //operador unário

    // retorna objeto com informações de compras
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

// testes da função compras com diferentes valores de entrada
console.log(compras(true, true)) // retorna { comprarSorvete: true, comprarTv50: true, comprarTv32: false, manterSaudavel: false }
console.log(compras(true, false)) // retorna { comprarSorvete: true, comprarTv50: false, comprarTv32: true, manterSaudavel: false }
console.log(compras(false, true)) // retorna { comprarSorvete: true, comprarTv50: false, comprarTv32: true, manterSaudavel: false }
console.log(compras(false, false)) // retorna { comprarSorvete: false, comprarTv50: false, comprarTv32: false, manterSaudavel: true }
