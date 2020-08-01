// Funções Async/Await

/*await não é suportado pelo node para executar diretamente no arquivo, e sim pelo Deno. Para que "funcione" no Node, é preciso
de uma função async*/

// function esperarPor(tempo = 2000){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             console.log('Executando promise...')
//             resolve()
//         }, tempo)
//     })
// }


// esperarPor(2000)
//     .then(esperarPor)
//     .then(esperarPor)
//     .then(esperarPor)



function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo)
    })
}

// Executando de forma assíncrona as promises
// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))


//Executando de forma assíncrona as promises (sem colocar await nas chamadas das  promises). Ocorre o mesmo efeito sem colocar async
// async function executar(){
//     esperarPor(1500)
//     console.log('Async/Await 1...')

//     esperarPor(1500)
//     console.log('Async/Await 2...')

//     esperarPor(1500)
//     console.log('Async/Await 3...')
// }


function retornarValor(){
    return new Promise(resolve =>{
        setTimeout(() => resolve(20), 5000)
    })
}

//Ou

// Isso é equivalente a resolver uma promise, mas sem chamar a função resolve()
async function retornarValorRapido(){
    return 20
}


// Colocando await nas promises, o código será executado de forma síncrona.
async function executar(){
    let valor = await retornarValorRapido()  /*Se não colocar await, a função retornarValorRapido, por estar marcada como async, 
                                              irá retornar uma promise pendente de ser resolvida*/    

    // let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Async/Await 1...${valor + 10}`)

    await esperarPor(1500)
    console.log(`Async/Await 2...${valor + 20}`)

    await esperarPor(1500)
    console.log(`Async/Await 3...${valor + 30}`)

    return valor + 100
}


async function executarDeVerdade(){
    // executar()
    const valor = await executar()
    console.log(valor)
}

// executar().then(console.log) //Acessando o valor diretamente de uma promise
// executar()
executarDeVerdade()