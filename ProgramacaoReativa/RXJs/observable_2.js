const rxjs = require('rxjs')

//Outra forma de criar observable, no lugar de instanciação como foi feito no módulo observable_1.js
const obs = rxjs.Observable.create(subscriber => {
    subscriber.next('RxJS')
    subscriber.next('é')
    subscriber.next('bem')
    subscriber.next('poderoso')

    if (Math.random() > 0.5) {
        subscriber.complete()
    }
    else {
        subscriber.error('Erro ao executar o programa')
    }
})

//2 formas de monitorar observables

//1 - Passando funções para o método subscribe() como parâmetros
// obs.subscribe(
//     value => console.log(`Value: ${value}`), //Função que será executada em caso de sucesso, através das chamadas do next()
//     error => console.log(`Error: ${error}`), //Função que será executada em caso de erro, através da chamada da função error()
//     () => console.log('Fim do programa') //Função que será executada quando finalizar observable, quando a função complete() é executado
// )

//2 - Passando um objeto com funções next(), error() e complete()
obs.subscribe({
    next(value) {
        console.log(`Value: ${value}`)
    },
    error(error) {
        console.log(`Error: ${error}`)
    },
    complete() {
        console.log('Fim do programa')
    },
})