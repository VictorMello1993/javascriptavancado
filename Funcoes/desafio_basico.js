// Desafio: Construir a função soma utilizando o conceito de passagem de uma função como parâmetro para outra função

// Ex: soma(3)(4)(5) -> três operandos para soma
// calcular(3)(7)(fn) -> onde fn representa uma função responsável por alguma operação (soma, subtração, multiplicação ou divisão)


function somar(num1, num2, num3 = 0){
    return num1 + num2 + num3
}

function subtrair(num1, num2, num3 = 0){
    return num1 - num2 - num3
}

function multiplicar(num1, num2){
    return num1 * num2
}

function dividir(num1, num2){
    return num1 / num2
}

function calcular1(num1, num2, num3, fn){
    return fn(num1, num2, num3)
}

console.log(`Soma: ${calcular1(4,3,10, somar)}`)
console.log(`Diferença: ${calcular1(4,3,10, subtrair)}`)
console.log(`Produto: ${calcular1(4,3,10, multiplicar)}`)
console.log(`Quociente: ${calcular1(4,3,10, dividir)}`)
console.log('\n')

// Outro desafio: Utilizar essas funções conforme o conceito de retorno de uma função a partir de uma outra função

function calcular2(num1){
    return function(num2){    
            return function(fn){
                return fn(num1, num2)
            }        
    }
}

console.log(`Soma: ${calcular2(4)(3)(somar)}`)
console.log(`Diferença: ${calcular2(4)(3)(subtrair)}`)
console.log(`Produto: ${calcular2(4)(3)(multiplicar)}`)
console.log(`Quociente: ${calcular2(3)(4)(dividir)}`)