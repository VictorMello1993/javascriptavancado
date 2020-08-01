//Definindo uma classe
class Produto{

    //Construtor
    constructor(nome, preco, desc = 0.15){
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }

    // precoFinal(){
    //     return this.preco * (1 - this.desc)
    // }    

    //Usando getters e setters
    get nome(){
        return `Produto: ${this._nome}`
    }

    get precoFinal(){
        return this.preco * (1 - this.desc)
    }    

    get preco(){
        return this._preco
    }

    set nome(novoNome){
        this._nome = novoNome.toUpperCase()
    }

    set preco(novoPreco){
        if(novoPreco < 0){
            this._preco = 0
        }
        else{
            this._preco = novoPreco
        }
    }
}

const p1 = new Produto('Caneta', 6.00)
const p2 = new Produto('Garrafa', 4.25)

// console.log(p1.nome, p1.preco, p1.precoFinal())
// console.log(p2.nome, p2.preco, p2.precoFinal())

//Usando o getter, terá que acessá-lo como se fosse um atributo e não mais como função
console.log(p1.nome, p1.preco, p1.precoFinal)
console.log(p2.nome, p2.preco, p2.precoFinal)

p1.nome = 'caneca'
console.log(p1.nome)

p1.preco = 60
console.log(p1.preco)

/*Ao instanciar uma classe, os atributos passados como parâmetros, ao serem atribuídos a variáveis  no construtor, será realizada a 
chamada do set*/
// Ao acessar o atributo, utiliza-se o get para ler o valor

console.log(typeof Produto)




