// Implementando a função filter

Array.prototype.meuFilter = function(fn){
    let novo = []
    for (let index = 0; index < this.length; index++) {
         if(fn(this[index], index, this)){
            novo.push(this[index])
         }       
    }
    return novo
}

const carrinho = [
    { nome: 'Caneta', qte: 10, preco: 7.99 },
    { nome: 'Impressora', qte: 0, preco: 649.50 },
    { nome: 'Caderno', qte: 4, preco: 27.10 },
    { nome: 'Lapis', qte: 3, preco: 5.82 },
    { nome: 'Tesoura', qte: 1, preco: 19.20 }
]

const qteMaiorQueZero = item => item.qte > 0
const itensValidos = carrinho.meuFilter(qteMaiorQueZero)

console.log(itensValidos)

//Extendendo o exemplo usando a função map
const nomeItensValidos = itensValidos.map(item => item.nome)
console.log(nomeItensValidos)