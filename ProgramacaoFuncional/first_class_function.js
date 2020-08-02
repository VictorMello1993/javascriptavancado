// Funções de primeira classe: São funções que são tratadas como qualquer outra variável

const x = 3
const y = function(txt){
    return `Esse é o texto ${txt}`
}

console.log(x)
console.log(y('Olá mundo!'))