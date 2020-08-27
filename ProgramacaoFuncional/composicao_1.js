//Composição de funções = encadeamento de chamadas de funções

// Composição de funções (forma síncrona)
function composite(...fns){
    return function(valor){
        return fns.reduce((acc, fn) => {
            return fn(acc)
        }, valor)
    }
}

function scream(text){
    return text.toUpperCase()
}

function emphasize(text){
    return `${text}!!!!!!`
}

function slow(text){
    return text.replace(/!/g, '').split('').join(' ') 
}

const littleCalm = composite(
    scream,
    emphasize
)

const stagy = composite(
    scream,
    emphasize,
    slow
)

const result = composite(
    scream,
    emphasize,
    slow
)('Chega')

const result2 = stagy('Para')
const result3 = littleCalm('Cuidado com o buraco')

console.log(result)
console.log(result2)
console.log(result3)