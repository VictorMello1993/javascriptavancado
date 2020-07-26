// Desafio: encapsular as chamadas de leitura de um arquivo em uma promise

const fs = require('fs')
const path = require('path')

var caminho = path.join(__dirname, 'dados.txt')

function lerArquivo (caminho){
    return new Promise(resolve => {        
        fs.readFile(caminho, (erro, conteudo) => {
            resolve(conteudo.toString())
        })                    
    })
}


lerArquivo(caminho)    
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é ${conteudo}`)
    .then(console.log)