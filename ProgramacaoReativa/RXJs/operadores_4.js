// Criando um operador pipable (encadeável)

const {from, Observable} = require('rxjs')

function firstElement(){
    return function(source){
        return Observable.create(subscriber => {
            source.subscribe({
                next(value){
                    subscriber.next(value)
                    subscriber.complete()
                }
            })
        })
    }
}

from([1, 2, 3, 4, 5])
    .pipe(firstElement())
    .subscribe(console.log)