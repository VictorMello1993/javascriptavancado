//Observable x Subject 

const { Observable, Subject } = require('rxjs')

function getObservable() {
    return new Observable(subscriber => {
        setTimeout(() => {
            console.log('#1 Observable...')
            subscriber.next(Math.random())
            subscriber.complete()
        }, 1000)
    })
}

const obs = getObservable()
obs.subscribe(console.log)
obs.subscribe(console.log)

console.log('\n')

function getSubject() {
    const sub = new Subject()
    setTimeout(() => {
        console.log('#2 Subject...')
        sub.next(Math.random())
        sub.complete()
    }, 1000)
    return sub
}

const sub = getSubject()
sub.subscribe(console.log)
sub.subscribe(console.log)

/*Observables geram valores individualmente para cada observable 
(valores unicast), que normalmente é um interessado em receber 
notificação quando evento ocorrer (quando chamar com o método subscribe()*/

/*Já um Subject repassa o mesmo valor de uma só vez para todos os 
observables que chamar o método subscriber() (valores multicast)*/