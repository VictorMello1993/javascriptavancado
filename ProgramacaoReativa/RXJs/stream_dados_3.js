const rxjs = require('rxjs')

//Gerando stream de dados usando RXJs com observables
const getElements = rxjs.interval(500) //Gerando stream de dados em intervalos de 0,5 segundos

//Subscriptions
const sub1 = getElements.subscribe(num => {
    console.log(2 ** num)
})

const sub2 = getElements.subscribe(console.log)
const sub3 = rxjs.from([1,2,3]).subscribe(num => {
    console.log(num * 100)
})

setTimeout(() => sub1.unsubscribe(), 8000)
setTimeout(() => sub2.unsubscribe(), 6000)
setTimeout(() => sub3.unsubscribe(), 2000)
