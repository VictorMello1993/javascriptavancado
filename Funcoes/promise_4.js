//Como chamar várias promises ao mesmo tempo, com uma única chamada do then() quando todas as promises forem resolvidas?

function gerarNumerosEntre(min, max, tempo){
    if(min > max) [min, max] = [max, min]

    return new Promise(resolve => {
        setTimeout(function(){
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumerosAleatorios(){
    return Promise.all([
        gerarNumerosEntre(1, 60, 100),    
        gerarNumerosEntre(1, 60, 4000),    
        gerarNumerosEntre(1, 60, 2000),    
        gerarNumerosEntre(1, 60, 300),    
        gerarNumerosEntre(1, 60, 500),    
        gerarNumerosEntre(1, 60, 600),    
    ])
}

console.time('Duração')
gerarVariosNumerosAleatorios()
    .then(numeros => console.log(numeros))
    .then(() => {
        console.timeEnd('Duração')
    })

/*A cada promise sendo chamada internamente no all(), uma vez que ela for cumprida, 
ela preenche o valor retornado dentro de um novo array*/