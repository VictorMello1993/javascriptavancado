// FlatMap é uma função que achata os níveis de um array

const letrasAninhadas = [
    ['O', ['l'], 'á'], 
    [' '],
    ['m', ['u', ['n']], 'd', 'o'],
    ['!', '!', '!', '!']
]

//Forma tradicional

// const resultado = letras
//                     .map(l => l.toUpperCase())
//                     .reduce((a, b) => a + b)
// console.log(resultado) 

//Implementando flat()
// const letras = letrasAninhadas.flat(2) //Achatando 2 níveis de um array
const letras = letrasAninhadas.flat(Infinity) //Achatando quaisquer níveis de um array
// console.log(letras)

// A função flat() recebe como parâmetro o número de níveis de um array a serem achatados.

const resultado = letras
                    .flatMap(l => [l, ','])
                    .reduce((a, b) => a + b)

console.log(resultado) 

//flatMap() basicamente executa primeiro o map() e depois o flat(), na sequência.

//Código equivalente ao código acima
const resultado2 = letras
                    .map(l => [l, ','])
                    .flat(Infinity)
                    .reduce((a, b) => a + b)
console.log(resultado2) 

