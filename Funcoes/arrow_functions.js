// Arrow functions

// Forma básica de se declarar uma arrow function
const bomDia = () => console.log('Bom dia!') //Quando se tem apenas uma expressão, nunca é permitido incluir return, a menos que abra um par de chaves para um bloco de código

const boaNoite = nome => { //Quando se tem apenas 1 parâmetro para uma arrow function, não é necessário o uso dos parênteses
    return `Boa noite, ${nome}! blz???`
}

bomDia()
console.log(boaNoite('Victor'))

//Outra forma de se declarar uma arrow functions
const soma = (...numeros) => {
    let total = 0
    for(let num of numeros) {
        total += num
    }
    return total
}

// console.log(soma([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))
console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11))
console.log('\n')

//Desafio: Utilizar os conceitos de passagem de parâmetros de uma função em outra função, conforme o módulo desafio_basico.js

const somar = (num1, num2, num3 = 0) => num1 + num2 + num3
const subtrair = (num1, num2, num3 = 0) => num1 - num2 - num3
const multiplicar = (num1, num2) => num1 * num2 
const dividir = (num1, num2) => num1 / num2 

const calcular = num1 => {
    return num2 => {
        return fn => {
            return fn(num1, num2)
        }
    }
}
// Ou
const calcular = num1 => num2 => fn => fn(num1, num2)

console.log(`Soma: ${calcular(4)(3)(somar)}`)
console.log(`Diferença: ${calcular(4)(3)(subtrair)}`)
console.log(`Produto: ${calcular(4)(3)(multiplicar)}`)
console.log(`Quociente: ${calcular(4)(3)(dividir)}`)

// É importante ressaltar que o uso do 'this' para referenciar instâncias de objetos somente é acessível para funções normais, não sendo compatível em arrow functions

