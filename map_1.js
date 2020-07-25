/* Função map() -> gera um novo array a partir de um critério estabelecido entre os elementos do array original.
                  Esse critério é determinado pela função a ser passada como parâmetro para o map()*/
                  
                  
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]                  
const dobro = (el, index, array) => 2 * el + index + array.length

console.log(nums, nums.map(dobro))
console.log('\n')
console.log(nums, nums.map(dobro))

// [].map(fn) onde:

//fn é uma função de callback que recebe até 3 parâmetros

/* fn(elemento, indice, arrayOriginal) ou seja, receberá cada elemento do array original, 
mais o índice correspondente a esse elemento mais o próprio array original*/

// Exemplo 2:
const nomes = ['Victor', 'Camilla', 'Vanderson', 'Maxuel', 'Deborah']
const primeiraLetra = el => el[0]

console.log(nomes, nomes.map(primeiraLetra))
console.log('\n')

// Exemplo 3:
const carrinho = [
    {nome: 'Caneta', qte: 10, preco: 7.99},
    {nome: 'Impressora', qte: 0, preco: 649.50},
    {nome: 'Caderno', qte: 4, preco: 27.10},
    {nome: 'Lapis', qte: 3, preco: 5.82},
    {nome: 'Tesoura', qte: 1, preco: 19.20}
]

// Desafio: Utilizar o map() para mapear o array de objetos acima utilizando 2 funções de callback:
//1) para obter apenas os nomes dos produtos
//2) para obter o total parcial de cada produto, multiplicando o valor unitário pela quantidade

const obterNomeProduto = elemento => elemento.nome
const obterParcela = elemento => elemento.preco * elemento.qte

const produtos = carrinho.map(obterNomeProduto)
const parcelas = carrinho.map(obterParcela)

console.log(produtos, parcelas)






