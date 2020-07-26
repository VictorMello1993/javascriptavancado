// Promise => é o tipo de função assíncrona que será executada no futuro, ou seja, conforme o encadeamento de chamadas de outras funções

/*A promise recebe como parâmetro uma função que será executada e devolve um valor, seja um array, objeto, string, números 
  resposta de uma requisição, conteúdo de um arquivo, etc*/

/*Para acessar o valor de uma função mais genérico da promisse, é necessário chamar o then(), que também recebe função como parâmetro e 
que retorna um valor. É permitido realizar várias chamadas then() encadeadas para realizar outros processamentos*/

/*A vantagem de se utilizar uma promise, é que com encadeamento de funções then() torna o código muito legível do que em relação ao
encadeamento de chamadas de funções callback*/


const primeiroElemento = arrayOuString => arrayOuString[0]
const primeiraLetra = nome => nome[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve){
    resolve(['Victor', 'Vanderson', 'Camilla', 'Humberto', 'Maxuel'])
}).then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then(l => console.log(l))
