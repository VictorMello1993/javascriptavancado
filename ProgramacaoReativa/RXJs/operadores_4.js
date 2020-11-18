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

function lastElement() {
    return function(source){
        return Observable.create(subscriber => {
            let last
            source.subscribe({
                next(value) {
                    last = value                    
                },
                complete() {
                    if(last !== undefined){
                        subscriber.next(last)
                    }
                    subscriber.complete()
                }
            })
        })
    }
}    

from([1, 2, 3, 4, 5])
    .pipe(firstElement(), 
          lastElement())
    .subscribe(console.log)