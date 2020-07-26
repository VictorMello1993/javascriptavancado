/* Função reduce => retorna um novo array com base no processamento realizado nos elementos do array original a 
partir de um parâmetro denominado acumulador*/

//array.reduce(fn, valor_inicial), onde:

//fn representa a função de callback que recebe 2 parâmetros:
    /*acumulador => recebe o valor inicial na primeira chamada da função. A cada iteração do array original, o valor do acumulador é 
                    atualizado para as próximas iterações. Caso não seja passado o valor inicial, este será o primeiro elemento do array
                    como valor padrão.*/

    //elemento do array a cada iteração

//valor_inicial => valor inicial que será passado para o acumulador. Este parâmetro é opcional, conforme dito anteriormente.
                

const carrinho = [
    {nome: 'Caneta', qte: 10, preco: 7.99},
    {nome: 'Impressora', qte: 0, preco: 649.50},
    {nome: 'Caderno', qte: 4, preco: 27.10},
    {nome: 'Lapis', qte: 3, preco: 5.82},
    {nome: 'Tesoura', qte: 1, preco: 19.20}
]

const getTotalGeral_1 = (acc, item) => acc + (item.qte * item.preco)
const getTotalGeral_2 = (acc, item) => acc + item

totalGeral1 = carrinho.reduce(getTotalGeral_1, 0)
console.log(totalGeral1)

//Alternativa: calcular os totais de cada produto usando o map()
const getTotais = item => item.qte * item.preco
const totalGeral2 = carrinho.map(getTotais).reduce(getTotalGeral_2)
console.log(totalGeral2, '\n')

//Teste
const totaisParciais = carrinho.map(getTotais)
console.log(totaisParciais)

const totalGeral3 = totaisParciais.reduce((acc, el) => {
    console.log(`Acumulador: ${acc} - Elemento atual: ${el}`)
    return acc + el
})

console.log(totalGeral3)
