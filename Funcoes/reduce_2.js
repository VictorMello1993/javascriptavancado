// Implementação da função reduce
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const carrinho = [
    {nome: 'Caneta', qte: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qte: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', qte: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', qte: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qte: 1, preco: 19.20, fragil: true}
]


Array.prototype.meuReduce = function (fn, init_value) {
    if (this.length == 0) {
        throw 'Array vazia.'
    } else {
        init_value = !init_value ? this[0] : init_value
        let start = init_value == this[0] ? 1 : 0

        for (let i = start; i < this.length; i++) {
            init_value = fn(init_value, this[i], i, this);
        }
        return init_value;
    }
}

const produtosFrageis = carrinho.filter(el => el.fragil).map(el => el.preco * el.qte)
const getTotal = (acc, el) => acc + el

//Teste
try{    
    console.log(nums.meuReduce(getTotal))
    console.log(`Média dos totais: ${produtosFrageis.meuReduce(getTotal) / produtosFrageis.length}`)        
}catch(e){
    console.log(`Erro: ${e}`)
}