// Em JavaScript, Orientação a Objetos é baseada em funções

//Instanciando produto 
function Produto(nome, preco, desc = 0.15){
    this.nome = nome;
    this.preco = preco;
    this._desc = desc;

    this.precoFinal = function(){
        return this.preco * (1 - this._desc)
    }
}

//Adicionando uma nova função para todas as instâncias de Produto
Produto.prototype.log = function(){
    console.log(`Produto: ${this.nome} Preço: ${this.preco}`)
}

//Criando uma propriedade para todas as instâncias de Produto
Object.defineProperty(Produto.prototype, 'desc', {
    get: function(){
        return this._desc
    },

    set: function(novoDesconto){
        if(novoDesconto >= 0 && novoDesconto <= 1){
            this._desc = novoDesconto
        }
        else{
            this._desc = 0
        }
    }
})

Object.defineProperty(Produto.prototype, 'descString', {
    get: function(){
        return `${this._desc * 100} % de desconto`
    }
})

const p1 = new Produto('GeForce RTX 2060 Super', 3000.00)
const p2 = new Produto('PS5', 8500.00)
p1.log()
p2.log()
console.log(p2.desc)
console.log(p2.descString)
p1.desc = 0.50
console.log(p1.desc)
console.log(p1.descString)
