function bomDia(){
    console.log('Bom dia!!!!!!')
}

const boaTarde = function(){
    console.log('Boa tarde!')
}

// 1) Passar uma função como parâmetro para outra função
function executaQualquerCoisa(fn){
    if(typeof fn === 'function'){
        fn()
    }
    else{
        console.log(`Erro: ${fn} não é uma função!`)
    }
}

executaQualquerCoisa(bomDia) //Executa
executaQualquerCoisa(boaTarde) //Executa
executaQualquerCoisa(3) //Erro
executaQualquerCoisa({nome: 'Victor'}) //Erro

// 2) Retornar uma função a partir de uma outra função
function potencia(base){
    return function(exp){
        return Math.pow(base, exp)
    }
}

console.log(potencia(3)(4))
// Ou
const potencia3 = potencia(3)
console.log(potencia3(4))
