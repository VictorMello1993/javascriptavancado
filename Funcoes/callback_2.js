//Função de callback para leitura de um arquivo

// ---------------------------------------------------------PARTE ASSÍNCRONA----------------------------------------------------------------------------
const fs = require('fs')
const path = require('path')

console.log(__dirname) //Diretório atual no qual está localido o módulo sendo executado. No caso, o callback_2 está em Funcoes

 const caminho = path.join(__dirname, 'dados.txt') 

 //Essa é a função de callback que será executada quando o evento (no caso será a conclusão da leitura de um arquivo) for realizado.
//  Neste caso, não é necessário passar o erro, então utiliza-se _ para dizer ao interpretador para ignorar o parâmetro err
 function exibirConteudo(err, conteudo) {
     console.log(conteudo.toString())
 }

 console.log('Início...')
 fs.readFile(caminho, {}, exibirConteudo)
 
 //Usando arrow function
 fs.readFile(caminho, {}, (err, conteudo) => console.log(conteudo.toString()))
 console.log('Fim...')

/* Na parte assíncrona, o código não irá ficar aguardando o término da execução do arquivo. Ou seja, só irá disparar a função de callback
quando o evento terminar*/
// --------------------------------------------------------------------------------------------------------------------------------------

// ----------------------------------------PARTE SÍNCRONA---------------------------------------------------------------------------------------------

// OBS: na parte síncrona o código terá que esperar o término da execução da leitura do arquivo para ser finalizado
console.log('Início sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim sync...')

