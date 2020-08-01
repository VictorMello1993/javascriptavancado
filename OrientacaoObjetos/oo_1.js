// Em JavaScript, Orientação a Objetos é baseada em funções

//Instanciando produto 
function Produto(nome, preco, desconto = 0.15){
    this.nome = nome;
    this.preco = preco;
    this.desconto = desconto;

    this.precoFinal = function(){
        return this.preco * (1 - this.desconto)
    }
}

const p1 = new Produto('GeForce RTX 2060 Super', 3000.00)
const p2 = new Produto('PS5', 8500.00)

console.log(typeof p1, typeof Produto)
console.log(typeof p2, typeof Promise)
console.log(p1.nome, p1.preco, p1.desconto, p1.precoFinal())
console.log(p2.nome, p2.preco, p2.desconto, p2.precoFinal())
