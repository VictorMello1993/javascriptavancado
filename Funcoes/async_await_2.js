// Tratamento de erros das funções async/await

function gerarNumerosEntre(min, max, proibidos){
    if(min > max) [min, max] = [max, min]

    return new Promise((resolve, reject) => {        
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min

        if(proibidos.includes(aleatorio)){
            reject('Número repetido!')
        }
        else{
            resolve(aleatorio)
        }
    })
}

//Exemplo: gerar números da Mega Sena

// Para rejeitar uma promise que está dentro de uma função async é simplesmente disparar uma nova exceção dentro de um try catch
async function gerarMegaSena(qteNumeros, tentativas = 1){
    try {        
        const numeros = []
        for(_ of Array(qteNumeros).fill()){
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros //Quando resolve a promise
    } 
    catch (error) {
        // throw "Deu ruim =(" //Quando rejeita a promise
        if(tentativas > 100){
            throw "Deu ruim =(" //Quando rejeita a promise
        }
        else{
            return gerarMegaSena(qteNumeros, tentativas + 1)
        }        
    }
}

gerarMegaSena(25)
    .then(console.log)
    .catch(console.log)

// gerarNumerosEntre(1, 5, [1, 2, 4])
//     .then(console.log)
//     .catch(console.log)