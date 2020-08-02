/* Funções puras são funções em que o valor de retorno é determinado APENAS por seus valores de entrada, sem efeitos colaterais
observáveis*/

const PI = 3.14

//Ex
function AreaCircle (radius){
    return Math.pow(radius, 2) * PI
}

//No exemplo acima, a função é IMPURA, pois a variável PI está fora da função, o que se configura como efeito colateral observável.
//Essa função está dependendo de uma variável que pode ser alterada no lado de fora da função.

function AreaCircle2 (radius, pi){
    return Math.pow(radius, 2) * pi 
}

/*Agora na linha acima, essa função é pura, pois só está dependendo do que está sendo utilizado dentro da função, ou seja, que 
dependem de seus valores de entrada*/

console.log(AreaCircle(10))
console.log(AreaCircle2(10, 3.141512))
