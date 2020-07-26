// Filter: função responsável por filtrar elementos do array de acordo com o critério estabelecido por uma função de callback

/*Dentro do filter, será feito um laço para percorrer cada elemento do array original, e a função de callback é chamada, que
retorna true ou false de acordo com o critério. Se em cada elemento, a função retornar true, ela será adicionada a um novo
array que corresponde ao array resultante da lógica proposta na função de callback. Caso contrário, não será adicionada a esse array.*/


const carrinho = [
    { nome: 'Caneta', qte: 10, preco: 7.99 },
    { nome: 'Impressora', qte: 0, preco: 649.50 },
    { nome: 'Caderno', qte: 4, preco: 27.10 },
    { nome: 'Lapis', qte: 3, preco: 5.82 },
    { nome: 'Tesoura', qte: 1, preco: 19.20 }
]

const qteMaiorQueZero = item => item.qte > 0
const itensValidos = carrinho.filter(qteMaiorQueZero)

console.log(itensValidos)

//Extendendo o exemplo usando a função map
const nomeItensValidos = itensValidos.map(item => item.nome)
console.log(nomeItensValidos)





