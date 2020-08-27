/*Lazy evaluation: É a técnica na qual uma parte do código só é executada conforme necessário, de forma tardia, 
evitando processamentos pesados se for executado de forma prematura, imediata ou apressada, melhorando o desempenho*/

// Função sem avaliação tardia
function eager(a, b){ //OBS: eager = apressado

    // Processamento mais pesado
    const fim = Date.now() + 2500
    while(Date.now() < fim){}

    const valor = a ** 3 //Operador de exponenciação (novo recurso do ES6)
    return valor + b
}

// Função com avaliação tardia
function lazy(a){ //OBS: eager = apressado

    // Processamento mais pesado
    const fim = Date.now() + 2500
    while(Date.now() < fim){}

    const valor = a ** 3 //Operador de exponenciação (novo recurso do ES6)

    return function(b){
        return valor + b
    }
}

console.time('#1')
console.log(eager(3, 100))
console.log(eager(3, 200))
console.log(eager(3, 300))
console.timeEnd('#1')

const lazy3 = lazy(3)

console.time('#2')
console.log(lazy3(100))
console.log(lazy3(200))
console.log(lazy3(300))
console.timeEnd('#2')