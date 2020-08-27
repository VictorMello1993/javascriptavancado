// Composição de funções com promises (assincronismo)

function composite(...fns){
    return function(value){
        return fns.reduce(async (acc, fn) => {
            //Verificando se o tipo do acumulador é uma promise
            if(Promise.resolve(acc) === acc){
                return fn(await acc) //Se for uma promise, aguardar a promise a ser resolvida para passar o valor obtido dela para cada função fn
            }
            else{
                return fn(acc) //Se for valor primitivo, executar de forma síncrona
            } 
        }, value)
    }
}

function scream(text){
    return text.toUpperCase()
}

function emphasize(text){
    return `${text}!!!!!!`
}

function slow(text){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(text.replace(/!/g, '').split('').join(' ')) 
        }, 3000)
    })
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

stagy('Para').then(console.log)
littleCalm('Cuidado com o buraco').then(console.log)

