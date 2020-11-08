const rxjs = require('rxjs')

//Promises x Observables

const promise = new Promise((resolve) => {
    resolve('Teste Promise')
})

promise.then(console.log)

const obs = new rxjs.Observable(subscriber => {
    subscriber.next('Teste')
    subscriber.next('observable')
    subscriber.next('é')
    subscriber.next('interessante')   
    setTimeout(() => {
        subscriber.next('STONKS')
        subscriber.complete() //finalizando observable e nenhum dado será passado mais
    }, 1000) 
})

obs.subscribe(console.log)
obs.subscribe(texto => console.log(texto.toUpperCase()))

//As promises são executadas apenas uma vez com a chamada da função resolve() ou reject()

/*Já os observables podem ser executdas várias vezes, através da chamada da função next() do subscriber e são reutilizáveis, pois 
a partir de um mesmo observable, é permitido mais de um subscription, com mais chamadas da função subscribe()*/

//O resultado do observable é uma stream de dados, onde os mesmos são gerados um após o outro
