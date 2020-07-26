// Diferença entre callbacks e promise

// Usando callbacks
// setTimeout(function(){
//     console.log('Executando callback 1...')
    
//     setTimeout(function(){
//         console.log('Executando callback 2...')        

//         setTimeout(function(){
//             console.log('Executando callback 3...')
//         }, 2000)
//     }, 2000)    
// }, 2000)


//Usando uma promise
function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)