
const carrinho = [
    {nome: 'Caneta', qte: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qte: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', qte: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', qte: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qte: 1, preco: 19.20, fragil: true}
]

// Desafio 1: Obter produtos que sejam frágeis
// Desafio 2: Obter os totais de cada produto (quantidade * preço)
// Desafio 3: Obter a média de todos os totais de cada um dos produtos


//1)
const produtosFrageis = carrinho.filter(item => item.fragil)
console.log(produtosFrageis)

//2)
const totais = produtosFrageis.map(item => item.preco * item.qte)
console.log(totais)

//3)
const mediaInicial = {qte: 0, total: 0, media: 0}

const mediaTotais1 = totais.reduce((acc, el) => {        
    const novaQte = acc.qte + 1
    const novoTotal = acc.total + el
    console.log(`Quantidade: ${novaQte} - Total: ${novoTotal} - Média: ${novoTotal / novaQte}`)
    return {
        qte: novaQte,
        total: novoTotal,
        media: novoTotal / novaQte
    }
}, mediaInicial)
console.log(mediaTotais1.media)

//Alternativa
const mediaTotais2 = totais.reduce((acc, el) => acc + el) / totais.length
console.log(mediaTotais2)

