// Tratamento de erros de uma promise

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            }
            else {
                resolve(valor)
            }
        }
        catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(valor => `Valor: ${valor}`)
    .then(
        v => consol.log(v),
        erro => console.log(`Erro específico: ${erro}`)
    )    
    .then(() => console.log('Quase fim!'))
    .catch(erro => console.log(`Erro: ${erro}`))
    .then(() => console.log('Fim!'))

// O erro pode ocorrer tanto dentro da própria promise quanto no encadeamento das chamadas da promise

/*Independente de onde o erro está ocorrendo, será executado o catch da promise (isso se não existir nenhum tratamento de erro anterior). 
  Depois do tratamento de erro, nas próximas execuções do then(), nenhum valor será obtido. Por isso, é preciso tomar cuidado 
  na hora de definir a posição em que será executada a chamada do catch. Via de regra, se coloca no final do encadeamento.*/

// Se existir um tratamento de erro específico dentro de uma das chamadas then() anteriormente, o catch não será executado.