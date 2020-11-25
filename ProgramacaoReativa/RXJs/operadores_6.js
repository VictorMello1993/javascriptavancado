const { of, Observable, from } = require('rxjs')


function createPipeableOperator(nextFn) {
    return function(source){
        return Observable.create(subscriber => {
            source.subscribe({
                next(value){
                    nextFn(subscriber, value)
                }
            })
        })
    }
}


function firstElement(){
    return createPipeableOperator((subscriber, value) => {
        subscriber.next(value)
        subscriber.complete()
    })
}

from([1, 2, 3, 4, 5])
    .pipe(firstElement())
    .subscribe(console.log)