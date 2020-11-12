//Criando um operador de criação (create ())

const {Observable} = require('rxjs')

function elementsWithDelay(time, ...array){
    return Observable.create(subscriber => {
        (array || []).forEach((el, i) => {
            setTimeout(() => {
                subscriber.next(el)
                if(array.length === i + 1){
                    subscriber.complete()
                }
            }, time * (i + 1))
        })
    })
}

elementsWithDelay(1000, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    .subscribe(console.log)