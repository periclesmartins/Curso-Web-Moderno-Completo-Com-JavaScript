/*
Esse código envolve o conceito de hoisting, que é o comportamento do JavaScript de "elevar" (hoist) as declarações de variáveis e funções para o topo do escopo antes da execução real do código. Vamos comentar cada linha:
*/

console.log('a =', a) // A variável 'a' é undefined no momento, mas ainda pode ser referenciada.

var a = 2 // A variável 'a' é declarada com var e inicializada com o valor 2. Essa declaração é "elevada" para o topo do escopo.

console.log('a =', a) // Agora a variável 'a' tem valor 2 e pode ser referenciada.

console.log('b =', b) // A variável 'b' não foi declarada ou "elevada" ainda, então uma ReferenceError é lançada.

let b = 2 // A variável 'b' é declarada com let e inicializada com o valor 2. Como 'let' não tem hoisting, essa declaração não é "elevada" para o topo.

console.log(`b = ${b}`) // Agora a variável 'b' tem valor 2 e pode ser referenciada.

/*
Resumindo, a principal diferença entre var e let nesse caso é que, com var, a declaração é "elevada" para o topo do escopo, permitindo que a variável seja referenciada antes de ser inicializada. Com let, a declaração não é "elevada", e uma ReferenceError é lançada se a variável é referenciada antes de ser declarada.
*/
